import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './style'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'
import { IconConstants } from '../../../constants/iconConstants'

const WarningWIthdraw = () => {
  return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
            <BackHeader />
            <View style={style.warningContainer}>
                <Text style={style.warningTxt}>Warning</Text>
                <Text style={style.warningSubTxt}>Receiving crypto over the wrong network could mean you losing your funds. be sure to check the right network! when in doubt, send a small amount first.</Text>
            </View>
            <CustomButton
                disable={false}
                title="I understand"
                fontfamily={Fontconstants.SEMIBOLD}
                fontsize={14}
                width={327}
                topHeight={16}
                onPress={() => console.log('I Understand')}
            />
            <View style={style.dontShowContainer}>
                <Image source={IconConstants.checkBoxFill} style={style.checkBoxFill} />
                <Text style={style.dontShowTxt}>Don’t show this warning again.</Text>
            </View>
            </View>
        </SafeAreaView>
  )
}

export default WarningWIthdraw