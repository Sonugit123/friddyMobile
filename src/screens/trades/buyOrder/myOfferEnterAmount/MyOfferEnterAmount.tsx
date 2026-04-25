import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import InputBoxTwoLabel from '../../../../components/inputBoxTwoLabel/InputBoxTwoLabel';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import SocialShare from '../../../../components/socialShare/SocialShare';

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const MyOfferEnterAmount = () => {
  const [amount, setAmount] = useState('');
  const isAmountValid = Number(amount) > 0;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* Seller's Information Section */}
          <Text style={style.sellerInformationTxt}>Seller’s information</Text>
          <View style={style.sellerInformationContainer}>
            <View style={style.sellerInformationLeftView}>
              <Text style={style.sellerTxt}>CP</Text>
            </View>
            <View style={style.sellerInformationRightView}>
              <View style={style.sellerNameView}>
                <Text style={style.sellerNameTxt}>Cole Palmer</Text>
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
          <InputBoxTwoLabel
            label="Enter amount"
            rightLabel="100 USDC Available"
            rightLabelColor={ColorConstants.GRAY_LABEL}
            topHeight={8}
            keyboardType="numeric"
            autoCapitalize="none"
            value={amount}
            onChangeText={setAmount}
          />
          <View style={style.youAreReceivingRow}>
            <View style={style.youAreReceivingLeftView}>
              <Text style={style.youAreReceivingTxt}>You are receiving</Text>
              <Image source={IconConstants.infoIcon} style={style.infoIcon} />
            </View>
            <Text style={style.youAreReceivingRightTxt}>0 USDC</Text>
          </View>
          <Text style={style.paymentMethodTxt}>Payment method</Text>
          <View style={style.paymentMethodCardSelected}>
            <Image source={IconConstants.paypal} style={style.paymentIcon} />
            <Text style={style.paymentTextName}>Paypal</Text>
          </View>
          <CustomButton
            disable={!isAmountValid}
            title="Buy"
            bgColor={
              isAmountValid
                ? ColorConstants.BTNCOLOR
                : ColorConstants.BACKARROWBG
            }
            txtColor={
              isAmountValid ? ColorConstants.WHITE : ColorConstants.GRAY_Heading
            }
            width={327}
            topHeight={180}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Buy Pressed')}
          />

          <SocialShare
            shareUrl="https://friddy.com/seller/1234567890"
            shareText="Check out this seller on Friddy!"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOfferEnterAmount;
