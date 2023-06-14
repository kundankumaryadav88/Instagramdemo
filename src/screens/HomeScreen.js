/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.containers}>
    <Header/>
    <Stories />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default HomeScreen;
