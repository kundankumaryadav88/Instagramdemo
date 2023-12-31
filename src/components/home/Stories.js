/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {users} from '../../data/user';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
              <View  style={{alignItems: 'center'}}>
                <Image source={{uri:"https://robohash.org/iustoomnisomnis.png?size=50x50&set=set1"}} style={styles.profileStory} />
                <Image style={styles.plusBadge} source={require("../../assets/icons8-plus-50.png")}/>
                <Text style={{color: 'black', justifyContent: 'center'}}>
                  Your Story
                </Text>
              </View>
            </TouchableOpacity>
        {users.map((data, index) => {
          return (
            <TouchableOpacity>
              <View key={index} style={{alignItems: 'center'}}>
                <Image source={{uri: data.image}} style={styles.story} />
                <Text style={{color: 'black', justifyContent: 'center'}}>
                  {data.name.length > 11
                    ? data.name.slice(0, 10).toLocaleLowerCase() + '...'
                    : data.name.toLocaleLowerCase()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  profileStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
  },
  plusBadge:{
    position: 'absolute',
    left:50,
    bottom:18,
    width:25,
    height:25,
    borderRadius: 50,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent: 'center',
    zIndex: 100,
  },
});
export default Stories;
