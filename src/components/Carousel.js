// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import {
//   StyleSheet, View, Text, Image, Dimensions, TouchableOpacity
// } from 'react-native';
// import Carousel from 'react-native-x-carousel';
// import { LogBox } from "react-native";
// import images from '../../../commonconfig/images';
// import PaginationLight from './PaginationLight';


// const { width } = Dimensions.get('window');

// const DATA = [
//   {
//     id: 1,
//     coverImageUri: images.Onboarding,
//     cornerLabelColor: '#FFD300',
//     cornerLabelText: 'GOTY',
//     screen: 'BakeryAndSnacks'
//   },
//   {
//     id: 2,
//     coverImageUri: images.Onboarding,
//     cornerLabelColor: '#0080ff',
//     cornerLabelText: 'NEW',
//     screen: 'Beverages'
//   },
//   {
//     id: 3,
//     coverImageUri: images.Onboarding,
//     cornerLabelColor: '#2ECC40',
//     cornerLabelText: '-75%',
//     screen: 'DiaryAndEgg'
//   },
//   {
//     id: 4,
//     coverImageUri: images.Onboarding,
//     cornerLabelColor: '#2ECC40',
//     cornerLabelText: '-20%',
//     screen: 'FruitsAndVeg'
//   },
// ];

// const Crousel = ({ navigation }) => {

//   LogBox.ignoreLogs([
//     "VirtualizedLists should never be nested inside"
//   ])
//   const renderItem = (data, index) => (
//     <View
//       key={data.id}
//       style={styles.cardContainer}
//     >
//       <View
//         style={styles.cardWrapper}
//       >
//         <TouchableOpacity onPress={() => { navigation.navigate(data.screen, { DATA: DATA }) }}>
//           <Image
//             style={styles.card}
//             source={data.coverImageUri}

//           />
//         </TouchableOpacity>
//         <View
//           style={[
//             styles.cornerLabel,
//             { backgroundColor: data.cornerLabelColor },
//           ]}
//         >
//           {/* <Text style={styles.cornerLabelText}>
//             { data.cornerLabelText }           
//           </Text> */}
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         pagination={(props) => <PaginationLight {...props} index={props.activeIndex} activeIndex={props.activeIndex} activeColor="red"  />}
//         renderItem={renderItem}
//         data={DATA}
//         loop
//         autoplay
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F2F3F2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width,
//   },
//   cardWrapper: {
//     borderRadius: 1,
//     overflow: 'hidden',
//   },
//   card: {
//     width: width * 0.9,
//     height: width * 0.44,
//     borderRadius: 20
//   },
//   cornerLabel: {
//     position: 'absolute',
//     bottom: 0,
//     marginRight: 335,
//   },
//   cornerLabelText: {
//     fontSize: 10,
//     color: '#fff',
//     fontWeight: '600',
//     paddingLeft: 5,
//     paddingRight: 5,
//     paddingTop: 2,
//     paddingBottom: 2,
//   },
// });

// export default Crousel;


import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, Dimensions, ScrollView } from "react-native";
// import Crousel from "../Dashboard/Carousel";
import images from "../commonconfig/images";
import { CustomHeader } from ".";
import { Avatar } from 'react-native-elements';
import ProductCell from "./ProductCell";
import Carousel from "pinar";
import { TouchableOpacity } from "react-native";


const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: 1,
    coverImageUri: images.carwash, // Update with your image path
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'GOTY',
    screen: 'BakeryAndSnacks'
  },
  {
    id: 2,
    coverImageUri: images.taj, // Update with your image path
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'NEW',
    screen: 'Beverages'
  },
  {
    id: 3,
    coverImageUri: images.carwash, // Update with your image path
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-75%',
    screen: 'DiaryAndEgg'
  },
  {
    id: 4,
    coverImageUri: images.taj, // Update with your image path
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-20%',
    screen: 'FruitsAndVeg'
  },
];
const Crousel = ({
  carousalStyle,onPress,
   navigation, height, 
   borderRadius, 
   bottom,
   name,
   data,
   imageStyle
  }) => {
  console.log("crousel====",name)

  return (
    <>
      <Carousel
        style={[{ height: height, width: width },carousalStyle]}
        showsControls={false}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: '#cbcbcb',
        }}
        activeDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: 'red',

        }}
        dotsContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: bottom,
          alignSelf: 'center',
          alignItems: "center"
        }}
        loop={true}
        autoplay={true}
      >
        {/* {DATA.map(item => */}
        {data?.map(item =>
          <TouchableOpacity onPress={onPress} disabled={!onPress}>
            <Image
              resizeMode='cover'
              style={[{ height: height, alignSelf: "center", borderRadius: borderRadius, width: name == "Dashboard" ? width - 25 : width },imageStyle]}
              source={item.coverImageUri}
            />
          </TouchableOpacity>)}
      </Carousel>
    </>

  )
}
export default Crousel;