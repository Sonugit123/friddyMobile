import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'
import { scale } from '../../utils/scale'

interface PreviewMoneyProps {
    headingTxt: string,
    coinValue: string,
    dollarValue: string,
    friddyFees: string,
    topHeight?: number;
    headingTxtColor?: string;
    bgColor?: string;
    isSuccess?: boolean;
    coinIcon?: ImageSourcePropType;
}

const PreviewMoney = ({ headingTxt, coinValue, dollarValue, friddyFees, topHeight, headingTxtColor, bgColor, isSuccess, coinIcon }: PreviewMoneyProps) => {
    return (
        <View style={[style.container, { marginTop: scale(topHeight || 0), backgroundColor: bgColor }]}>
            <Text style={[style.headingTxt, { color: headingTxtColor }]}>{headingTxt}</Text>
            <View style={style.coinAndTickContainer}>
                <View style={style.coinAndValueContainer}>
                    <Image source={coinIcon || IconConstants.usdcCoin} style={style.usdcCoin} />
                    <Text style={style.coinValueTxt}>{coinValue}</Text>
                </View>
                {isSuccess && <Image source={IconConstants.depositTick} style={style.tickMark} />}
            </View>
            <View style={[style.valueContainer, { marginVertical: scale(8) }]}>
                <Text style={style.dollarLabelTxt}>Dollar value</Text>
                <Text style={style.dollarValueTxt}>{dollarValue}</Text>
            </View>
            <View style={style.valueContainer}>
                <Text style={style.dollarLabelTxt}>Friddy fees</Text>
                <Text style={style.dollarValueTxt}>{friddyFees}</Text>
            </View>
        </View>
    )
}

export default PreviewMoney