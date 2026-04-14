import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const ChangeEmail = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Change Email</Text>
        <View style={style.emailContainer}>
          <Text style={style.currentEmailTxt}>Current Email</Text>
          <View style={style.emailView}>
            <Text style={style.emailTxt}>User@gmail.com</Text>
            <Image source={IconConstants.tickMark} style={style.tickMark} />
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Change email"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={8}
          onPress={() => console.log('Change email')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeEmail;
