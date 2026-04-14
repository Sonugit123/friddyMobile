import { View, Text } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import BackHeader from '../../../../components/backHeader/BackHeader'
import { ColorConstants } from '../../../../constants/colorConstants'
import InputBox from '../../../../components/inputBox/InputBox'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const SecurityVerificationEmail = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Security verification</Text>
        <Text style={style.subHeading}>
          Please enter the security code sent to your old Email
          <Text style={{ color: ColorConstants.BLACK }}>{' '}user@gmail.com</Text>
        </Text>
        <InputBox
          placeholder={'Enter Code'}
          label="Security code"
          topHeight={24}
          keyboardType="numeric"
          autoCapitalize="none"
        />
        <View style={style.getCodeContainer}>
          <Text style={style.getCodeTxt}>Get code</Text>
          <View style={style.timerContainer}>
            <Text style={style.timerTxt}>00:60</Text>
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Verify"
          txtColor={ColorConstants.VERIFY_BTN_TXT}
          fontfamily={Fontconstants.SEMIBOLD}
          bgColor={ColorConstants.BACKARROWBG}
          fontsize={14}
          width={343}
          topHeight={24}
          onPress={() => console.log('Verify')}
        />
      </View>
    </SafeAreaView>
  )
}

export default SecurityVerificationEmail