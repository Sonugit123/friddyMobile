import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import InputBox from '../../../components/inputBox/InputBox'
import CustomButton from '../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../constants/colorConstants'
import { Fontconstants } from '../../../constants/fontConstants'
import { IconConstants } from '../../../constants/iconConstants'

const verifyPhNum = () => {
    const [code, setCode] = useState("");

    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <Text style={style.headingTxt}>Verify phone number</Text>
            <View style={style.inputContainer}>
                <InputBox
                    placeholder={'+234'}
                    label="Phone number"
                    topHeight={24}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    value={code}
                    onChangeText={(text) => {
                        const filtered = text.replace(/[^0-9]/g, ""); // numbers only
                        if (filtered.length <= 6) {
                            setCode(filtered);
                        }
                    }}
                />

                <Text style={style.timeTxt}>00:59s <Text style={style.resendTxt}>Resend</Text></Text>
                <View style={style.verifyContainer}>
                    <Text style={style.verifyTxt}>Verify</Text>
                </View>
            </View>
            <View style={style.buttonContainer}>
                <CustomButton
                    disable={code.length !== 6}
                    title="Confirm"
                    bgColor={code.length === 6 ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
                    txtColor={code.length === 6 ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT}
                    width={155}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log('Proceed')}
                />
                <CustomButton
                    disable={false}
                    title="Cancel"
                    bgColor={ColorConstants.BTNCOLOR2}
                    txtColor={ColorConstants.BTNCOLOR}
                    width={155}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log('Cancel')}
                />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default verifyPhNum