import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale } from '../../../../utils/scale'
import BackHeader from '../../../../components/backHeader/BackHeader'
import { style } from './style'
import InputBox from '../../../../components/inputBox/InputBox'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'
import { ColorConstants } from '../../../../constants/colorConstants'

const Otp = () => {
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
                    <BackHeader />
                    <Text style={style.welcomeText}>Enter OTP code</Text>
                    <Text style={style.loginText}>A text message with a 7-digit code has been sent to +xx xx xxxxxx66. This helps us keep your account secure by verifying that it’s really you.</Text>
                    <InputBox
                        placeholder={'7-digits code from SMS'}
                        label="Code"
                        topHeight={24}
                        keyboardType='numeric'
                        autoCapitalize='none'
                    />
                    <View style={style.buttonContainer}>
                        <CustomButton
                            disable={false}
                            title="Resend Code"
                            bgColor={ColorConstants.BTNCOLOR2}
                            txtColor={ColorConstants.BTNCOLOR}
                            width={164}
                            fontsize={14}
                            fontfamily={Fontconstants.SEMIBOLD}
                            onPress={() => console.log('Resend Code')}
                        />
                        <CustomButton
                            disable={false}
                            title="Submit"
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

export default Otp