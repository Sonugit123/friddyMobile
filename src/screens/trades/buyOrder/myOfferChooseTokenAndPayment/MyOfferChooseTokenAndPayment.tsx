import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Share,
  FlatList,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';
import RNShare, { Social } from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';

const SHARE_OPTIONS = [
  { id: 'copy', label: 'Copy', icon: IconConstants.copyIcon2, isPill: true },
  { id: 'whatsapp', label: 'Whatsapp', icon: IconConstants.whatsApp, isPill: false },
  { id: 'x', label: 'X', icon: IconConstants.xIcon, isPill: false },
  { id: 'telegram', label: 'Telegram', icon: IconConstants.telegram, isPill: false },
  { id: 'facebook', label: 'Facebook', icon: IconConstants.messenger, isPill: false },
  { id: 'more', label: 'More', icon: IconConstants.xIcon, isPill: true },
];

const sellerInformationData = [
  { id: '1', icon: IconConstants.star, txt: '4.5' },
  { id: '2', icon: IconConstants.timer, txt: '5 Secs' },
  { id: '3', icon: IconConstants.cart, txt: '1.8k USDC' },
  { id: '4', icon: IconConstants.btnCheck, txt: '90%' },
];

const MyOfferChooseTokenAndPayment = () => {

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
                <Image source={IconConstants.verifiedBadge} style={style.verifiedBadgeIcon} />
              </View>
              <Text style={style.sellerIdTxt}>
                FriddyID : <Text style={style.FriddyIdUnderline}>1234567890</Text>
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
                 <Image source={IconConstants.modalCross} style={style.crossMarkIcon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Selected Payment Method Section */}
          <Text style={style.choosePaymentTitle}>Choose a payment method</Text>
          <View style={style.paymentMethodCardSelected}>
             <Image source={IconConstants.paypal} style={style.paymentIcon} />
             <Text style={style.paymentTextName}>Paypal</Text>
             <TouchableOpacity activeOpacity={0.8} style={style.crossMarkBox}>
                <Image source={IconConstants.modalCross} style={style.crossMarkIcon} />
             </TouchableOpacity>
          </View>

            <CustomButton
              disable={false}
              title="Buy"
              bgColor={ColorConstants.BTNCOLOR}
              txtColor={ColorConstants.WHITE}
              width={327}
              topHeight={180}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Buy Pressed')}
            />

          {/* Share Section */}
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

export default MyOfferChooseTokenAndPayment;