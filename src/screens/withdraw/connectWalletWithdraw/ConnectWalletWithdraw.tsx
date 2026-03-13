import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'

const ConnectWalletWithdraw = () => {
    const walletList = [
        {
            id: '1',
            icon: IconConstants.walletConnect,
            name: 'WalletConnect',
        },
        {
            id: '2',
            icon: IconConstants.metaMask,
            name: 'MetaMask',
        },
        {
            id: '3',
            icon: IconConstants.coinBase,
            name: 'CoinBase',
        },
        {
            id: '4',
            icon: IconConstants.phantom,
            name: 'Phantom',
        },
        {
            id: '5',
            icon: IconConstants.trustWallet,
            name: 'Trust Wallet',
        },
        {
            id: '6',
            icon: IconConstants.allWallet,
            name: 'All Wallet',
        },
    ]
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <Text style={style.headingTxt}>Connect wallet</Text>
            {walletList.map((item, index) => (
                <View key={index} style={style.walletContainer}>
                    <Image source={item.icon} style={style.walletIcon} />
                    <Text style={style.walletName}>{item.name}</Text>
                </View>
            ))}
            </View>
        </SafeAreaView>
    )
}

export default ConnectWalletWithdraw