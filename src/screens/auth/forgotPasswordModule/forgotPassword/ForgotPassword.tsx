import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import BackHeader from '../../../../components/backHeader/BackHeader'
import InputBox from '../../../../components/inputBox/InputBox'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const ForgotPassword = () => {
    const resetHandler = () => {
        console.log('Login');
    };
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
                <BackHeader />
                <Text style={style.welcomeText}>Forgot Your Password?</Text>
                <Text style={style.loginText}>Enter your email address below and we'll send you a link to reset your password.</Text>
                <InputBox
                    placeholder={'Email address'}
                    label="Email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    topHeight={32}
                />
                <CustomButton
                    disable={false}
                    title="Reset password"
                    width={343}
                    topHeight={32}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={resetHandler}
                />
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword