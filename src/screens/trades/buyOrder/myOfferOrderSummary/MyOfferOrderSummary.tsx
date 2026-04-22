import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import PreviewBuyCrypto from '../../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../../constants/colorConstants';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import SocialShare from '../../../../components/socialShare/SocialShare';

const MyOfferOrderSummary = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Order summary </Text>
        <PreviewBuyCrypto
          coinValue="$100"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={24}
        />
        <Text style={style.paymentMethodTxt}>Payment method</Text>
        <View style={style.paymentMethodCardSelected}>
          <Image source={IconConstants.paypal} style={style.paymentIcon} />
          <Text style={style.paymentTextName}>Paypal</Text>
        </View>
        <View style={style.buttonContainer}>
          <CustomButton
            disable={false}
            title="Buy"
            width={155}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Buy')}
          />
          <CustomButton
            disable={false}
            title="Cancel"
            bgColor={ColorConstants.BTNCOLOR2}
            txtColor={ColorConstants.BTNCOLOR}
            width={155}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Cancel')}
          />
        </View>
        <SocialShare
          shareUrl="https://friddy.com/seller/1234567890"
          shareText="Check out this seller on Friddy!"
        />
      </View>
    </SafeAreaView>
  );
};

export default MyOfferOrderSummary;
