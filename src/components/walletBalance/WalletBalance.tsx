import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'

interface WalletBalProps {
  // pnlText: string;
  // showChartTxt: string;
  headingTxt: string;
}

const WalletBalance = (props: WalletBalProps) => {
    const {headingTxt} = props;
    return (
        <View style={style.container}>
            <Text style={style.walletBalanceTxt}>{headingTxt}</Text>
            <View style={style.amountContainer}>
                <Text style={style.walletBalanceAmount}>$0.00</Text>
                <Image source={IconConstants.walletEyeClose} style={style.walletEyeClose} />
            </View>
            <View style={style.dailyContainer}>
                <View style={style.dailyAmtView}>
                    <Text style={style.dailyAmount}>+$0.00</Text>
                </View>
                <View style={style.dailyPercentageView}>
                    <Text style={style.dailyPercentage}>+ 0.00%</Text>
                </View>
            </View>
        </View>
    )
}

export default WalletBalance