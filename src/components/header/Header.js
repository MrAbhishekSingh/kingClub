import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const Header = (props) => {
    return (
        <>
            {!props.back ?
                <View style={[styles.countainer, props.style]} >
                    <View style={{}}>
                        <MaterialIcons onPress={props.onPress} name="arrow-back-ios" size={30} color="#fff" />
                    </View>
                    <View style={{ flexDirection: 'row', width: widthPercentageToDP('75%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textname}>{props.name}</Text>
                        <Text style={styles.texttitle}>{props.title}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons onPress={props.Notifiction} name="circle-notifications" size={30} color="#fff" />
                        </View>
                        {2 > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>9</Text>
                            </View>
                        )}
                    </View>
                </View>
                :
                <View style={[styles.countainer, props.style]} >
                    <View style={{}}>
                        <MaterialIcons onPress={props.onPress} name="dehaze" size={30} color="#fff" />
                    </View>
                    <View style={{ flexDirection: 'row', width: widthPercentageToDP('75%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textname}>{props.name}</Text>
                        <Text style={styles.texttitle}>{props.title}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons onPress={props.Notifiction} name="circle-notifications" size={30} color="#fff" />
                        </View>
                        {2 > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>9</Text>
                            </View>
                        )}
                    </View>
                </View>}
        </>
    );
}

export default Header;

