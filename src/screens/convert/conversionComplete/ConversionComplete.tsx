import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import Header from '../../../components/header/Header'
import CloseButton from '../../../components/closeButton/CloseButton'
import { IconConstants } from '../../../constants/iconConstants'
import CustomButton from '../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../constants/colorConstants'
import { Fontconstants } from '../../../constants/fontConstants'

const ConversionComplete = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
                <CloseButton />
                <View style={style.headingContainer}>
                    <Text style={style.headingTxt}>Convert</Text>
                    {/* <Image source={IconConstants.modalCross} style={style.modalCross} /> */}
                </View>
                <View style={style.conversionCompleteView}>
                    <Text style={style.conversionTxt}>Conversion complete</Text>
                    <View style={style.fromContainer}>
                        <View style={style.fromCoinView}>
                            <Image source={IconConstants.friddyCoin} style={style.fromCoin} />
                            <Text style={style.fromTxt}>15.00 FRIDDY</Text>
                        </View>
                        <Image source={IconConstants.userMenu} style={style.userMenu} />
                    </View>
                    <Text style={style.forTxt}>For</Text>
                    <View style={style.toContainer}>
                        <View style={style.fromCoinView}>
                            <Image source={IconConstants.usdcCoin} style={style.toCoin} />
                            <Text style={style.toTxt}>100.00 USDC</Text>
                        </View>
                        <Image source={IconConstants.depositTick} style={style.tickIcon} />
                    </View>
                    <View style={style.friddyFeesContainer}>
                        <Text style={style.friddyFeesTxt}>Friddy fees</Text>
                        <Text style={style.friddyFeesValue}>$0.15</Text>
                    </View>
                </View>
                <CustomButton
                    disable={false}
                    title="Convert again"
                    bgColor={ColorConstants.SIGNIN_BOX}
                    txtColor={ColorConstants.BTNCOLOR}
                    rightImage={IconConstants.plus}
                    imageSize={20}
                    width={327}
                    topHeight={24}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log("Convert")}
                />
            </View>
        </SafeAreaView>
    )
}

export default ConversionComplete