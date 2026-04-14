import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

type DrawerParamList = {
  Dashboard: undefined
}


const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={style.container}>
      <Image source={IconConstants.headerLogo} style={style.logoIcon}/>
      <View style={style.signInContainer}>
        <View style={style.signInIconView}>
          <Text style={style.signInTxt}>Sign In</Text>
          <Image source={IconConstants.signInIcon} style={style.signInIcon}/>
        </View>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={IconConstants.menu} style={style.menuIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header