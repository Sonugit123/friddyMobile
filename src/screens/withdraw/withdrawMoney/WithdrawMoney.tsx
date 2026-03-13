import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'
import InputBoxMoney from '../../../components/inputBoxMoney/InputBoxMoney'
import { Fontconstants } from '../../../constants/fontConstants'
import CustomButton from '../../../components/customButton/CustomButton'

const WithdrawMoney = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <View style={style.headingContainer}>
                <View style={style.headingTxtContainer}>
                    <Text style={style.headingTxt}>Withdraw ETH</Text>
                    <Text style={style.subHeadingTxt}>On the Ethereum network</Text>
                </View>
                <View>
                    <Image source={IconConstants.ethCoin} style={style.ethCoin} />
                    <Image source={IconConstants.ethSmallCoin} style={style.ethSmallCoin} />
                </View>
            </View>
            <InputBoxMoney
                placeholder={'withdraw money'}
                label="I will withdraw"
                rightLabel="00.006 ETH ( $800)"
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

export default WithdrawMoney