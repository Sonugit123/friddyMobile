import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import CustomButton from '../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../constants/fontConstants'
import { IconConstants } from '../../../constants/iconConstants'

const Warning = () => {
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
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
                width={343}
                topHeight={16}
                onPress={() => console.log('I Understand')}
            />
            <View style={style.dontShowContainer}>
                <Image source={IconConstants.checkBoxFill} style={style.checkBoxFill} />
                <Text style={style.dontShowTxt}>Don’t show this warning again.</Text>
            </View>
        </SafeAreaView>
    )
}

export default Warning