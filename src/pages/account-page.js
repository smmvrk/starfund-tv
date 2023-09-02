import {
  initNavigation,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation';
import {throttle} from 'lodash';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigate} from 'react-router-dom';
import Logo from '../assets/smallest-logo.svg';
import {KEY_ENTER, RETURN_KEY} from '../utils/keys';

initNavigation({
  debug: true,
  visualDebug: false,
});

const ButtonItem = ({focused, title, onPress}) => {
  const buttonstyle = {
    backgroundColor: 'red',
    width: '26vh',
    height: '10vh',
    borderRadius: 25,
    marginRight: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: focused ? 3 : 0,
    borderColor: focused ? 'white' : '',
  };
  return (
    <TouchableOpacity style={buttonstyle} focusKey={`BUTTON`} onPress={onPress}>
      <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const ButtonItemFocusable = withFocusable()(ButtonItem);

const AccountContent = ({setFocus, focused, onBecameFocused}) => {
  const navigate = useNavigate();

  const onPressKey = event => {
    if (event.keyCode === RETURN_KEY) {
      setFocus();
    }
    if (event.keyCode === KEY_ENTER) {
      navigate('/auth');
    }
  };

  useEffect(() => {
    setFocus();

    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [setFocus]);

  const buttonData = [
    {id: 0, title: 'New'},
    {id: 1, title: 'Existing'},
  ];

  return (
    <View
      onFocus={onBecameFocused}
      focusKey={'BUTTONS-CONTAINER'}
      style={{
        backgroundColor: '#1D1D1D',
        borderRadius: 25,
        width: '70vh',
        height: '35vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: '8vh',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
          }}>
          Login to your <Logo /> account
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '8vh',
          right: 0,
          left: 0,
        }}>
        {buttonData.map(item => {
          return (
            <ButtonItemFocusable
              key={item.id}
              title={item.title}
              focusKey={`BUTTON-${item.id}`}
              onPress={onPressKey}
            />
          );
        })}
      </View>
    </View>
  );
};

const AccountContentFocusable = withFocusable({trackChildren: true})(
  AccountContent,
);

const AccountPage = ({navigateByDirection}) => {
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
    <View
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onWheel={onWheel}>
      <AccountContentFocusable focusKey={'CONTENT'} />
    </View>
  );
};

export default AccountPage;
