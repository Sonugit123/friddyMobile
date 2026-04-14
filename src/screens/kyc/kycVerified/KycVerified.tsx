import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import { Fontconstants } from '../../../constants/fontConstants';
import CustomButton from '../../../components/customButton/CustomButton';

const KycVerified = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.headingView}>
        <Text style={style.headingTxt}>We will let you know</Text>
        <Text style={style.headingTxt}>as soon as you are verified</Text>
      </View>
      <View style={style.tickMarkView}>
        <Image source={IconConstants.check} style={style.tickMarkImg} />
      </View>
      <CustomButton
        disable={false}
        title="Got It"
        width={343}
        topHeight={24}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Got It')}
      />
    </SafeAreaView>
  );
};

export default KycVerified;
