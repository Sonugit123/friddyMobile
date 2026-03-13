import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../constants/iconConstants'
import PreviewMoney from '../../../components/previewMoney/PreviewMoney'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'
import { ColorConstants } from '../../../constants/colorConstants'

const DepositeMoneyPreview = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <View style={style.headingContainer}>
                <View style={style.headingTxtContainer}>
                    <Text style={style.headingTxt}>Receive USDC</Text>
                    <Text style={style.subHeadingTxt}>On the base network</Text>
                </View>
                <View>
                    <Image source={IconConstants.usdcCoin} style={style.usdcCoin} />
                    <Image source={IconConstants.usdcBaseNetwork} style={style.usdcBaseNetwork} />
                </View>
            </View>
            <PreviewMoney
                headingTxt='You will recieve'
                coinValue='99.0 USDC'
                dollarValue='$200'
                friddyFees='$0.15'
                bgColor={ColorConstants.SIGNIN_BOX}
                topHeight={24}
            />
            <CustomButton
                disable={false}
                title="Proceed"
                fontfamily={Fontconstants.SEMIBOLD}
                fontsize={14}
                width={327}
                topHeight={24}
                onPress={() => console.log('Proceed')}
            />
            </View>
        </SafeAreaView>
    )
}

export default DepositeMoneyPreview