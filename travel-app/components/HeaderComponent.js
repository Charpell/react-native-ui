import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as theme from '../theme';

const HeaderComponent = ({ nameOfApp }) => {
  return ( 
    <View style={[styles.flex, styles.row, styles.header,]}>
        <View>
          <Text style={{ color: theme.colors.caption }}>Search for place</Text>
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Destination</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} />
        </View>
      </View>
   );
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
});

 
export default HeaderComponent;
