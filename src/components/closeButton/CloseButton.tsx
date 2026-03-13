import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'

interface prop {
    onPress?: () => void
}
const CloseButton = ({onPress}: prop) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
        <View style={style.arrowIconView}>
      <Image source={IconConstants.cancel}
        style={style.arrowIcon}
        />
        </View>
  
      <Text style={style.backTxt}>Close</Text>
    </TouchableOpacity>
  )
}

export default CloseButton