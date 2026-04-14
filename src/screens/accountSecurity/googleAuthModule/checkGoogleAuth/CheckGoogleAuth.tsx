import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import { IconConstants } from '../../../../constants/iconConstants';

const CheckGoogleAuth = () => {
  const [isGoogleAuthEnabled, setIsGoogleAuthEnabled] = useState(false);
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.container}>
        <Text style={style.headingTxt}>Google Authenticator</Text>
        <Text style={style.subHeading}>
          Instead of waiting for a text message, get authentication from
          authenticator app
        </Text>
        {isGoogleAuthEnabled && (
          <View style={style.enabledContainer}>
            <View style={style.tickMarkContainer}>
              <Text>Enabled</Text>
              <Image source={IconConstants.tickMark} style={style.tickMark} />
            </View>
            <Text style={style.addedOnTxt}>Added on 10/02/2025 @5:37pm</Text>
          </View>
        )}

        {isGoogleAuthEnabled ? (
          <CustomButton
            disable={false}
            title="Remove"
            fontfamily={Fontconstants.SEMIBOLD}
            fontsize={14}
            width={343}
            topHeight={8}
            onPress={() => console.log('Remove')}
          />
        ) : (
          <CustomButton
            disable={false}
            title="Enable Google Authenticator"
            fontfamily={Fontconstants.SEMIBOLD}
            fontsize={14}
            width={343}
            topHeight={16}
            onPress={() => console.log('Enable Google Authenticator')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CheckGoogleAuth;
