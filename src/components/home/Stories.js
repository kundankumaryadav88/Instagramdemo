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
        {users.map((data, index) => {
          return (
            <TouchableOpacity>
              <View key={index} style={{alignItems: 'center'}}>
                <Image source={{uri: data.image}} style={styles.story} />
                <Text style={{color: 'white', justifyContent: 'center'}}>
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
});
export default Stories;
