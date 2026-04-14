import { View, Text } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const IdentityVerification = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <Text style={style.headingTxt}>Identity Verification</Text>
      <Text style={style.descriptionTxt}>
        This helps us check that you’re really you, Identity verification is a
        way for us to ensure the safety of this platform.
      </Text>
      <View style={style.privacyPolicyContainer}>
        <Text style={style.privacyPolicyTxt}>
          Your ID would be handled according to Our{' '}
          <Text style={style.privacyPolicyUnderlineTxt}>Privacy Policy</Text>{' '}
        </Text>
      </View>
      <View style={style.privacyPolicyContainer}>
        <Text style={style.privacyPolicyTxt}>
          Your ID would be handled according to Our{' '}
          <Text style={style.privacyPolicyUnderlineTxt}>Privacy Policy</Text>{' '}
        </Text>
      </View>
      <CustomButton
        disable={false}
        title="Add an ID"
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Add an ID')}
      />
    </SafeAreaView>
  );
};

export default IdentityVerification;
