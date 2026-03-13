import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import { ImageConstants } from '../../../../constants/imageConstants'
import Divider from '../../../../components/divider/Divider'
import CustomButton from '../../../../components/customButton/CustomButton'
import { IconConstants } from '../../../../constants/iconConstants'
import { Fontconstants } from '../../../../constants/fontConstants'

const GoogleAuthenticator = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <Text style={style.headingTxt}>2FA Google Authenticator</Text>
            <Image source={ImageConstants.QRCODE} style={style.qrCode} />
            <Divider txt="OR" topHeight={32} />
            <Text style={style.codeTxt}>2VMQ3YY7C77HACRW</Text>
            <Text style={style.codeDesc}>If you are unable to scan the QR code, please enter this code manually into the app.</Text>
            <CustomButton
                disable={false}
                title="Next"
                rightImage={IconConstants.arrowRight}
                topHeight={32}
                width={343}
                fontsize={14}
                fontfamily={Fontconstants.SEMIBOLD}
                onPress={() => console.log('Submit')}
            />
        </SafeAreaView>
    )
}

export default GoogleAuthenticator