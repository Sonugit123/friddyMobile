import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const QuickSelfieInfo = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <Image source={IconConstants.userCircle} style={style.userCircle} />
      <Text style={style.headingTxt}>Please take a Quick selfie</Text>
      <Text style={style.subHeadingTxt}>
        We will cross check the image of your face with the image provided in
        your ID
      </Text>
      <CustomButton
        disable={false}
        title="Next"
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue')}
      />
    </SafeAreaView>
  );
};

export default QuickSelfieInfo;
