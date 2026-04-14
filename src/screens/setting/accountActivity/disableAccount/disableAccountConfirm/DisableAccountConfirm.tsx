import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../../components/header/Header';
import BackHeader from '../../../../../components/backHeader/BackHeader';
import { style } from './style';
import CustomButton from '../../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../../constants/fontConstants';
import { ColorConstants } from '../../../../../constants/colorConstants';
import { IconConstants } from '../../../../../constants/iconConstants';

const DisableAccountConfirm = () => {
  const disableSuccess = true;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Disable Account ?</Text>
        {disableSuccess ? (
          <>
            <Text style={style.subHeading}>
              Once your account is disabled, you will not be able to begin the
              reactivation process until at least two hours have passed.
            </Text>
            <CustomButton
              disable={false}
              title="Disable account"
              bgColor={ColorConstants.WARNING_TXT}
              width={343}
              topHeight={16}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Disable account')}
            />
            <CustomButton
              disable={false}
              title="Cancel"
              bgColor={ColorConstants.SIGNIN_BOX}
              txtColor={ColorConstants.BTNCOLOR}
              width={343}
              topHeight={16}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Cancel')}
            />
          </>
        ) : (
          <View>
            <View style={style.requestView}>
              <Text style={style.successTxt}>Request Received</Text>
              <Image source={IconConstants.check} style={style.checkIcon} />
            </View>
            <Text style={style.subHeading}>
              You will be logged out of your account.
            </Text>
            <CustomButton
              disable={false}
              title="Close"
              bgColor={ColorConstants.SIGNIN_BOX}
              txtColor={ColorConstants.BTNCOLOR}
              width={343}
              topHeight={16}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Close')}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DisableAccountConfirm;
