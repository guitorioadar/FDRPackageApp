import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Octicons, AntDesign } from '@expo/vector-icons'
import { useFetchPackages } from '../Services/api';
import PackageCard from '../Components/PackageCard';
import { useStore } from '../Stores/StoreProvider';
import { IPackage } from '../Stores/types';

const HomeScreen: React.FC = observer(() => {
    const { packages, setPackages } = useStore();
    const { data, error, isLoading, refetch } = useFetchPackages();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refetch().then(() => setRefreshing(false));
    }, [refetch]);

    useEffect(() => {
        if (data) {
            setPackages(data);
        }
    }, [data, setPackages]);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0078be" style={styles.loading} />;
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error fetching packages</Text>
                <TouchableOpacity style={styles.retryButton} onPress={onRefresh}>
                    <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={styles.headerBar}>
                <Octicons name="bell" size={20} color="white" />
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>Get FDR Package</Text>
            </View>
            <View style={styles.noticeContainer}>
                <AntDesign name="exclamationcircle" size={16} color="white" />
                <Text style={styles.noticeText}>
                    You are using <Text style={styles.boldText}>free version only for 30 days</Text>. Get package and build community.
                </Text>
            </View>
            <View style={styles.packageContainer}>
                {packages.map((pkg: IPackage) => {
                    const formattedProfit = pkg.MonthlyReturn.replace(/.*?(\d+)%.*?(\d+)%/, '$1% to $2% monthly');
                    const yearMatches = pkg.MonthlyReturn.match(/(\d+)\s*Year/gi);
                    const formattedYears = yearMatches ? yearMatches.join(' or ').replace(/Year/gi, 'year') : '';
                    const transformedPrice = pkg.Price.replace(/(\$\d+)\s*-\s*above/, '$1+');
                    return (
                        <PackageCard
                            key={pkg.ID}
                            title={pkg.Name}
                            price={transformedPrice}
                            profit={formattedProfit}
                            maturity={formattedYears}
                            bonus={`${pkg.Bonus} tokens`}
                            maturityBonus={`${Number(pkg.MaturityBonus)}% after maturity `}
                            recommended={pkg.ID === 8}
                            // price={pkg.Price}
                            // profit={pkg.MonthlyReturn}
                            // maturity={`${pkg.Duration} years`}
                        />
                    )
                })}
                <PackageCard comingSoon={true} title={''} price={''} profit={''} maturity={''} bonus={''} maturityBonus={''} />
                <PackageCard comingSoon={true} title={''} price={''} profit={''} maturity={''} bonus={''} maturityBonus={''} />
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerBar: {
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginTop: 20
    },
    headerTitle: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    headerTitleText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    noticeContainer: {
        flexDirection: 'row',
        backgroundColor: '#0078be',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    noticeText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 10,
        lineHeight: 20,
        marginTop: -3
    },
    boldText: {
        fontWeight: 'bold',
    },
    packageContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
    retryButton: {
        marginTop: 16,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        minWidth: 80,
        alignItems: 'center',
    },
    retryText: {
        color: 'blue',
    }
});

export default HomeScreen;
