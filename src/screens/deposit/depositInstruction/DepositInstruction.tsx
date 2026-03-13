import { View, Text, Image } from 'react-native'
import React from 'react'
import BackHeader from '../../../components/backHeader/BackHeader'
import Header from '../../../components/header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import { IconConstants } from '../../../constants/iconConstants'
import { ImageConstants } from '../../../constants/imageConstants'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'

const DepositInstruction = () => {
    const noteList = [
        {
            id: 1,
            icon: IconConstants.infoCircle,
            description: "Extremely large deposits or high activities may cause delays",
        },
        {
            id: 2,
            icon: IconConstants.download,
            description: "The address can only receive USDC on Base network, DO NOT send USDC on any other network else it would be lost.",
        },
        {
            id: 3,
            icon: IconConstants.clockRewind,
            description: "Please give 20secs for processing.",
        },
    ]

    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
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
            <View style={style.qrContainer}>
                <Image source={IconConstants.headerLogo} style={style.headerLogo} />
                <Image source={ImageConstants.DEPOSITE_QR} style={style.depositeQr} />
            </View>
            <Text style={style.addressTxt}>Your address</Text>
            <View style={style.addressContainer}>
                <Text style={style.addressValue}>0X1234....098765</Text>
                <Image source={IconConstants.copyIcon} style={style.copyIcon} />
            </View>
            <Text style={style.addressTxt}>Please Note the following.</Text>
            {noteList.map((item, index) => (
                <View key={index} style={style.noteContainer}>
                    <Image source={item.icon} style={style.noteIcons} />
                    <Text style={style.noteTxt}>{item.description}</Text>
                </View>
            ))}
            <CustomButton
                disable={false}
                title="Connect Wallet"
                fontfamily={Fontconstants.SEMIBOLD}
                fontsize={14}
                width={343}
                topHeight={24}
                onPress={() => console.log('Connect Wallet')}
            />
        </SafeAreaView>
    )
}

export default DepositInstruction