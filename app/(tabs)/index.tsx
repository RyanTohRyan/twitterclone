import { StyleSheet, Image, View } from 'react-native';


import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

export default function TabOneScreen() {
  return (
<View style={styles.page}>
<Tweet/>
<Tweet/>
</View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  }
})