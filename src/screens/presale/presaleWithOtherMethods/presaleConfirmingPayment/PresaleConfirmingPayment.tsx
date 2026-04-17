import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import { style } from './style';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const PresaleConfirmingPayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.makePaymentView}>
          <Text style={style.makePaymentTxt}>Confirming payment</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.makePaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>This won’t take long</Text>
        <PreviewBuyCryptoWithTimer
          headingTxt="You Paid"
          headingTxtColor={ColorConstants.BTNCOLOR}
          coinValue="$200"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={8}
          timerValue="00:59"
          timerBorderColor={ColorConstants.QR_BOX_BG}
          timerColor={ColorConstants.BTNCOLOR}
        />
        <View style={style.pdfView}>
          <View style={style.pdfInnerView}>
            <Text style={style.pdfTxt}>12345.PDF</Text>
            <Image
              source={IconConstants.checkedCircle}
              style={style.checkedIcon}
            />
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Dispute"
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Dispute')}
        />
      </View>
    </SafeAreaView>
  );
};

export default PresaleConfirmingPayment;
