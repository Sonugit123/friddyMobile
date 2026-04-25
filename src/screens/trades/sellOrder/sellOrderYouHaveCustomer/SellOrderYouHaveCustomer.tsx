import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const SellOrderYouHaveCustomer = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* Seller's Information Section */}
          <Text style={style.headingTxt}>You have a customer</Text>
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
          <View style={style.wantToBuyBox}>
            <Text style={style.wantToBuyTxt}>Wants to buy</Text>
            <View style={style.wantToBuyInnerView}>
              <Image
                source={IconConstants.usdcCoin}
                style={style.usdcCoinIcon}
              />
              <Text style={style.coinValueTxt}>44.60 USDC</Text>
            </View>
            <View style={style.buyerFeesView}>
              <Text style={style.buyerFeesTxt}>Buyer pays</Text>
              <Text style={style.buyerFeesValueTxt}>$50.60</Text>
              <Text style={style.buyerFeesTxt}>Fees</Text>
              <Text style={style.buyerFeesValueTxt}>$1.00</Text>
              <Text style={style.buyerFeesTxt}>{'( -1 USDC)'}</Text>
            </View>
          </View>
          <Text style={style.paymentMethodTxt}>Payment method</Text>
          <View style={style.paymentMethodCardSelected}>
            <Image source={IconConstants.paypal2} style={style.paymentIcon} />
            <Text style={style.paymentTextName}>Paypal</Text>
          </View>
          <View style={style.btnContainer}>
            <CustomButton
              disable={false}
              title="Accept"
              bgColor={ColorConstants.BTNCOLOR}
              txtColor={ColorConstants.WHITE}
              width={159}
              topHeight={24}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Accept')}
            />
            <CustomButton
              disable={false}
              title="Decline"
              bgColor={ColorConstants.WARNING_CONTAINER}
              txtColor={ColorConstants.WARNING_TXT}
              width={159}
              topHeight={24}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Decline')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellOrderYouHaveCustomer;
