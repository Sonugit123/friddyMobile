import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import PhoneInput from '../../../../components/phoneInput/PhoneInput';
import { scale } from '../../../../utils/scale';

const CommunicationMethodForm = () => {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Image
          source={IconConstants.textMessage}
          style={style.communicationIcon}
        />
        <Text style={style.headingTxt}>Text Message</Text>
        <PhoneInput value={phone} onChange={setPhone} topHeight={scale(16)} />
      </View>
    </SafeAreaView>
  );
};

export default CommunicationMethodForm;
