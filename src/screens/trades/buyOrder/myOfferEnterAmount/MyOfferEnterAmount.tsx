import {
  View,
  Text,
  ScrollView,
  Image,
  Share,
  FlatList,
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
import Clipboard from '@react-native-clipboard/clipboard';
import RNShare, { Social } from 'react-native-share';

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const SHARE_OPTIONS = [
  { id: 'copy', label: 'Copy', icon: IconConstants.copyIcon2, isPill: true },
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    icon: IconConstants.whatsApp,
    isPill: false,
  },
  { id: 'x', label: 'X', icon: IconConstants.xIcon, isPill: false },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: IconConstants.telegram,
    isPill: false,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: IconConstants.messenger,
    isPill: false,
  },
  { id: 'more', label: 'More', icon: IconConstants.xIcon, isPill: true },
];

const handleShare = async (id: string) => {
  const shareUrl = 'https://friddy.com/seller/1234567890';
  const shareText = 'Check out this seller on Friddy!';
  const shareOptions = {
    title: 'Share Seller',
    message: shareText,
    url: shareUrl,
  };

  try {
    switch (id) {
      case 'copy':
        Clipboard.setString(`${shareText} ${shareUrl}`);
        break;
      case 'whatsapp':
        await RNShare.shareSingle({ ...shareOptions, social: Social.Whatsapp });
        break;
      case 'x':
        await RNShare.shareSingle({ ...shareOptions, social: Social.Twitter });
        break;
      case 'telegram':
        await RNShare.shareSingle({ ...shareOptions, social: Social.Telegram });
        break;
      case 'facebook':
        await RNShare.shareSingle({ ...shareOptions, social: Social.Facebook });
        break;
      case 'more':
        await Share.share({ message: `${shareText} ${shareUrl}` });
        break;
      default:
        break;
    }
  } catch (error: any) {
    console.log('Error sharing:', error?.message);
  }
};

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

          <View style={style.shareTitleRow}>
            <Text style={style.shareTitle}>Share</Text>
            <Image source={IconConstants.downArrow} style={style.downArrow} />
          </View>

          <FlatList
            data={SHARE_OPTIONS}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.shareItemsRow}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={style.shareItemContainer}
                onPress={() => handleShare(item.id)}
                activeOpacity={0.8}
              >
                {item.isPill ? (
                  <View style={style.shareIconBox}>
                    <Image source={item.icon} style={style.shareIconInner} />
                  </View>
                ) : (
                  <Image source={item.icon} style={style.shareIcon} />
                )}
                <Text style={style.shareText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOfferEnterAmount;
