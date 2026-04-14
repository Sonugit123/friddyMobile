import { View, Text } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import InputBox from '../../../../components/inputBox/InputBox';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const VerifyAuthenticatorCode = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Verify Authenticator Code</Text>
        <Text style={style.subHeading}>
          Enter code gotten from Authenticator App
        </Text>
        <InputBox
          placeholder={'Enter Code'}
          label="Security code"
          topHeight={16}
          keyboardType="numeric"
          autoCapitalize="none"
        />
        <CustomButton
          disable={false}
          title="Verify"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={24}
          onPress={() => console.log('Verify')}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyAuthenticatorCode;
