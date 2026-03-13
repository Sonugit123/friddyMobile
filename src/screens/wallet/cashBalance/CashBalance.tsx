import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { IconConstants } from '../../../constants/iconConstants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import WalletBalance from '../../../components/walletBalance/WalletBalance';
import { ColorConstants } from '../../../constants/colorConstants';
import WalletPnl from '../../../components/walletPnl/WalletPnl';
import CustomLineChart from '../../../components/customLineChart/CustomLineChart';

const CashBalance = () => {
    const [selectedTransaction, setselectedTransaction] = useState("Withdraw");

    const transactionType = [
        {
            id: 1,
            name: "Convert",
            icon: IconConstants.shuffle,
        },
        {
            id: 2,
            name: "Withdraw",
            icon: IconConstants.walletArrowUp,
        },
        {
            id: 3,
            name: "Recieve",
            icon: IconConstants.plus,
        },
    ]

    const receiveData = [
        {
            id: "1",
            icon: IconConstants.friddyCoin,
            name: "Friddy",
            type: "FRIDDY",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "2",
            icon: IconConstants.usdcCoin,
            name: "USDC",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "3",
            icon: IconConstants.busdCoin,
            name: "BUSD",
            type: "BUSD",
            amount: '$1,000.00',
            typeValue: '998.9 BUSD'
        },
    ]
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <BackHeader />
            <View style={style.container}>
                <Text style={style.welcomeText}>Cash balance</Text>
                <WalletBalance headingTxt="Balance" />
                <View style={style.transactionTypeContainer}>
                    {transactionType.map((item, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setselectedTransaction(item.name)
                                }}
                                style={[
                                    style.transactionTypeBtn,
                                    {
                                        backgroundColor: selectedTransaction === item.name ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG,

                                    }]}
                            >
                                <Image source={item.icon} style={[style.transactionTypeIcon, { tintColor: selectedTransaction === item.name ? ColorConstants.WHITE : ColorConstants.BLACK, }]} />
                                <Text style={[style.transactionTypeTxt, {
                                    color: selectedTransaction === item.name ? ColorConstants.WHITE : ColorConstants.BLACK,
                                }]}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={style.cashBalanceView}>
                    <Text style={style.cashBalanceTxt}>See Crypto balance</Text>
                    <View style={style.iconBalanceView}>
                        <Text style={style.cashTxt}>$0.00</Text>
                        <Image source={IconConstants.arrowRightIcon} style={style.arrowRightIcon} />
                    </View>
                </View>
                <WalletPnl topHeight={16} />
                <View style={style.receiveCoinContainer}>
                    {receiveData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                activeOpacity={0.8}
                            >
                                <View style={[style.receiveCoinView, {
                                }]}>
                                    <View style={style.coinAndTypeView}>
                                        <Image source={item.icon} style={style.receiveCoinIcon} />
                                        <View>
                                            <Text style={style.receiveCoinTxt}>{item.name}</Text>
                                            <Text style={style.typeTxt}>{item.type}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={style.amountTxt}>{item.amount}</Text>
                                        <Text style={style.typeTxt}>{item.typeValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CashBalance