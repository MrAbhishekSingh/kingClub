import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { styles } from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';


const Input = ({ placeholder, value, onChangeText, error, secureTextEntry, source }) => {
  return (
    <>
      <View style={styles.countainer}>
        <View style={styles.img}>
          <Icon name={source} size={25} color="#fff" />
        </View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#fff"
        />
      </View>
      <View>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    </>

  );
}

export default Input;
