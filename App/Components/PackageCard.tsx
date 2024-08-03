import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';

interface PackageCardProps {
  title: string;
  price: string;
  profit: string;
  maturity: string;
  bonus: string;
  maturityBonus: string;
  comingSoon?: boolean;
  recommended?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  profit,
  maturity,
  bonus,
  maturityBonus,
  comingSoon = false,
  recommended = false,
}) => {
  return (
    <LinearGradient
      colors={['#01457c', '#3c3c3c']}
      style={styles.card}
      start={[1, 1]}
      end={[0, 1]}  
    >
      {comingSoon ? (
        <View style={styles.comingSoonOverlay}>
          <EvilIcons name="lock" size={100} color="#fff" style={styles.lockIcon} />
          <Text style={styles.lockText}>Coming Soon</Text>
        </View>
      ) : (
        <>
          <View style={[styles.cardRecommended,{
            backgroundColor: recommended ? '#0078be' : 'transparent',
          }]}>
            <Text style={[styles.cardRecommendedText,{
              display: recommended ? 'flex' : 'none',
            }]}>Recommended</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.selectButton}>
              <Text style={styles.selectText}>Select</Text>
            </TouchableOpacity>
            <Text style={styles.infoText}>Profit: <Text style={{ fontWeight: '400' }}>{profit}</Text></Text>
            <Text style={styles.infoText}>Maturity: <Text style={{ fontWeight: '400' }}>{maturity}</Text></Text>
            <Text style={styles.infoText}>Bonus: <Text style={{ fontWeight: '400' }}>{bonus}</Text></Text>
            <Text style={styles.infoText}>Maturity bonus: <Text style={{ fontWeight: '400' }}>{maturityBonus}</Text></Text>
          </View>
        </>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 250,
    borderRadius: 10,
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 16,
  },
  cardRecommended: {
    height: 24,
    backgroundColor: '#0078be',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center'
  },
  cardRecommendedText: {
    color: '#fff',
    fontSize: 12,
  },
  title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
    alignSelf: 'center'
  },
  price: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'center'
  },
  selectButton: {
    backgroundColor: '#0078be',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  selectText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 4,
    fontWeight: '700',
    lineHeight: 14
  },
  comingSoonOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    marginBottom: 10,
  },
  lockText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PackageCard;
