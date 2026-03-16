import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import PreviewBuyCryptoWithTimer from '../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const ProofOfPayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.proofOfPaymentView}>
          <Text style={style.proofOfPaymentTxt}>Proof of payment</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.proofOfPaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>
          To ensure payment has been made we need a receipt from the transaction
          made
        </Text>
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

        <View style={style.uploadProofView}>
          <View style={style.uploadIconView}>
            <Image source={IconConstants.uploadIcon} style={style.uploadIcon} />
            <Text style={style.uploadTransScriptTxt}>
              Upload transaction receipt
            </Text>
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Submit proof"
          bgColor={ColorConstants.BACKARROWBG}
          txtColor={ColorConstants.GRAY_LABEL}
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Submit proof')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProofOfPayment;
