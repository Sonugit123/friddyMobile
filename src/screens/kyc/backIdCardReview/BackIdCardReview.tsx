import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import { ColorConstants } from '../../../constants/colorConstants';

const BackIdCardReview = () => {
  const isButtonEnabled = true;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <Text style={style.headingTxt}>Back of Card</Text>
      <View style={style.photoFrame}>
        <Text>No Photo</Text>
      </View>
      <View style={style.infoBox}>
        <Text style={style.infoTxt}>Please flip your card ot the back</Text>
      </View>
      <CustomButton
        disable={!isButtonEnabled}
        title={isButtonEnabled ? "Next" : "Continue"}
        bgColor={
          isButtonEnabled ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG
        }
        txtColor={
          isButtonEnabled ? ColorConstants.WHITE : ColorConstants.VERIFY_BTN_TXT
        }
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue')}
      />
    </SafeAreaView>
  );
};

export default BackIdCardReview;
