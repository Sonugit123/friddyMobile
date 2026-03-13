import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconConstants } from '../../../constants/iconConstants'
import Header from '../../../components/header/Header'
import CustomButton from '../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../constants/colorConstants'
import { Fontconstants } from '../../../constants/fontConstants'

const VerifyPhNumWarning = () => {
  return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <View style={style.headingContainer}>
                <Image source={IconConstants.unusualIcon} style={style.unusualIcon} />
                <Text style={style.headingTxt}>Verify phone number</Text>
            </View>
            <Text style={style.subHeadingTxt}>In order to begin this transaction you must verify your phone number.</Text>
            <CustomButton
                disable={false}
                title="Verify phone number"
                imageSize={24}
                width={327}
                topHeight={24}
                bgColor={ColorConstants.BTNCOLOR2}
                txtColor={ColorConstants.BTNCOLOR}
                fontsize={14}
                fontfamily={Fontconstants.SEMIBOLD}
                onPress={() => console.log('Add Google authenticator')}
            />
            </View>
        </SafeAreaView>
  )
}

export default VerifyPhNumWarning