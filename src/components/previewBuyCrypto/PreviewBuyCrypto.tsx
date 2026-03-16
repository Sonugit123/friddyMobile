import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import { style } from './style';
import { scale } from '../../utils/scale';
import { IconConstants } from '../../constants/iconConstants';

interface PreviewBuyCryptoProps {
    headingTxt: string,
    coinValue: string,
    receiveValue: string,
    friddyFees: string,
    topHeight?: number;
    headingTxtColor?: string;
    bgColor?: string;
    isSuccess?: boolean;
    coinIcon?: ImageSourcePropType;
}

const PreviewBuyCrypto = ({ headingTxt, coinValue, receiveValue, friddyFees, topHeight, headingTxtColor, bgColor, isSuccess, coinIcon }: PreviewBuyCryptoProps) => {
  return (
        <View style={[style.container, { marginTop: scale(topHeight || 0), backgroundColor: bgColor }]}>
          <View style={style.profileAndNameContainer}>
          <View style={style.profileContainer}>
            <Text style={style.profileTxt}>JO</Text>
          </View>
            <Text style={[style.headingTxt, { color: headingTxtColor }]}>{headingTxt}</Text>
          </View>
            <View style={style.coinAndTickContainer}>
                <View style={style.coinAndValueContainer}>
                    {/* <Image source={coinIcon || IconConstants.usdcCoin} style={style.usdcCoin} /> */}
                    <Text style={style.coinValueTxt}>{coinValue}</Text>
                </View>
                {isSuccess && <Image source={IconConstants.depositTick} style={style.tickMark} />}
            </View>
            <View style={[style.valueContainer, { marginVertical: scale(8) }]}>
                <Text style={style.dollarLabelTxt}>Receive</Text>
                <View style={style.coinAndReceiveValContainer}>
                  <Image source={coinIcon || IconConstants.usdcCoin} style={style.usdcCoin} />
                  <Text style={style.dollarValueTxt}>{receiveValue}</Text>
                </View>
            </View>
            <View style={style.valueContainer}>
                <Text style={style.dollarLabelTxt}>Friddy fees</Text>
                <Text style={style.dollarValueTxt}>{friddyFees}</Text>
            </View>
        </View>
  )
}

export default PreviewBuyCrypto