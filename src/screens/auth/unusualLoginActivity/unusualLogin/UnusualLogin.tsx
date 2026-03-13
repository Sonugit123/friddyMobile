import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import { IconConstants } from '../../../../constants/iconConstants'
import CustomButton from '../../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../../constants/colorConstants'
import { Fontconstants } from '../../../../constants/fontConstants'

const UnusualLogin = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <View style={style.headingContainer}>
                <Image source={IconConstants.unusualIcon} style={style.unusualIcon} />
                <Text style={style.headingTxt}>Unusual login activity</Text>
            </View>
            <Text style={style.subHeadingTxt}>Hell Jon we noticed you’re logging from an unusual location to protect your account you have <Text style={style.subHeadingTxtBold}>add a 2FA method to your account to continue.</Text></Text>
            <CustomButton
                disable={false}
                title="Add Google authenticator"
                rightImage={IconConstants.plus}
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

export default UnusualLogin