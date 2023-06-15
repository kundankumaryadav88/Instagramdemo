/* eslint-disable prettier/prettier */
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={style.container}>
      <TouchableOpacity>
      <Image style={style.logo}  source={{uri: "https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/instagram-text-logo.png"}}/>
      </TouchableOpacity>
      <View style={style.iconContainer}>
      <TouchableOpacity>
      <Image style={style.icon}  source={require('../../assets/icons8-camera-50.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={style.icon}  source={require("../../assets/heart-icon.png")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={style.unreadBadge}>
        <Text style={style.unreadBadgeText}>
            11
        </Text>
        </View>
      <Image style={style.icon}  source={require('../../assets/direct-instagram.png')}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    iconContainer:{
        flexDirection:'row',
        marginRight:-20,
        marginTop: 5,
    },
    container:{
        justifyContent: 'space-between',
        alignContent:'center',
        flexDirection:'row',
        marginHorizontal: 20,
    },
    logo:{
        width:100,
        height:50,
        marginLeft: -20,
        // resizeMode:'contain',
    },
    icon:{
        width:30,
        height:30,
        margin:8,
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        position: 'absolute',
        left:20,
        bottom:25,
        width:25,
        height:18,
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText:{
        color: 'white',
        fontWeight: 600,
    },
});
