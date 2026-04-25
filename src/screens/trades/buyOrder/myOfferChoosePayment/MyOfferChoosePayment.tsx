import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';
import SearchBar from '../../../../components/searchBar/SearchBar';
import { scale } from '../../../../utils/scale';
import SocialShare from '../../../../components/socialShare/SocialShare';

const PAYMENT_METHODS = [
  { id: 1, name: 'Paypal', icon: IconConstants.paypal },
  { id: 2, name: 'Venmo', icon: IconConstants.venmo },
  { id: 3, name: 'Kuda microfinance bank', icon: IconConstants.kudaIcon },
  { id: 4, name: 'Wise', icon: IconConstants.wise },
  { id: 5, name: 'PayTm', icon: IconConstants.paytm },
];



const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const MyOfferChoosePayment = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    number | null
  >(null);

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

          {/* Selected Token Section */}
          <Text style={style.chooseTokenTitle}>Choose a token</Text>
          <View style={[style.tokenCard, style.tokenCardSelected]}>
            <Image source={IconConstants.usdcCoin} style={style.coinIcon} />
            <View style={style.tokenDetailsMiddle}>
              <Text style={style.tokenMainText}>100 USDC</Text>
              <Text style={style.tokenSubText}>$101.00</Text>
            </View>
            <View style={style.tokenDetailsRight}>
              <View style={style.tokenRightTextGroup}>
                <Text style={style.tokenRightTopText}>$ 1.12 per USDC</Text>
                <Text style={style.tokenRightBottomText}>Profit $112</Text>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={style.crossMarkBox}>
                <Image
                  source={IconConstants.modalCross}
                  style={style.crossMarkIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Choose Payment Method Section */}
          <Text style={style.choosePaymentTitle}>Choose a payment method</Text>
          <SearchBar
            placeholder="Search over 300+ methods"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
            <View style={{marginTop: scale(8)}}/>
          {PAYMENT_METHODS.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                style.paymentMethodCard,
                selectedPaymentMethod === method.id &&
                  style.paymentMethodCardSelected,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedPaymentMethod(method.id)}
            >
              <Image source={method.icon} style={style.paymentIcon} />
              <Text style={style.paymentText}>{method.name}</Text>
            </TouchableOpacity>
          ))}

          {/* Buy Button Placeholder */}
          <CustomButton
            disable={false}
            title="Buy"
            bgColor={ColorConstants.BACKARROWBG}
            txtColor={ColorConstants.GRAY_LABEL}
            width={327}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Buy')}
          />

          {/* Share Section */}
          <SocialShare
            shareUrl="https://friddy.com/seller/1234567890"
            shareText="Check out this seller on Friddy!"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOfferChoosePayment;
