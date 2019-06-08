import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import * as theme from '../../theme';
const { width } = Dimensions.get('window');


const DestinationInfo = ({ item }) => {
  return (
    <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
      <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
        {item.title}
      </Text>
      <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
        <Text style={{ color: theme.colors.caption }}>
          {item.description.split('').slice(0, 50)}...
        </Text>
        <FontAwesome
          name="chevron-right"
          size={theme.sizes.font * 0.75}
          color={theme.colors.caption}
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  }
});

 
export default DestinationInfo;
