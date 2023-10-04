import { Link, useNavigation, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View , TextInput, Pressable, SafeAreaView} from "react-native";
import {useState} from 'react';
const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet() {
const [text, setText] = useState("");

const router = useRouter();
    const onTweetPress = () => {
        console.warn(text)
        setText('');

        router.back();


    }

    return (
       < SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.container}>
           <View style={styles.buttonContainer}> 
           <Link href="../" style={{fontSize: 18}}><Text>Cancel</Text></Link>
            <Pressable onPress={onTweetPress} style={styles.button}><Text style={styles.buttonText}>Tweet</Text></Pressable>
           </View>
            <View style={styles.inputContainer}>
            <Image src={user.image} style={styles.image}/>
            <TextInput value={text} onChangeText={setText} placeholder="Whats Up Dog" multiline numberOfLines={5} style={{flex:1}}/>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        aspectRatio:1,
        borderRadius: 50,
        marginRight: 10,
    },
    buttonContainer:{
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button :{ 
        backgroundColor: '#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16
    },
    inputContainer: {
        flexDirection: 'row',
        
    },
    container: {
        padding: 10,
      
        flex: 1
    }
});
