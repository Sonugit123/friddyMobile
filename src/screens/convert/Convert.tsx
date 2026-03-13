import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CustomLineChart from '../../components/customLineChart/CustomLineChart'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header'
import BackHeader from '../../components/backHeader/BackHeader'
import { style } from './style'
import SelectDayYear from '../../components/selectDayYear/SelectDayYear'
import WalletBalance from '../../components/walletBalance/WalletBalance'
import { IconConstants } from '../../constants/iconConstants'
import { ColorConstants } from '../../constants/colorConstants'
import WalletPnl from '../../components/walletPnl/WalletPnl'
import CryptoAndCash from '../../components/cryptoAndCash/CryptoAndCash'

const Convert = () => {
    const dataType = ["1H", "1D", "1W", "1M", "1Y"];
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
        {
            id: "4",
            icon: IconConstants.ethCoin,
            name: "ETH",
            type: "ETH",
            amount: '$1,000.00',
            typeValue: '0.1 ETH'
        },
        {
            id: "5",
            icon: IconConstants.solCoin,
            name: "SOL",
            type: "SOL",
            amount: '$1,000.00',
            typeValue: '98 SOL'
        },
    ]
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            {/* <View style={style.container}>
                <CustomLineChart />
                <SelectDayYear 
                data={dataType}
                />
            </View> */}
            <View style={style.container}>
                <Text style={style.welcomeText}>Wallet</Text>

                <WalletBalance headingTxt='Wallet balance' />
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
                <WalletPnl topHeight={16} />
                <CustomLineChart />
                <SelectDayYear
                    data={dataType}
                />
                <CryptoAndCash
                    cryptoAmount="0.00"
                    cashAmount="0.00"
                    cryptoIncrease="0.00"
                    cashIncrease="0.00"
                />
                <View style={style.receiveCoinContainer}>
                    {receiveData.map((item, index) => {
                        // const isSelected = selectedId === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                activeOpacity={0.8}
                            // onPress={() => setSelectedId(item.id)}
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

export default Convert