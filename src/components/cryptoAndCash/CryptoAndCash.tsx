import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'

interface CryptoAndCashProps {
    cryptoAmount: string;
    cashAmount: string;
    cryptoIncrease: string;
    cashIncrease: string;
}

const CryptoAndCash = (props: CryptoAndCashProps) => {
    const { cryptoAmount, cashAmount, cryptoIncrease, cashIncrease } = props;
    return (
        <View style={style.container}>
            <View style={style.cryptoContainer}>
                <View style={style.cryptoHeaidngContainer}>
                    <Text style={style.cryptoTxt}>Crypto</Text>
                    <Text style={style.cryptoTxt}>${cryptoAmount}</Text>
                </View>
                <View style={style.cryptoIncreaseContainer}>
                    <Image source={IconConstants.cryptoCoins} style={style.cryptoCoinsImg} />
                    <Text style={style.cryptoIncreaseTxt}>+{cryptoIncrease}$</Text>
                </View>
            </View>
            <View style={style.cryptoContainer}>
                <View style={style.cryptoHeaidngContainer}>
                    <Text style={style.cryptoTxt}>Cash</Text>
                    <Text style={style.cryptoTxt}>${cashAmount}</Text>
                </View>
                <View style={style.cryptoIncreaseContainer}>
                    <Image source={IconConstants.cashCoins} style={style.cashCoinsImg} />
                    <Text style={style.cryptoIncreaseTxt}>+{cashIncrease}$</Text>
                </View>
            </View>
        </View>
    )
}

export default CryptoAndCash