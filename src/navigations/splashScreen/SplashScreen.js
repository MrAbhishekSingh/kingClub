// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Video from 'react-native-video';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       const userToken = false;
//       if (userToken) {
//         navigation.replace('Home');
//       } else {
//         navigation.replace('Login');
//       }
//     }, 5000); 
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Video
//         source={require('../../assets/video/prostarSplash.mp4')}
//         style={styles.video}
//         resizeMode="cover"
//         repeat
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });

// export default SplashScreen;
