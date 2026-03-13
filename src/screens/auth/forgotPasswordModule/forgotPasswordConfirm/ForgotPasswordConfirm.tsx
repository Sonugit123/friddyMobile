import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../../../components/header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'
import InfoForgotPassword from '../../../../components/infoForgotPassword/InfoForgotPassword'
import { IconConstants } from '../../../../constants/iconConstants'

const ForgotPasswordConfirm = () => {
    const goToMail = () => {
        console.log("goToMail");
    }
    const isPasswordChanged = true;
    return (
        isPasswordChanged ? (
            <InfoForgotPassword
                title="Password Reset Email Sent"
                highlightText="Email Sent, Please check your Inbox!"
                description="We've sent a password reset email to the address associated with your account. This email contains instructions on how to reset your password."
                buttonText="Go to Mail"
                icon={IconConstants.check}
                onPress={() => console.log('goToMail')}
            />
        ) : (
            <InfoForgotPassword
                title="Password changed successfully"
                highlightText="Password changed!"
                description="Your password has been successfully updated. You can now log in with your new password."
                buttonText="Login"
                icon={IconConstants.check}
                onPress={() => console.log('Login')}
            />
        )


    )
}

export default ForgotPasswordConfirm