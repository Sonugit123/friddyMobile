import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import { style } from './style'
import InputBox from '../../../components/inputBox/InputBox'
import CustomButton from '../../../components/customButton/CustomButton'

const LoginGAuth = () => {
  const loginHandler = () => {
    console.log('LoginGAuth');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Header />
        <Text style={style.welcomeText}>Welcome back!</Text>
        <Text style={style.loginText}>Enter Google Authenticator code</Text>
        <InputBox
          placeholder={'6-digits code from G-Auth'}
          label="Code"
          topHeight={32}
          keyboardType='numeric'
          autoCapitalize='none'
        />
        <CustomButton
          disable={false}
          title="Login"
          width={343}
          topHeight={16}
          onPress={loginHandler}
        />
        <View style={style.newToFriddyView}>
          <Text style={style.newToFriddyTxt}>Have a problem ?</Text>
          <Text style={style.createAccountTxt}>Get code via SMS</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginGAuth