/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const BottomTab = ({user}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image style={style.icon} source={require('../../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={style.icon}
          source={require('../../assets/search-interface-symbol.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={style.icon} source={require('../../assets/more.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={style.icon} source={require('../../assets/video.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={style.profileImage}
          source={require('../../assets/user.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
  },
  profileImage: {
    width: 35,
    height: 35,
    margin: 5,
    borderRadius: 50,
  },
});
export default BottomTab;
