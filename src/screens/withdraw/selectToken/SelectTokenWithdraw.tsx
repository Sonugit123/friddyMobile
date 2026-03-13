import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const SelectTokenWithdraw = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const recentData = [
        {
            id: "1",
            icon: IconConstants.usdcCoin,
            name: "USDC",
        },
        {
            id: "2",
            icon: IconConstants.usdtCoin,
            name: "USDT",
        }
    ]

    const receiveData = [
        {
            id: "1",
            icon: IconConstants.usdcCoin,
            name: "USDC on Base",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "2",
            icon: IconConstants.usdcCoin,
            name: "USDC on ETH",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "3",
            icon: IconConstants.usdcCoin,
            name: "USDC on Solana",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "4",
            icon: IconConstants.usdcCoin,
            name: "USDC on BSC",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "5",
            icon: IconConstants.usdcCoin,
            name: "USDC.e on Arbitrum",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
        {
            id: "6",
            icon: IconConstants.usdcCoin,
            name: "USDC on Optimism",
            type: "USDC",
            amount: '$1,000.00',
            typeValue: '998.9 USDC'
        },
    ]
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <View style={style.headingContainer}>
                <Text style={style.headingTxt}>Select token</Text>
                <Image source={IconConstants.modalCross} style={style.modalCross} />
            </View>

            <Text style={style.recentTxt}>Recent</Text>
            <View style={style.recentCoinContainer}>
                {recentData.map((item, index) => (
                    <View key={index} style={style.recentCoinView}>
                        <Image source={item.icon} style={style.recentCoinIcon} />
                        <Text style={style.recentCoinTxt}>{item.name}</Text>
                    </View>
                ))}
            </View>

            <Text style={style.receiveTxt}>Withdraw</Text>
            <View style={style.receiveCoinContainer}>
                {receiveData.map((item, index) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            onPress={() => setSelectedId(item.id)}
                        >
                            <View style={[style.receiveCoinView, {
                                borderColor: isSelected ? ColorConstants.BTNCOLOR : 'transparent',
                                borderWidth: isSelected ? scale(1) : 0,
                                padding: isSelected ? scale(8) : 0,
                                marginBottom: isSelected ? scale(16) : scale(24),
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
            <View style={style.buttonContainer}>
                <CustomButton
                    disable={false}
                    title="Withdraw"
                    bgColor={selectedId ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
                    txtColor={selectedId ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT}
                    width={327}
                    topHeight={28}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log("Withdraw")}
                />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default SelectTokenWithdraw