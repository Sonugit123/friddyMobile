import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { style } from './style';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const ChangePhoneNumber = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Change Phone Number</Text>
        <Text style={style.currentPhoneTxt}>Current Phone Number</Text>
        <View style={style.currentPhoneContainer}>
          <View style={style.countryView}>
            <Text style={style.countryTxt}>Country</Text>
            <View style={style.currentPhoneView}>
              <Image source={IconConstants.uaeFlag} style={style.flagImg} />
              <Text style={style.countryCodeTxt}>+971</Text>
              <Image
                source={IconConstants.downArrow}
                style={style.downArrowImg}
              />
            </View>
          </View>
          <View style={style.countryView}>
            <Text style={style.countryTxt}>Phone</Text>
            <View style={style.phoneNumberView}>
              <Text style={style.countryCodeTxt}>80****9461</Text>
              <Image source={IconConstants.tickMark} style={style.tickMark} />
            </View>
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Change number"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={24}
          onPress={() => console.log('Change number')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePhoneNumber;
