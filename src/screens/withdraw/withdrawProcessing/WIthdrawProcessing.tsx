import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'
import { ImageConstants } from '../../../constants/imageConstants'

const WIthdrawProcessing = () => {
  return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            {/* <BackHeader /> */}
            <View style={style.headingContainer}>
                <View style={style.headingTxtContainer}>
                    <Text style={style.headingTxt}>Processing ETH</Text>
                    <Text style={style.subHeadingTxt}>On the Ethereum network</Text>
                </View>
                <View>
                    <Image source={IconConstants.ethCoin} style={style.ethCoin} />
                    <Image source={IconConstants.ethSmallCoin} style={style.ethSmallCoin} />
                </View>
            </View>
            <View style={style.qrContainer}>
                <Image source={IconConstants.headerLogo} style={style.headerLogo} />
                <Image source={ImageConstants.DEPOSITE_QR} style={style.depositeQr} />
            </View>
            <View style={style.addressContainer}>
                <Text style={style.addressTxt}>Your address</Text>
                <Text style={style.addressTxt}>Payment Processing</Text>
            </View>
            <View style={style.addressValueContainer}>
                <Text style={style.addressValue}>0X1234....098765</Text>
                <View style={style.countContainer}>
                    <Text style={style.countTxt}>1/18</Text>
                </View>
            </View>
            </View>
        </SafeAreaView>
  )
}

export default WIthdrawProcessing