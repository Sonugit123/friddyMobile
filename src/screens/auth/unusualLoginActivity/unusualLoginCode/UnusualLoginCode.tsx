import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import InputBox from '../../../../components/inputBox/InputBox'
import { ColorConstants } from '../../../../constants/colorConstants'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const UnusualLoginCode = () => {
    const [timer, setTimer] = useState(60);
    const [code, setCode] = useState("");


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer((prevTimer) => {
    //             if (prevTimer === 0) {
    //                 clearInterval(interval);
    //                 return 0;
    //             }
    //             return prevTimer - 1;
    //         });
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [timer]);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const formatTimer = (timer: number) => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
            }`;
    };

    const resendOtpHandler = () => {
        setTimer(60);
    }

    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <Text style={style.headingTxt}>Enter Code</Text>
            <Text style={style.subHeadingTxt}>Code sent to <Text style={style.subHeadingTxtBold}>Jon@gmail.com</Text></Text>
            <InputBox
                placeholder={'Enter 6 digit code'}
                label="Enter code"
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
            <View style={style.resendContainer}>
                <Text style={style.timeTxt}>{formatTimer(timer)}</Text>
                <TouchableOpacity
                    onPress={resendOtpHandler}
                    disabled={timer <= 0 ? false : true}
                >
                    <Text style={[style.resendTxt, {
                        color: timer <= 0 ? ColorConstants.BTNCOLOR : ColorConstants.GRAY_LABEL,
                    }]}>Resend Code</Text>
                </TouchableOpacity>
            </View>
            <View style={style.buttonContainer}>
                <CustomButton
                    disable={code.length !== 6}
                    title="Proceed"
                    bgColor={code.length === 6 ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
                    txtColor={code.length === 6 ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT}
                    width={164}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log('Proceed')}
                />
                <CustomButton
                    disable={false}
                    title="Cancel"
                    bgColor={ColorConstants.BTNCOLOR2}
                    txtColor={ColorConstants.BTNCOLOR}
                    width={164}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log('Cancel')}
                />
            </View>
        </SafeAreaView>
    )
}

export default UnusualLoginCode