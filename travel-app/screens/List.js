import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import * as theme from '../theme';
import mockData from '../mocks/mockData';

import HeaderComponent from '../components/HeaderComponent';
import DestinationsComponent from '../components/Destinations';
import RecommendedComponent from '../components/Recommended';


class Articles extends Component {
  static navigationOptions = {
    header: (
      <HeaderComponent />
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <DestinationsComponent 
          destinations={this.props.destinations}
          navigation={this.props.navigation}
        />
        <RecommendedComponent 
          destinations={this.props.destinations}
          navigation={this.props.navigation}
        />
      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: mockData
};

export default Articles;
