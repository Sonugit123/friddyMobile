import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import InputBox from '../../../../components/inputBox/InputBox'
import Divider from '../../../../components/divider/Divider'
import CustomButton from '../../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../../constants/colorConstants'
import { Fontconstants } from '../../../../constants/fontConstants'

const BnbSmartWallet = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <View style={style.container}>
        <Header />
        <Text style={style.welcomeText}>Receive FRIDDY</Text>
        <Text style={[style.welcomeText, { marginTop: 0 }]}>to your BNB smart Wallet</Text>
        <InputBox
          placeholder={'0x----------'}
          label="Enter your BEP20 (BNB Smart Chain) Wallet "
          topHeight={24}
          keyboardType='numeric'
          autoCapitalize='none'
        />
        <Divider txt="OR" topHeight={32} />
        <Text style={style.welcomeText}>Receive FRIDDY</Text>
        <Text style={[style.welcomeText, { marginTop: 0 }]}>Via Connecting your wallet</Text>
        <Text style={style.loginText}>Connecting your wallet is a better option since our systems will add Friddy contract to your wallet automatically </Text>
        <View style={style.buttonContainer}>
          <CustomButton
            disable={false}
            title="Skip, I’ll do it later"
            bgColor={ColorConstants.BTNCOLOR2}
            txtColor={ColorConstants.BTNCOLOR}
            width={164}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Resend Code')}
          />
          <CustomButton
            disable={false}
            title="Yes transfer crypto"
            width={164}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Submit')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BnbSmartWallet