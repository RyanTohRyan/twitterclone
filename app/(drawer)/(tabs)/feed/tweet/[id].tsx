import tweets from "../../../../../assets/data/tweets";
import Tweet from "../../../../../components/Tweet";
import { useSearchParams } from "expo-router";
import { Text } from "react-native";

//NEED TO NAME FILE WITH SQUARE BRACKETS!!!!

export default function TweetScreen(){

    const {id} = useSearchParams();
    console.warn(id);

    const tweet = tweets.find((t)=>t.id === id);
    if (!tweet){
        return <Text>Tweet {id} not found!</Text>
    }
    return <Tweet tweet={tweet} />;
}