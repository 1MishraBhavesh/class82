import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from 'react-native-vector-icons/Ionicons'
let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <View style={styles.cardContainer}>
         <Image 
          source={require('../assets/story_image_1.png')}
          style={styles.storyImage}
         />
         <View style={styles.titleContainer}>
          <Text style={styles.storyTitleText}> {this.props.story.title} </Text>
          <Text style={styles.storyAuthorText}> {this.props.story.author} </Text>
          <Text style={styles.storyDescriptionText}> {this.props.story.description} </Text>
         </View>
         <View style={styles.actionContainer}>
          <View style={styles.likeButton}>
            <Ionicons
           name = {"heart"}
           color="white"
           size = {RFValue(30)}
           />
           <Text style={styles.likeText}>  12K </Text>
        </View>
        </View>
        </View>

        
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  storyImage:{
   height:RFValue(250),
   resizeMode:"contain",
   width:"95%",
   alignSelf:"center"
  },
  storyTitleText:{
     height:RFValue(25),
     fontFamily:"Bubblegum-Sans",
    
     color:"white",
     
  },
  storyAuthorText:{
     height:RFValue(17),
    fontFamily:"Bubblegum-Sans",
   
    color:"white"
  },
  storyDescriptionText:{
    fontFamily:"Bubblegum-Sans",
    paddingTop:RFValue(10),
    color:"white",
    fontSize:14
  },
  titleContainer:{
    justifyContent:"center",
        paddingLeft:RFValue(20),
  },
  actionContainer:{
     justifyContent:"center",
       padding:RFValue(15),
       alignItems:"center",
  },
  likeText:{
    color:"white",
      fontSize:RFValue(20),
      marginLeft:RFValue(20),

  },
  likeButton:{
    justifyContent:"center",
     backgroundColor:"#eb3948",
       alignItems:"center",
       borderRadius:RFValue(30),
       height:RFValue(30),
       width:RFValue(350),
       flexDirection:'row',

  },
  cardContainer:{
    backgroundColor:"#2f345d",
    borderRadius:RFValue(60),
    
  }

});
