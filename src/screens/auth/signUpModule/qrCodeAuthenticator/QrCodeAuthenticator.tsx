import { View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale } from '../../../../utils/scale'
import Header from '../../../../components/header/Header'
import { style } from './style'
import { ImageConstants } from '../../../../constants/imageConstants'
import Divider from '../../../../components/divider/Divider'
import CustomButton from '../../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../../constants/colorConstants'
import { Fontconstants } from '../../../../constants/fontConstants'
import { IconConstants } from '../../../../constants/iconConstants'

const QrCodeAuthenticator = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAwareScrollView style={style.container}
                    contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
                    extraScrollHeight={scale(60)}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={style.welcomeText}>Enable Authenticator App</Text>
                    <Text style={style.loginText}>Scan this QR code in Google Authenticator app</Text>
                    <Image source={ImageConstants.QRCODE} style={style.qrCode} />
                    <Divider txt="OR" topHeight={32} />
                    <Text style={style.welcomeText}>2VMQ3YY7C77HACRW</Text>
                    <Text style={style.loginText}>If you are unable to scan the QR code, please enter this code manually into the app.</Text>
                    <View style={style.buttonContainer}>
                        <CustomButton
                            disable={false}
                            title="Skip, I’ll do it later"
                            bgColor={ColorConstants.BTNCOLOR2}
                            txtColor={ColorConstants.BTNCOLOR}
                            width={164}
                            fontsize={14}
                            fontfamily={Fontconstants.SEMIBOLD}
                            onPress={() => console.log('Resend Code')}
                        />
                        <CustomButton
                            disable={false}
                            title="Next"
                            rightImage={IconConstants.arrowRight}
                            width={164}
                            fontsize={14}
                            fontfamily={Fontconstants.SEMIBOLD}
                            onPress={() => console.log('Submit')}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default QrCodeAuthenticator