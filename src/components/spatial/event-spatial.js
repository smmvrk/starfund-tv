import {
  initNavigation,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation';
import {throttle} from 'lodash';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SpatialPropTypes} from '../../utils/types';

import {KEY_ENTER} from '../categories/event-categories';
import MenuFocusable from '../menu/menu';
import SideBarMenuFocusable from '../menu/sidebar-menu';

initNavigation({
  debug: true,
  visualDebug: false,
});

const EventSpatial = ({
  navigateByDirection,
  setFocus,
  event,
  FocusedComponent,
  title,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleKeyDown = event => {
    if (event.keyCode === KEY_ENTER) {
      setShowMenu(prevShowMenu => !prevShowMenu);
      if (setShowMenu) {
        setFocus('MENU');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
    <View style={{height: '100vh', width: '100%'}} onWheel={onWheel}>
      {showMenu && (
        <SideBarMenuFocusable
          focusKey={`SIDEBAR-MENU`}
          event={event}
          // onPress={() => {
          //   setShowMenu(prevShowMenu => !prevShowMenu);
          // }}
        />
      )}
      <MenuFocusable focusKey={'MENU'} event={event} onPress={handleKeyDown} />
      <FocusedComponent focusKey={'CONTENT'} event={event} title={title} />
    </View>
  );
};

EventSpatial.propTypes = SpatialPropTypes;

const EventSpatialFocusable = withFocusable()(EventSpatial);

export default EventSpatialFocusable;
