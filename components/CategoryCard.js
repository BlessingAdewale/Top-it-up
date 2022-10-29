/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Details */}
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}>
        <View>
          {/* Category */}
          {/* Date */}
        </View>
        <Text>{/* News Title */}</Text>

        <View>
          <View>
            {/* Author's Image */}
            {/* Author's Name */}
          </View>
          {/* Three dots icon */}
          <Image />
        </View>
      </View>
      {/* Image */}
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
    </TouchableOpacity>
  );
};
export default CategoryCard;
