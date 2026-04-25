import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../../constants/colorConstants';

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const SellOrderWaitingForPayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* Seller's Information Section */}
          <Text style={style.headingTxt}>Waiting for payment</Text>
          <View style={style.sellerInformationContainer}>
            <View style={style.sellerInformationLeftView}>
              <Text style={style.sellerTxt}>JS</Text>
            </View>
            <View style={style.sellerInformationRightView}>
              <View style={style.sellerNameView}>
                <Text style={style.sellerNameTxt}>Jon Smith</Text>
                <Image
                  source={IconConstants.verifiedBadge}
                  style={style.verifiedBadgeIcon}
                />
              </View>
              <Text style={style.sellerIdTxt}>
                FriddyID :{' '}
                <Text style={style.FriddyIdUnderline}>1234567890</Text>
              </Text>
            </View>
          </View>
          <View style={style.sellerDetailsContainer}>
            {sellerInformationData.map(item => (
              <View key={item.id} style={style.sellerDetailView}>
                <Image source={item.icon} style={style.starIcon} />
                <Text style={style.starTxt}>{item.txt}</Text>
              </View>
            ))}
          </View>
          <View style={style.divider} />
          <PreviewBuyCryptoWithTimer
            headingTxt="Amount Due"
            headingTxtColor={ColorConstants.WARNING_TXT}
            coinValue="$50"
            receiveValue="198.49"
            friddyFees="$0.15"
            topHeight={12}
            bgColor={ColorConstants.WARNING_CONTAINER}
            timerValue="00:00"
            timerColor={ColorConstants.WARNING_TXT}
            timerBorderColor={ColorConstants.PROGRESS_RED_BORDER}
          />
          <Text style={style.paymentMethodTxt}>Payment method</Text>
          <View style={style.paymentMethodCardSelected}>
            <Image source={IconConstants.paypal2} style={style.paymentIcon} />
            <Text style={style.paymentTextName}>Paypal</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellOrderWaitingForPayment;
