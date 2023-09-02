import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../assets/welcome-logo.svg';
import {useNavigate} from 'react-router-dom';

const WelcomePage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/home');
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <View
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({});
