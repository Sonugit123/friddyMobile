import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { style } from './style';
import PhoneInput from '../../../../components/phoneInput/PhoneInput';
import { scale } from '../../../../utils/scale';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const VerifyNewNumber = () => {
  const [phone, setPhone] = useState('');
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Verify new number</Text>
        <Text style={style.subHeading}>
          Please type in the new number you want to verify
        </Text>
        <PhoneInput value={phone} onChange={setPhone} topHeight={scale(24)} />
        <CustomButton
          disable={false}
          title="Verify"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={24}
          onPress={() => console.log('Verify')}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyNewNumber;
