import { View, Text, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import CloseButton from '../../../components/closeButton/CloseButton';
import { IconConstants } from '../../../constants/iconConstants';
import BackHeader from '../../../components/backHeader/BackHeader';
import InputBox from '../../../components/inputBox/InputBox';
import CustomButton from '../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../constants/colorConstants';
import { Fontconstants } from '../../../constants/fontConstants';

const SellCryptoPaymentMethodForm = () => {
  const [accountName, setAccountName] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const isValid = useMemo(() => {
    return accountName.trim().length > 0 && paymentDetails.trim().length > 0;
  }, [accountName, paymentDetails]);
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Add payment method</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <Text style={style.fillInTxt}>Fill in Information</Text>
      <Image source={IconConstants.paypal2} style={style.paymentMethodIcon} />
      <Text style={style.paymentMethodDetails}>PayPal Details</Text>
      <InputBox
        placeholder={'Please enter account name'}
        label="Account name"
        keyboardType="default"
        autoCapitalize="none"
        topHeight={16}
        value={accountName}
        onChangeText={setAccountName}
      />
      <InputBox
        placeholder={'Please enter payment details'}
        label="Payment details"
        keyboardType="default"
        autoCapitalize="none"
        topHeight={24}
        value={paymentDetails}
        onChangeText={setPaymentDetails}
      />
      <View style={style.buttonContainer}>
        <CustomButton
          disable={false}
          title="Confirm"
          bgColor={
            isValid ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG
          }
          txtColor={
            isValid ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT
          }
          width={155}
          topHeight={0}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Confirm')}
        />
        <CustomButton
          disable={false}
          title="Cancel"
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          width={155}
          topHeight={0}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Cancel')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SellCryptoPaymentMethodForm;
