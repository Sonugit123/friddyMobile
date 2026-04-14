import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const AuthenticatorSuccess = () => {
  const authenticatorAdded = true;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        {authenticatorAdded ? (
          <Text style={style.headingTxt}>Authenticator Added Successfully</Text>
        ) : (
          <Text style={style.headingTxt}>
            Authenticator Removed Successfully
          </Text>
        )}
        <View style={style.tickMarkContainer}>
          <Image source={IconConstants.check} style={style.tickMark} />
        </View>
        <CustomButton
          disable={false}
          title="Done"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={16}
          onPress={() => console.log('Done')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthenticatorSuccess;
