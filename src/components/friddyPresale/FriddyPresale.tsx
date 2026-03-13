import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'
import { scale } from '../../utils/scale';

interface friddyPresale {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    price: string;
    topHeight?: number;
}

const FriddyPresale = (props: friddyPresale) => {
    const { days, hours, minutes, seconds, price, topHeight } = props;
    return (
        <View style={[style.container, { marginTop: scale(topHeight || 0) }]}>
            <View style={style.friddyHeadingContainer}>
                <Text style={style.friddyHeadingTxt}>FRIDDY Presale</Text>
                <View style={style.liveContainer}>
                    <View style={style.liveDot} />
                    <Text style={style.liveTxt}>Live</Text>
                </View>
            </View>
            <View style={style.timerView}>
            <View style={style.timerContainer}>
                <Text style={style.timerValue}>{days}</Text>
                <Text style={style.timerLabel}>DAYS</Text>
            </View>
            <View style={style.timerContainer}>
                <Text style={style.timerValue}>{hours}</Text>
                <Text style={style.timerLabel}>HOURS</Text>
            </View>
            <View style={style.timerContainer}>
                <Text style={style.timerValue}>{minutes}</Text>
                <Text style={style.timerLabel}>MIN</Text>
            </View>
            <View style={style.timerContainer}>
                <Text style={style.timerValue}>{seconds}</Text>
                <Text style={style.timerLabel}>SEC</Text>
            </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={style.buyNowBtn}>
                <Text style={style.buyNowTxt}>Buy Now </Text>
                <Image source={IconConstants.arrowRightIcon} style={style.icon}/>
                <Text style={style.buyNowTxt}>1 FRIDDY @ ${price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FriddyPresale