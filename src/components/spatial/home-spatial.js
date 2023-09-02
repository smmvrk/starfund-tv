/* eslint-disable react/no-multi-comp */
import {
  initNavigation,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation';
import {throttle} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles/styles';
import {SpatialPropTypes} from '../../utils/types';

import HomeContentFocusable from '../content/home-content';

initNavigation({
  debug: true,
  visualDebug: false,
});

const HomeSpatial = ({navigateByDirection, setFocus}) => {
  const onWheel = event => {
    event.preventDefault();
    throttledWheelHandler(event);
  };

  const throttledWheelHandler = throttle(
    event => {
      event.preventDefault();
      const {deltaY, deltaX} = event;
      if (deltaY > 1) {
        navigateByDirection('down');
      } else if (deltaY < 0) {
        navigateByDirection('up');
      } else if (deltaX > 1) {
        navigateByDirection('right');
      } else if (deltaX < 1) {
        navigateByDirection('left');
      }
    },
    500,
    {trailing: false},
  );

  return (
    <View style={styles.wrapper} onWheel={onWheel}>
      <HomeContentFocusable focusKey={'CONTENT'} />
    </View>
  );
};

HomeSpatial.propTypes = SpatialPropTypes;

const HomeSpatialFocusable = withFocusable()(HomeSpatial);

export default HomeSpatialFocusable;
