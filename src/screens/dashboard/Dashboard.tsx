import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header'
import { style } from './style'
import WalletBalance from '../../components/walletBalance/WalletBalance'
import { ColorConstants } from '../../constants/colorConstants'
import CryptoAndCash from '../../components/cryptoAndCash/CryptoAndCash'
import FriddyPresale from '../../components/friddyPresale/FriddyPresale'
import TransactionChart from '../../components/transactionChart/TransactionChart'
import InfoDashboard from '../../components/infoDashboard/InfoDashboard'
import { IconConstants } from '../../constants/iconConstants'

const Dashboard = () => {
    const [selectedTransaction, setselectedTransaction] = useState("Withdraw");
    const transactionType = [
        "Withdraw",
        "Deposit",
        "Buy Crypto",
    ]
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={style.container}>
                <Text style={style.welcomeText}>Dashboard</Text>
                <InfoDashboard 
                 heading="Hello Jon"
                 subHeading="Please Fund your wallet to continue"
                 progress={0.2}
                 bgColor={ColorConstants.WARNING_CONTAINER}
                 icon={IconConstants.arrowRight}
                 txtColor={ColorConstants.WARNING_TXT}
                />
                <WalletBalance />
                <View style={style.transactionTypeContainer}>
                    {transactionType.map((item, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setselectedTransaction(item)
                                }}
                                style={[
                                    style.transactionTypeBtn,
                                    {
                                        backgroundColor: selectedTransaction === item ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG,

                                    }]}
                            >
                                <Text style={[style.transactionTypeTxt, {
                                    color: selectedTransaction === item ? ColorConstants.WHITE : ColorConstants.BLACK,
                                }]}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <CryptoAndCash
                    cryptoAmount="0.00"
                    cashAmount="0.00"
                    cryptoIncrease="0.00"
                    cashIncrease="0.00"
                />
                <FriddyPresale 
                 days="0"
                 hours="21"
                 minutes="0"
                 seconds="0"
                 price="0.9394"
                 topHeight={16}
                />
                <TransactionChart 
                 transactionType="Withdraw"
                 transactionTypeSubTxt="Ethereum"
                 amtViewTxt="$500.00"
                 amtViewSubTxt="488.88 FRIDDY"
                />
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Dashboard