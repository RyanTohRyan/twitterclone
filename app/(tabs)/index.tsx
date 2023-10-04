import { StyleSheet, Image, View, Pressable } from 'react-native';


import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
<View style={styles.page}>
{/* <Tweet tweet={tweets[0]}/> */}
<FlatList data ={tweets} renderItem={({item})=> <Tweet tweet={item}/>}/>
<Link href="/new-tweet" asChild>
    <Entypo name="plus" size={24} color="white" style={styles.floatingButton}/>
    </Link>
</View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor : '#1C9BF0',

   
    borderRadius: 25,
    padding: 15,
    

    position: 'absolute',
    right: 15,
    bottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    overflow: 'hidden'

  }
})