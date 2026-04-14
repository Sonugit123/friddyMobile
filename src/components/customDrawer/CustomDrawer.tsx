import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'

const CustomDrawer = (props: DrawerContentComponentProps) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Text>CustomDrawer</Text>
      <View style={style.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={style.screenNameTxt}>Home</Text>
        </TouchableOpacity>
        {/* <Text style={style.screenNameTxt}>Wallet</Text>
        <Text style={style.screenNameTxt}>Trade</Text> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <Text style={style.screenNameTxt}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Trades')}>
          <Text style={style.screenNameTxt}>Trades</Text>
        </TouchableOpacity>
        {/* <Text style={style.screenNameTxt}>Help Desk</Text> */}
      </View>
    </SafeAreaView>
  )
}

export default CustomDrawer