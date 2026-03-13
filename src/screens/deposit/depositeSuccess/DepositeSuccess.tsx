import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import { style } from './style'
import CloseButton from '../../../components/closeButton/CloseButton'
import { IconConstants } from '../../../constants/iconConstants'
import PreviewMoney from '../../../components/previewMoney/PreviewMoney'
import { ColorConstants } from '../../../constants/colorConstants'
import { ImageConstants } from '../../../constants/imageConstants'

const DepositeSuccess = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <CloseButton />
            <View style={style.headingContainer}>
                <View style={style.headingTxtContainer}>
                    <Text style={style.headingTxt}>Deposit success</Text>
                    <Text style={style.subHeadingTxt}>On the base network</Text>
                </View>
                <View>
                    <Image source={IconConstants.usdcCoin} style={style.usdcCoin} />
                    <Image source={IconConstants.usdcBaseNetwork} style={style.usdcBaseNetwork} />
                </View>
            </View>
            <PreviewMoney
                headingTxt='Deposited'
                coinValue='100.00 USDC'
                dollarValue='$200'
                friddyFees='$0.15'
                isSuccess={true}
                topHeight={24}
                headingTxtColor={ColorConstants.GREEN_DOT}
                bgColor={ColorConstants.SUCCESS_BOX_BG}
            />
            <View style={style.qrContainer}>
                <Image source={IconConstants.headerLogo} style={style.headerLogo} />
                <Image source={ImageConstants.DEPOSITE_QR} style={style.depositeQr} />
            </View>
            <View style={style.addressContainer}>
                <Text style={style.addressTxt}>Your address</Text>
                <Text style={style.addressTxt}>Payment Processed</Text>
            </View>
            <View style={style.addressValueContainer}>
                <Text style={style.addressValue}>0X1234....098765</Text>
                <View style={style.countContainer}>
                    <Text style={style.countTxt}>72/18</Text>
                    <Image source={IconConstants.checkedCircle} style={style.tickMark}/>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default DepositeSuccess