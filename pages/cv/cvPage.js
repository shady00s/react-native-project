import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';


export function Cvpage(){
    return(
        <SafeAreaView >
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
  
          <View style={styles.view}>
            <ProfileContainer />
            <InfoContainer />
            <LanguageContainer />
            <SkillsContianer/>
            <ExtraSkills/>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}


function ProfileContainer() {
    return (
      <>
        <Image style={styles.images} source={require('../../assets/image.jpg')} />
        <Text style={styles.name}>Shady safwat</Text>
        <Text style={styles.secName}>Software Developer</Text>
   
        <View style={styles.icons}>
        <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
        <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
        <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
        <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
  
        </View>
      </>
  
    )
  }
  
  function InfoContainer() {
    return (
      <>
        <View style={styles.infoContainer}>
          <Text style={styles.head}>Age</Text>
          <Text>25</Text>
  
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.head}>Recedince</Text>
          <Text>BD</Text>
  
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.head}>Freelancer</Text>
          <Text>Available</Text>
  
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.head}>Address</Text>
          <Text>Cairo ,Egypt</Text>
  
        </View>
      </>
  
  
    )
  }
  
  function LanguageContainer() {
    return (
      <View style={styles.langContainer}>
        <Text style={styles.name}>Languages</Text>
          <Text>C#</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
  
        <Text>TypeScript</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
  
        <Text>Flutter and Dart</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
      </View>
  
    
    )
  }
  
  
  function SkillsContianer() {
    return (
      <View style={styles.langContainer}>
        <Text style={styles.name}>Skills</Text>
          <Text>HTML&CSS</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
  
        <Text>Bootstrap</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
  
        <Text>UI/UX Design</Text>
           <View style={styles.progressBarBody}>
          <View style={styles.progressBar}></View>
        </View>
      </View>
  
    
    )
  }
  
  function ExtraSkills(){
  
    return(
      <View style={{width:"60%"}}>
        <Text style={styles.name}>Extra skills</Text>
  
        <View style={{flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
          <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
          <Text>Github</Text>
        </View>
        <View style={{flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
          <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
          <Text>Github</Text>
        </View>
        <View style={{flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
          <Image style={styles.iconsd} source={require('../../assets/icon.png')}/>
          <Text>Github</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({

    iconsd:{
      width:30,
      height:30
    },
    progressBarBody: {
      display: "flex",
      flexDirection: "row",
      borderRadius:32,
      height: 9,
      width: 230,
      backgroundColor: "#f0f8ff"
    },
    progressBar: {
      width: 132,
      borderRadius:32,
      backgroundColor: "blue"
    },
  
    langContainer: {
      marginTop: 30,
      marginBottom:20,
      display: "flex",
      alignItems:"flex-start",
      justifyContent:"space-between",
      height:330
  
    },
    head: {
      padding: 12,
      backgroundColor: "yellow",
  
    },
    infoContainer: {
      marginTop: 30,
      display: "flex",
      width: "80%",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row"
  
    },
    view: {
      padding: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    images: {
      width: 200, height: 200,
      borderRadius: 400 / 2
    },
    name: {
      marginTop: 32,
      fontSize: 28,
      fontWeight: "600",
      color: "black"
    },
  
    secName: {
      marginTop: 32,
      fontSize: 18,
  
      color: "grey"
    },
  
    icons: {
      display: "flex",
      flexDirection:"row",
      marginTop:20
    },
  
  })