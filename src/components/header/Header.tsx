import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'

const Header = () => {
  return (
    <View style={style.container}>
      <Image source={IconConstants.headerLogo} style={style.logoIcon}/>
      <View style={style.signInContainer}>
        <View style={style.signInIconView}>
          <Text style={style.signInTxt}>Sign In</Text>
          <Image source={IconConstants.signInIcon} style={style.signInIcon}/>
        </View>
          <Image source={IconConstants.menu} style={style.menuIcon}/>
      </View>
    </View>
  )
}

export default Header