import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../../components/header/Header'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Home = () => {
  return (
    <LinearGradient style={{flex:1}} colors={[colors.primary, colors.primary1, colors.primary2]}>
        <Header
        back={true}
        onPress={() => navigation.goBack()}
        name="YOUR "
        style={{ height: heightPercentageToDP('9%'), backgroundColor: colors.primary }}
        title="DASHBOARD"
        Notifiction={() => navigation.navigate('Notifications')}

      />
      <View>
        <Text>Home</Text>
      </View>
    </LinearGradient>
  )
}

export default Home