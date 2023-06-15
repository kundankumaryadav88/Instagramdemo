/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import BottomTab from '../components/home/BottomsTab';
import React from 'react';
import {ScrollView} from 'react-native';
import {posts} from '../data/posts';
import { users } from '../data/user';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.containers}>
      <Header />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
      <BottomTab user={posts}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default HomeScreen;
