import { View, Text } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import InputBox from '../../../../components/inputBox/InputBox';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const VerifyNewEmail = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Verify New Email</Text>
        <Text style={style.subHeading}>
          Please type in the new email you want to verify
        </Text>
        <InputBox
          placeholder={'Enter new Email address'}
          label="New Email"
          keyboardType="default"
          autoCapitalize="none"
          topHeight={24}
        />
        <CustomButton
          disable={false}
          title="Verify"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={8}
          onPress={() => console.log('Verify')}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyNewEmail;
