import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const Greeting = (props) => {
  return (
    <>
      <View style={[styles.countainer, props.style]} >
        <View style={{ flexDirection: 'row', width: widthPercentageToDP('75%'), justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textname}>{props.name}</Text>
          <Text style={styles.texttitle}>{props.title}</Text>
        </View>
      </View>

    </>
  );
}

export default Greeting;

