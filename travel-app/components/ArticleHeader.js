import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import * as theme from '../theme';

const ArticleHeader = ({ navigation }) => {
  return (
      <View style={[styles.flex, styles.row, styles.header]}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" color={theme.colors.white} size={theme.sizes.font * 1} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-horiz" color={theme.colors.white} size={theme.sizes.font * 1.5} />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: 'row'
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
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

 
export default ArticleHeader;
