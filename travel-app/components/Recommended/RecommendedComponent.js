import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RatingComponent from '../RatingComponent';
import * as theme from '../../theme';

const { width } = Dimensions.get('window');

const RecommendedComponent = ({ item, index, destinations }) => {
    const isLastItem = index === destinations.length - 1;
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
          <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
            <Text style={styles.recommendationTemp}>
              {item.temperature}℃
            </Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={theme.colors.white}
              size={theme.sizes.font * 1.25}
            />
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: theme.sizes.margin }
          ]}>
            <RatingComponent 
              rating={item.rating}
            />
            <Text style={{ color: theme.colors.active }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  }
});

 
export default RecommendedComponent;