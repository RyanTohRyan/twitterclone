import { View,Text, Image, StyleSheet, Pressable } from "react-native"

import tweets from "../assets/data/tweets";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";
const tweet = tweets[0];


type TweetProps ={
  tweet: TweetType;
}
const Tweet = ({tweet} : TweetProps) => {
//console.log(tweet.user.image?.toLowerCase())// the ? helps to not run the func in case its undefined
  
    return(
      <Link href={`/feed/tweet/${tweet.id}`} asChild>
        {/* //must put a pressable instead of view inside a link to make the whole thing pressabel */}
        <Pressable style={styles.container}>
        <Image src={tweet.user.image} style= {styles.userImage}/>

        <View style={styles.mainContainer}>

          <View style={{flexDirection:'row'}}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>{tweet.user.username} · 2h</Text>
          <Entypo name="dots-three-horizontal" size={16} color="gray" style={{marginLeft: 'auto'}}/>
        </View>

        <Text style = {styles.content}>{tweet.content}</Text>

        {tweet.image && <Image src={tweet.image} style = {styles.image}/>}

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments}/>
          <IconButton icon="retweet" text={tweet.numberOfRetweets}/>
          <IconButton icon="heart" text={tweet.numberOfLikes}/>
          <IconButton icon="chart" text={tweet.impressions || 0}/>
          <IconButton icon="share-apple" />
          
        </View>
        </View>
      </Pressable>
      </Link>
    )
}

const styles = StyleSheet.create({
    container: {
   
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'lightgrey',
      backgroundColor: 'white',
    },
    footer : {
      flexDirection: 'row',
      marginVertical: 5, 
      justifyContent: 'space-between'
    },
    userImage: {width:50, height:50, borderRadius:50,},
    mainContainer: {
      marginLeft: 10,
      flex: 1,
  
    }, name: {
      fontWeight: '600',
    },username:{
      color: 'gray',
      marginLeft: 5,
    }, content: {
  
      lineHeight: 20,
      marginTop: 5,
    }, image: {
      width: '100%',
      aspectRatio: 16/9,
      marginVertical: 10,
      borderRadius: 15,
    }
  });
  

  export default Tweet;