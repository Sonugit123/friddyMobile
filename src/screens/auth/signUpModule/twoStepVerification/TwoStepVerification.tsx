import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale } from '../../../../utils/scale'
import BackHeader from '../../../../components/backHeader/BackHeader'
import { style } from './style'
import PhoneInput from '../../../../components/phoneInput/PhoneInput'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const TwoStepVerification = () => {
    const [phone, setPhone] = useState('');
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
                    <Text style={style.welcomeText}>Set up two-step verification</Text>
                    <Text style={style.loginText}>We’ll text a verification code to your mobile phone when you sign in.</Text>
                    <PhoneInput
                        value={phone}
                        onChange={setPhone}
                        topHeight={scale(24)}
                    />
                    <CustomButton
                        disable={false}
                        title="Send Code"
                        width={343}
                        topHeight={32}
                        fontsize={14}
                        fontfamily={Fontconstants.SEMIBOLD}
                        onPress={() => console.log('Send Code')}
                    />
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default TwoStepVerification