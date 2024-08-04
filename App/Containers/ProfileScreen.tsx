import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { AntDesign, Ionicons, Octicons, MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list';
import SelectableRating from '../Components/SelectableRating';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="bell" size={20} color="white" />
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile.jpeg')}
        />
        <View style={styles.profileContent}>
          <Text style={styles.name}>Shaikh Wasi Sadman</Text>
          <Text style={styles.username}>paypeoples.com/@username</Text>
          {/* <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐️⭐️⭐️⭐️⭐️</Text>
          </View> */}
          <View style={styles.ratingContainer}>
            <SelectableRating />
          </View>
        </View>
        <View style={styles.profileInfoRowContainer}>
          <TouchableOpacity style={styles.profileInfoRow}>
            <Octicons name="person" size={16} color="white" />
            <Text style={styles.profileInfoText}>Personal Info</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.profileInfoRow}>
            <Octicons name="credit-card" size={16} color="white" />
            <Text style={styles.profileInfoText}>Wallets</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.profileInfoRow}>
            <MaterialIcons name="stream" size={16} color="white" />
            <Text style={styles.profileInfoText}>Stream</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <FlashList
            data={data}
            estimatedItemSize={50}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <InfoRow
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
                viewAction={item.viewAction}
                upgradeAction={item.upgradeAction}
                copyAction={item.copyAction}
                shareAction={item.shareAction}
              />
            )}
          />
        </View>
      </View>
    </View>
  )
}


interface InfoRowProps {
  icon: string;
  label: string;
  value: React.ReactNode;
  viewAction?: () => void;
  upgradeAction?: () => void;
  copyAction?: () => void;
  shareAction?: () => void;
}

const TeamMembers = () => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.infoSubLabel}>{<Feather name="user-check" size={16} color="#0078be" />} Active</Text>
        <Text style={styles.infoSubLabel}>40</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.infoSubLabel}>{<Feather name="user-x" size={16} color="#0078be" />} Inactive</Text>
        <Text style={styles.infoSubLabel}>25</Text>
      </View>
    </View>
  )
}

const data = [
  { icon: 'dollar', label: 'Total Earnings', value: '$7034.00', viewAction: () => console.log('View Total Earnings'), upgradeAction: undefined, copyAction: undefined, shareAction: undefined },
  { icon: 'user', label: 'Sponsored by', value: 'Nastia Diadenchuk', viewAction: () => console.log('View Sponsor'), upgradeAction: undefined, copyAction: undefined, shareAction: undefined },
  { icon: 'user', label: 'Personal affiliate team', value: '50 Allies', viewAction: () => console.log('View Affiliate Team'), upgradeAction: undefined, copyAction: undefined, shareAction: undefined },
  { icon: 'users', label: 'Total team investment', value: '$6240.00', viewAction: () => console.log('View Team Investment'), upgradeAction: undefined, copyAction: undefined, shareAction: undefined },
  { icon: 'group', label: 'Team members', value: <TeamMembers />, viewAction: undefined, upgradeAction: undefined, copyAction: undefined, shareAction: undefined },
  { icon: 'user', label: 'Activated on', value: '27-Oct-22', viewAction: undefined, upgradeAction: () => console.log('Upgrade'), copyAction: undefined, shareAction: undefined },
  { icon: 'link', label: 'Self ref link', value: 'AR2356', viewAction: undefined, upgradeAction: undefined, copyAction: () => console.log('Copy Link'), shareAction: () => console.log('Share Link') },
];

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value, viewAction, upgradeAction, copyAction, shareAction }) => (
  <View style={styles.infoRowItemContainer}>
    <View style={styles.infoRow}>
      <View style={styles.iconLabelContainer}>
        <FontAwesome name={icon as keyof typeof FontAwesome.glyphMap} size={18} color="#0078be" style={styles.icon} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {upgradeAction && (
          <TouchableOpacity onPress={upgradeAction} style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Ionicons name="sync" size={16} color="#0078be" />
            <Text style={styles.viewText}>Upgrade</Text>
          </TouchableOpacity>
        )}
        {viewAction && (
          <TouchableOpacity onPress={viewAction} style={{ flexDirection: 'row', marginLeft: 5 }}>
            <AntDesign name="eyeo" size={16} color="#0078be" />
            <Text style={styles.viewText}>View</Text>
          </TouchableOpacity>
        )}
        {copyAction && (
          <TouchableOpacity onPress={copyAction} style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Feather name="copy" size={16} color="#0078be" />
            <Text style={styles.viewText}>Copy</Text>
          </TouchableOpacity>
        )}
        {shareAction && (
          <TouchableOpacity onPress={shareAction} style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Feather name="share-2" size={16} color="#0078be" />
            <Text style={styles.viewText}>Share</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
    {
      typeof value === 'object' ? value :
        <Text style={styles.infoSubLabel}>{value}</Text>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    alignItems: 'flex-end',
  },
  profileInfo: {
    width: '90%',
    height: 200,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 20,
    marginTop: 100,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    elevation: 5,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // display: 'none'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -50,
    position: 'absolute',
    zIndex: 1
  },
  profileContent: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 10
  },
  profileInfoRowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#444',
  },
  profileInfoRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  profileInfoText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5
  },
  separator: {
    width: 0.5,
    height: '100%', 
    backgroundColor: '#444',
  },
  name: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
    marginTop: 10
  },
  username: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  rating: {
    color: '#ffd700',
  },
  infoContainer: {
    paddingHorizontal: '5%',
    backgroundColor: '#2a2a2a',
    marginTop: 180,
    borderRadius: 20,
    flex: 1,
    // height: '100%',
    paddingTop: 100,
  },
  infoRowItemContainer: {
    backgroundColor: '#121212',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  iconLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    width: 20
  },
  infoLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  infoSubLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
    marginLeft: 30,
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  viewText: {
    fontSize: 14,
    color: '#0078be',
    marginLeft: 5
  },
})

export default ProfileScreen
