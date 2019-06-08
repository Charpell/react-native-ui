import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Animated } from 'react-native';

import DestinationComponent from './DestinationComponent';
import DotComponent from '../../components/DotsComponent';

class Destinations extends Component {
  scrollX = new Animated.Value(0);
  
  render() {
    return (
      <View style={styles.destinations}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible', height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => <DestinationComponent item={item} navigation={this.props.navigation} />}
        />
        <DotComponent 
          destinations={this.props.destinations}
          scrollX={this.scrollX}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});

 
export default Destinations;
