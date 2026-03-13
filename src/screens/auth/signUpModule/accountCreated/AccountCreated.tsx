import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'
import { style } from './style'
import { IconConstants } from '../../../../constants/iconConstants'
import { ColorConstants } from '../../../../constants/colorConstants'

const AccountCreated = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <View style={style.container}>
                <Header />
                <Text style={style.welcomeText}>Account created!</Text>
                <View style={style.emailSentView}>
                    <Image source={IconConstants.check} style={style.checkIcon} />
                </View>
                <Text style={style.quickTxt}>Quick Start.</Text>
                <Text style={style.transferText}>Transfer crypto to Friddy ?</Text>
                <Text style={style.description}>Protect vour crypto by transferring it from another exchange or wallet.</Text>
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
                            title="Yes transfer crypto"
                            width={164}
                            fontsize={14}
                            fontfamily={Fontconstants.SEMIBOLD}
                            onPress={() => console.log('Submit')}
                        />
                    </View>
            </View>
        </SafeAreaView>
    )
}

export default AccountCreated