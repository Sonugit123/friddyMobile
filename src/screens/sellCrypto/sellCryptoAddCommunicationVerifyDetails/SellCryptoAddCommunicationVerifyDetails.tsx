import { View, Text, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import InputBox from '../../../components/inputBox/InputBox';
import { ColorConstants } from '../../../constants/colorConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const SellCryptoAddCommunicationVerifyDetails = () => {
  const [phone, setPhone] = useState('');

  const isValid = useMemo(() => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length === 6;
  }, [phone]);
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Add communication method</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <Text style={style.fillInTxt}>Fill in Information</Text>
      <Image source={IconConstants.whatsApp} style={style.paymentMethodIcon} />
      <Text style={style.paymentMethodDetails}>Verify Whatsapp details</Text>
      <View>
        <InputBox
          placeholder={'Please enter 6 digit code'}
          label="Enter Code"
          keyboardType="phone-pad"
          autoCapitalize="none"
          topHeight={16}
          value={phone}
          onChangeText={setPhone}
        />
        <View style={style.verifyView}>
          <Text
            style={[
              style.verifyTxt,
              {
                color: isValid
                  ? ColorConstants.BTNCOLOR
                  : ColorConstants.GRAY_LABEL,
              },
            ]}
          >
            Verify
          </Text>
        </View>
      </View>

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

export default SellCryptoAddCommunicationVerifyDetails;
