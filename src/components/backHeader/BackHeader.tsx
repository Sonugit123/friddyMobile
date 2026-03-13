import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'

const BackHeader = () => {
  return (
    <View style={style.container}>
        <View style={style.arrowIconView}>
      <Image source={IconConstants.arrowLeft}
        style={style.arrowIcon}
        />
        </View>
  
      <Text style={style.backTxt}>Back</Text>
    </View>
  )
}

export default BackHeader