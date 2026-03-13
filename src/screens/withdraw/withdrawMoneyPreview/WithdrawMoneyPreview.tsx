import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'
import PreviewMoney from '../../../components/previewMoney/PreviewMoney'
import { ColorConstants } from '../../../constants/colorConstants'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'

const WithdrawMoneyPreview = () => {
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
            <PreviewMoney
                headingTxt='You will withdraw'
                headingTxtColor={ColorConstants.GRAY_LABEL}
                coinValue='0.0004 ETH'
                dollarValue='$200'
                friddyFees='$0.15'
                topHeight={24}
                coinIcon={IconConstants.ethCoin}
                bgColor={ColorConstants.SIGNIN_BOX}
            />
            <CustomButton
                disable={false}
                title="Connect Wallet"
                fontfamily={Fontconstants.SEMIBOLD}
                fontsize={14}
                width={327}
                topHeight={24}
                onPress={() => console.log('Connect Wallet')}
            />
            </View>
        </SafeAreaView>
    )
}

export default WithdrawMoneyPreview