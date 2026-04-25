import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';

const SellOrderPaymentConfirmed = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
        <View style={style.container}>
          {/* Seller's Information Section */}
          <Text style={style.headingTxt}>Payment confirmed</Text>
          <View style={style.sendingView}>
            <View style={style.leftView}>
              <Text style={style.sendingTxt}>Sending</Text>
              <View style={style.usdcIconView}>
                <Image source={IconConstants.usdcCoin} style={style.usdcIcon} />
                <Text style={style.usdcTxt}>50 USDC</Text>
              </View>
            </View>
            <View style={style.timerView}>
              <Image source={IconConstants.timer} style={style.timerIcon} />
              <Text style={style.timerTxt}>02:00</Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default SellOrderPaymentConfirmed;
