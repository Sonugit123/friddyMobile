import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const SellOrderBuyerMarkAsPaid = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* Seller's Information Section */}
          <Text style={style.headingTxt}>Buyer marked as paid</Text>
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
            headingTxt="You received"
            headingTxtColor={ColorConstants.GREEN_DOT}
            coinValue="$50"
            receiveValue="198.49"
            friddyFees="$0.15"
            topHeight={12}
            bgColor={ColorConstants.SUCCESS_BOX_BG}
            timerValue="00:59"
            timerColor={ColorConstants.GREEN_DOT}
            timerBorderColor={ColorConstants.WALLET_BORDER}
          />
          <Text style={style.paymentMethodTxt}>Payment method</Text>
          <View style={style.paymentMethodCardSelected}>
            <Image source={IconConstants.paypal2} style={style.paymentIcon} />
            <Text style={style.paymentTextName}>Paypal</Text>
          </View>
          <CustomButton
            disable={false}
            title="Release funds"
            width={327}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Release funds')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellOrderBuyerMarkAsPaid;
