import { StyleSheet, Image, View } from 'react-native';


import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { FlatList } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  return (
<View style={styles.page}>
{/* <Tweet tweet={tweets[0]}/> */}
<FlatList data ={tweets} renderItem={({item})=> <Tweet tweet={item}/>}/>

</View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  }
})