import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SelectableRating: React.FC = () => {
  const [rating, setRating] = useState<number>(2);

  const handlePress = (index: number) => {
    setRating(index);
  };

  return (
    <View style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handlePress(star)}>
          <FontAwesome
            name="star"
            size={16}
            color={star <= rating ? '#ffd700' : '#ccc'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectableRating;
