/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import React,{ useState } from 'react';

function Post({post}) {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
}

const PostImage = ({post}) => {
  return (
    <View style={{width:'100%',height:450}}>
      <Image
        source={{uri: post.imageUrl}}
        style={{height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
};

const PostHeader = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: post.profilePicture}} style={styles.story} />
        <View style={{flexDirection:"column", alignItems: 'center'}}>
        <Text style={{color: 'black', marginLeft: 5, fontWeight: 500}}>
          {post.users}
        </Text>
        <Text>hvj</Text>
        </View>
      </View>
      {/* <Text style={{color: 'white', fontWeight: 900}}>...</Text> */}
      <View>
        <Image style={styles.icons} source={require("../../assets/dots.png")} />
      </View>
    </View>
  );
};

const PostFooter = ({ post }) => {
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.footerContainer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                {/* left icons */}
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={require("../../assets/heart-icon.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={require("../../assets/chat-bubble.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={require("../../assets/direct-instagram.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                        style={styles.icons}
                        source={require("../../assets/whatsapp.png")}
                    />
                </TouchableOpacity>
                </View>
                {/* save icon */}
                <TouchableOpacity>
                    <Image
                        style={styles.icons}
                        source={require("../../assets/save-instagram.png")}
                    />
                </TouchableOpacity>
            </View>

            {/* likes */}
            <View>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ color: 'black', fontSize: 12 }}>{post.likes.toLocaleString()} likes</Text>
                </View>
                {/* caption */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: '600',
                    }}>{post.users + ' '}
                        <Text style={{
                            color: 'lightgrey',
                            fontSize: 12,
                        }}>{post.captions}
                        </Text>
                    </Text>
                </View>
            </View>
            {/* comments */}
            <View>
                {
                    post.comments && post.comments.length > 0 ?
                        <TouchableOpacity
                            onPress={() => setOpen(!open)}>
                            <Text style={{ color: 'black', marginVertical: 5 }}
                            >
                                {!open ? 'Show All comments' : 'Hide Comments'}
                            </Text>
                        </TouchableOpacity>
                        : null
                }
                <View style={{ display: !open ? 'none' : 'flex' }}>
                    {
                        post && post.comments.map((comment, index) => {
                            return (
                                <View key={index}>
                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center',
                                        margin: 3,
                                    }}>
                                        <Image
                                            style={{
                                                height: 30, width: 30,
                                                borderColor: 'lightblue',
                                                borderWidth: 1,
                                                borderRadius: 50,
                                            }}
                                            source={{
                                                uri: comment.image,
                                            }} />
                                        <Text
                                            style={{
                                                color: 'black',
                                                paddingLeft: 10,
                                            }}>
                                            {comment.user}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            color: 'black', fontSize: 12,
                                            marginLeft: 45,
                                        }}>
                                        {comment.comments}
                                    </Text>
                                </View>
                            );
                        })
                    }

                </View>
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    story: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth: 1.6,
      borderColor: '#ff8501',
    },
    headerImage: {
      height: 50,
      width: 50,
      borderColor: 'lightblue',
      borderWidth: 0.2,
      borderRadius: 50,
  },
  postImage: {
      height: 400,
      resizeMode: 'cover',
  },
  postContainer: {
      padding: 2,
  },
  postHeaderContainer: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
  },
  footerContainer: {
      padding: 5,
      margin: 5,
  },
  iconContainer: {
      flexDirection: 'row',
  },
  icons: {
      width: 30,
      height: 30,
      marginRight: 15,
  },
  });
export default Post;
