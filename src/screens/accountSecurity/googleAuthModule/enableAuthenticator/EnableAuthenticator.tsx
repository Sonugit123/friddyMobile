import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { ImageConstants } from '../../../../constants/imageConstants';
import Divider from '../../../../components/divider/Divider';
import CustomButton from '../../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';

const EnableAuthenticator = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Enable Authenticator App</Text>
        <Text style={style.subHeading}>
          Scan this QR code in Google Authenticator app
        </Text>
        <Image source={ImageConstants.QRCODE} style={style.qrCode} />
        <Divider txt="OR" topHeight={32} />
        <Text style={style.headingTxt}>2VMQ3YY7C77HACRW</Text>
        <Text style={style.subHeading}>
          If you are unable to scan the QR code, please enter this code manually
          into the app.
        </Text>
        <CustomButton
          disable={false}
          title="Next"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={24}
          onPress={() => console.log('Next')}
        />
      </View>
    </SafeAreaView>
  );
};

export default EnableAuthenticator;
