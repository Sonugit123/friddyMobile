import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'
import { IconConstants } from '../../../../constants/iconConstants'
import { ColorConstants } from '../../../../constants/colorConstants'
import Divider from '../../../../components/divider/Divider'

const SignUp = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <View style={style.container}>
        <Header />
        <Text style={style.welcomeText}>Welcome to Friddy!</Text>
        <Text style={style.loginText}>Create an account to start using Friddy.</Text>
        <CustomButton
          disable={false}
          title="Sign up with Email"
          leftImage={IconConstants.email}
          imageSize={24}
          width={343}
          topHeight={16}
          bgColor={ColorConstants.WHITE}
          txtColor={ColorConstants.BLACK}
          borderColor={ColorConstants.BLACK}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          borderWidth={1}
          onPress={() => console.log('Google')}
        />
        <Divider txt="OR" topHeight={16} />
        <CustomButton
          disable={false}
          title="Continue with Apple"
          leftImage={IconConstants.appleIcon}
          imageSize={24}
          width={343}
          bordRadius={8}
          topHeight={22}
          bgColor={ColorConstants.BLACK}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Google')}
        />
        <CustomButton
          disable={false}
          title="Continue with Google"
          leftImage={IconConstants.googleIcon}
          imageSize={24}
          width={343}
          bordRadius={8}
          topHeight={16}
          bgColor={ColorConstants.WHITE}
          txtColor={ColorConstants.BLACK}
          borderColor={ColorConstants.BLACK}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          borderWidth={1}
          onPress={() => console.log('Google')}
        />
        <View style={style.newToFriddyView}>
          <Text style={style.newToFriddyTxt}>Have an account ? </Text>
          <Text style={style.createAccountTxt}>Log in</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp