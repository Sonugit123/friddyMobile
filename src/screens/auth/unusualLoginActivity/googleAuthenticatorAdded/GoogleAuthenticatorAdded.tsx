import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import CustomButton from '../../../../components/customButton/CustomButton'
import { IconConstants } from '../../../../constants/iconConstants'
import { Fontconstants } from '../../../../constants/fontConstants'
import { ColorConstants } from '../../../../constants/colorConstants'

const GoogleAuthenticatorAdded = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <Text style={style.headingTxt}>Google Authenticator Added</Text>
            <Text style={style.subHeadingTxt}>To remove this from your account, please head to account settings and follow the steps</Text>
            <CustomButton
                disable={false}
                title="Done"
                rightImage={IconConstants.btnCheck}
                imageSize={18}
                bgColor={ColorConstants.SIGNIN_BOX}
                txtColor={ColorConstants.BTNCOLOR}
                topHeight={32}
                width={327}
                fontsize={14}
                fontfamily={Fontconstants.SEMIBOLD}
                onPress={() => console.log('Submit')}
            />
            </View>
        </SafeAreaView>
    )
}

export default GoogleAuthenticatorAdded