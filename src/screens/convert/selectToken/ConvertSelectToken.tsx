import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { ColorConstants } from '../../../constants/colorConstants'
import { scale } from '../../../utils/scale'
import { IconConstants } from '../../../constants/iconConstants'

const ConvertSelectToken = ({ onSelectToken }: any) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

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
            <View style={style.container}>
                <BackHeader />
                <Text style={style.headingTxt}>Select Token</Text>
                <Text style={style.subHeadingTxt}>Convert</Text>
                <View style={style.receiveCoinContainer}>
                    {receiveData.map((item, index) => {
                        const isSelected = selectedId === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                activeOpacity={0.8}
                                // onPress={() => setSelectedId(item.id)}
                                onPress={() => {
                                    onSelectToken(item)
                                }}
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
            </View>
        </SafeAreaView>
    )
}

export default ConvertSelectToken