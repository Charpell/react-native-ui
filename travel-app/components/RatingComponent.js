import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';

const RatingComponent = ({ rating }) => {
  const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
          />
        )
      })
    )
}

 
export default RatingComponent;
