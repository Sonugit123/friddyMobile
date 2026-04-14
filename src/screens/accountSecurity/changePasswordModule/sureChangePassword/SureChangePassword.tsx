import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const SureChangePassword = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Are you sure ? </Text>
        <Text style={style.subHeading}>
          Please note that when you change the password associated with your
          account,
          <Text style={{ color: ColorConstants.BLACK }}>
            {' '}
            you will be asked to sign in again.
          </Text>
        </Text>
        <CustomButton
          disable={false}
          title="Yes I want to change"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={16}
          onPress={() => console.log('Yes I want to change')}
        />
        <CustomButton
          disable={false}
          title="No let me think about this"
          fontfamily={Fontconstants.SEMIBOLD}
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          fontsize={14}
          width={343}
          topHeight={16}
          onPress={() => console.log('No let me think about this')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SureChangePassword;
