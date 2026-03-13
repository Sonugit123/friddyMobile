import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { style } from './style';
import InputBox from '../../../components/inputBox/InputBox';
import CustomButton from '../../../components/customButton/CustomButton';
import Divider from '../../../components/divider/Divider';
import { Fontconstants } from '../../../constants/fontConstants';
import { ColorConstants } from '../../../constants/colorConstants';
import { IconConstants } from '../../../constants/iconConstants';

const Login = () => {
  const loginHandler = () => {
    console.log('Login');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Header />
        <Text style={style.welcomeText}>Welcome back!</Text>
        <Text style={style.loginText}>Log in to your friddy account.</Text>
        <InputBox
          placeholder={'Email address'}
          label="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          topHeight={24}
        />
        <InputBox
          password={true}
          placeholder={'Your Password'}
          label="Password"
          topHeight={16}
        />
        <View style={style.forgotPasswordView}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={style.forgotTxt}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          disable={false}
          title="Login"
          width={343}
          topHeight={28}
          onPress={loginHandler}
        />
        <View style={style.newToFriddyView}>
          <Text style={style.newToFriddyTxt}>New to Friddy?</Text>
          <Text style={style.createAccountTxt}> Create your free account</Text>
        </View>
        <Divider txt="OR" topHeight={22} />
        <CustomButton
          disable={false}
          title="Continue with Apple"
          leftImage={IconConstants.appleIcon}
          imageSize={24}
          width={343}
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
          topHeight={16}
          bgColor={ColorConstants.WHITE}
          txtColor={ColorConstants.BLACK}
          borderColor={ColorConstants.BLACK}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          borderWidth={1}
          onPress={() => console.log('Google')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
