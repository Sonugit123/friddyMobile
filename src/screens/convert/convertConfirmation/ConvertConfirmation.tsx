import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'
import CustomButton from '../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../constants/colorConstants'
import { Fontconstants } from '../../../constants/fontConstants'

const ConvertConfirmation = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
                <BackHeader />
                <View style={style.headingContainer}>
                    <Text style={style.headingTxt}>Convert</Text>
                    {/* <Image source={IconConstants.modalCross} style={style.modalCross} /> */}
                </View>
                <View style={style.convertContainer}>
                    <Text style={style.convertTxt}>Convert</Text>
                    <View style={style.coinView}>
                        <Image source={IconConstants.friddyCoin} style={style.coinStyle} />
                        <Text style={style.coinTxt}>15 FRIDDY</Text>
                    </View>
                    <Text style={style.coinValue}>$ <Text style={style.coinValueTxt}>50.00</Text></Text>
                </View>
                <View style={style.receiveContainer}>
                    <Text style={style.convertTxt}>Receive</Text>
                    <View style={style.coinView}>
                        <Image source={IconConstants.friddyCoin} style={style.coinStyle} />
                        <Text style={style.coinTxt}>15 FRIDDY</Text>
                    </View>
                    <Text style={style.coinValue}>$ <Text style={style.coinValueTxt}>50.00</Text></Text>
                </View>
                <View style={style.friddyFeesContainer}>
                    <Text style={style.friddyFeesTxt}>Friddy Fees (0.25%)</Text>
                    <Text style={style.friddyFeesValue}>$0.25</Text>
                </View>
                <CustomButton
                    disable={false}
                    title="Convert"
                    bgColor={ColorConstants.BTNCOLOR}
                    txtColor={ColorConstants.WHITE}
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

export default ConvertConfirmation