import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import { IconConstants } from '../../../../constants/iconConstants';

const SureGoogleAuth = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Are you sure about this ?</Text>
        <Text style={style.subHeading}>
          Removing
          <Text style={{ color: ColorConstants.BLACK }}>
            {' '}
            this would disable your account activities for 24hrs
          </Text>{' '}
          as a security measure. {'\n'}It is advisable to have two verification
          methods are required for secure transactions, Email and Authenticator
          app
        </Text>
        <View style={style.enabledContainer}>
          <View style={style.tickMarkContainer}>
            <Text>Enabled</Text>
            <Image source={IconConstants.tickMark} style={style.tickMark} />
          </View>
          <Text style={style.addedOnTxt}>Added on 10/02/2025 @5:37pm</Text>
        </View>
        <CustomButton
          disable={false}
          title="Yes"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={8}
          onPress={() => console.log('Yes')}
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

export default SureGoogleAuth;
