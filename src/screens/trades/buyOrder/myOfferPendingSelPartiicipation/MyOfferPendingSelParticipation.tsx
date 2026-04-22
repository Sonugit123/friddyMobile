import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import PreviewBuyCrypto from '../../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../../constants/colorConstants';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';

const MyOfferPendingSelParticipation = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Order summary </Text>
        <PreviewBuyCrypto
          headingTxt="John Doe"
          coinValue="$100"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={24}
        />
        <Text style={style.paymentMethodTxt}>Pay to</Text>
        <View style={style.paymentMethodCardSelected}>
          <Image source={IconConstants.paypal} style={style.paymentIcon} />
          <Text style={style.paymentTextName}>Paypal</Text>
        </View>
        <View style={style.pendingParticipationView}>
            <Text style={style.pendingParticipationTxt}>Pending participation</Text>
            <View style={style.timerView}>
                <Image source={IconConstants.clockPending} style={style.clockPending} />
                <Text style={style.timerTxt}>00:30s</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyOfferPendingSelParticipation;
