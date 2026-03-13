import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { style } from './style'
import { IconConstants } from '../../../constants/iconConstants'
import InputBox from '../../../components/inputBox/InputBox'
import InputBoxMoney from '../../../components/inputBoxMoney/InputBoxMoney'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'

const DepositeMoney = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <View style={style.headingContainer}>
                <View style={style.headingTxtContainer}>
                    <Text style={style.headingTxt}>Receive USDC</Text>
                    <Text style={style.subHeadingTxt}>On the base network</Text>
                </View>
                <View>
                    <Image source={IconConstants.usdcCoin} style={style.usdcCoin} />
                    <Image source={IconConstants.usdcBaseNetwork} style={style.usdcBaseNetwork} />
                </View>
            </View>
            <InputBoxMoney
                placeholder={'deposit money'}
                label="Deposit"
                rightLabel="1,000.00 USDC ($1,000.00)"
                topHeight={24}
                keyboardType='numeric'
                autoCapitalize='none'
            />
            <CustomButton
                disable={false}
                title="Proceed"
                fontfamily={Fontconstants.SEMIBOLD}
                fontsize={14}
                width={327}
                topHeight={24}
                onPress={() => console.log('Proceed')}
            />
            </View>
        </SafeAreaView>
    )
}

export default DepositeMoney