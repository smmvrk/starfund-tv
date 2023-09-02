import {
  initNavigation,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation';
import {throttle} from 'lodash';
import React, {useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigate} from 'react-router-dom';
import ArrowLeft from '../assets/arrow-left.svg';
import {KEY_ENTER, RETURN_KEY} from '../utils/keys';

initNavigation({
  debug: true,
  visualDebug: false,
});

const BackButton = ({focused}) => {
  const navigate = useNavigate();
  const handleBackButton = event => {
    if (event.keyCode === KEY_ENTER) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (focused) {
      window.addEventListener('keydown', handleBackButton);
    } else {
      window.removeEventListener('keydown', handleBackButton);
    }

    return () => {
      window.removeEventListener('keydown', handleBackButton);
    };
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={handleBackButton}
      style={{
        backgroundColor: '#858585',
        width: focused ? '7vh' : '6vh',
        height: focused ? '7vh' : '6vh',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}>
      <ArrowLeft />
    </TouchableOpacity>
  );
};

const BackButtonFocusable = withFocusable()(BackButton);

const ForgotButton = ({focused}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: focused ? 0 : 1,
        borderBottomColor: focused ? '' : 'white',
      }}>
      <Text style={{color: 'white', fontSize: 25}}>Forgot your password?</Text>
    </TouchableOpacity>
  );
};

const ForgotButtonFocusable = withFocusable()(ForgotButton);

const ButtonItem = ({focused}) => {
  const buttonstyle = {
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(#E10000, #9A0303)',
    width: '26vh',
    height: '9vh',
    borderRadius: 25,
    marginRight: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: focused ? 3 : 0,
    borderColor: focused ? 'white' : '',
  };

  const navigate = useNavigate();

  const handlePress = event => {
    if (event.keyCode === KEY_ENTER) {
      navigate('/home');
    }
  };

  useEffect(() => {
    if (focused) {
      window.addEventListener('keydown', handlePress);
    } else {
      window.removeEventListener('keydown', handlePress);
    }

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [focused]);

  return (
    <TouchableOpacity
      style={buttonstyle}
      focusKey={`LOGIN-BUTTON`}
      onPress={handlePress}>
      <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
        Log in
      </Text>
    </TouchableOpacity>
  );
};

const ButtonItemFocusable = withFocusable()(ButtonItem);

const InputEmail = ({focused}) => {
  useEffect(() => {
    if (focused) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [focused]);

  const handleKeyPress = event => {
    if (event.keyCode === KEY_ENTER) {
      console.log('input clicked');
    }
  };

  return (
    <View style={{width: '50vh'}}>
      <Text style={{color: '#595959'}}>Email</Text>
      <TextInput
        editable={true}
        maxLength={35}
        placeholder="Your email.."
        placeholderTextColor={'#595959'}
        style={{
          height: '4vh',
          borderBottomWidth: focused ? 3 : 1,
          borderBottomColor: '#595959',
          color: 'white',
          fontSize: 19,
        }}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
};

const InputEmailFocusable = withFocusable()(InputEmail);

const InputPassword = ({focused}) => {
  return (
    <View style={{width: '50vh'}}>
      <Text style={{color: '#595959'}}>Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Your password.."
        placeholderTextColor={'#595959'}
        style={{
          height: '4vh',
          borderBottomWidth: focused ? 3 : 1,
          borderBottomColor: '#595959',
          color: 'white',
          fontSize: 19,
        }}
      />
    </View>
  );
};

const InputPasswordFocusable = withFocusable()(InputPassword);

const Content = ({setFocus, focused, onBecameFocused}) => {
  const onPressKey = event => {
    if (event.keyCode === RETURN_KEY) {
      setFocus();
    }
  };

  useEffect(() => {
    setFocus();

    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [setFocus]);

  return (
    <View
      onFocus={onBecameFocused}
      style={{
        backgroundColor: '#1D1D1D',
        borderRadius: 25,
        width: '65vh',
        height: '45vh',
        alignItems: 'center',
      }}>
      <View style={{position: 'absolute', left: '-3vh', top: '-3vh'}}>
        <BackButtonFocusable focusKey={'BACK-BUTTON'} />
      </View>
      <View
        style={{
          top: '7vh',
        }}>
        <View style={{marginBottom: '2vh'}}>
          <InputEmailFocusable focusKey={'EMAIL'} />
        </View>
        <InputPasswordFocusable focusKey={'PASSWORD'} />
      </View>
      <View style={{position: 'absolute', right: '7vh', bottom: '19vh'}}>
        <ForgotButtonFocusable focusKey={'FORGOT'} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '5vh',
          right: '4vh',
        }}>
        <ButtonItemFocusable focusKey={`BUTTON-1`} />
      </View>
    </View>
  );
};

const ConentFocusable = withFocusable({trackChildren: true})(Content);

const LoginPage = ({navigateByDirection}) => {
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
      <ConentFocusable focusKey={'CONTENT'} />
    </View>
  );
};

export default LoginPage;
