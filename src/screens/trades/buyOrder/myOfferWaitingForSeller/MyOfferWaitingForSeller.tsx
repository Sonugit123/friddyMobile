import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../../constants/colorConstants';

const MyOfferWaitingForSeller = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.proofOfPaymentView}>
          <Text style={style.proofOfPaymentTxt}>Waiting for seller</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.proofOfPaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>
          Waiting for confirmation from seller,
        </Text>
        <PreviewBuyCryptoWithTimer
          headingTxt="You Paid"
          headingTxtColor={ColorConstants.BTNCOLOR}
          coinValue="$50"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={8}
          timerValue="00:59"
          timerBorderColor={ColorConstants.QR_BOX_BG}
          timerColor={ColorConstants.BTNCOLOR}
        />
        <View style={style.yourBalanceView}>
          <Text style={style.yourBalanceTxt}>Your balance</Text>
          <View style={style.balanceAndCoinView}>
            <Image
              source={IconConstants.usdcCoin}
              style={style.BalanceUsdcCoin}
            />
            <Text style={style.balanceValue}>0.00</Text>
          </View>
          <View style={style.pendingView}>
            <Text style={style.pendingTxt}>Pending</Text>
            <Image
              source={IconConstants.usdcCoin}
              style={style.pendingUsdcCoin}
            />
            <Text style={style.pendingValue}>198.09 USDC</Text>
          </View>
        </View>
        <View style={style.pdfView}>
          <View style={style.pdfInnerView}>
            <Text style={style.pdfTxt}>12345.PDF</Text>
            <Image
              source={IconConstants.checkedCircle}
              style={style.checkedIcon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyOfferWaitingForSeller;
