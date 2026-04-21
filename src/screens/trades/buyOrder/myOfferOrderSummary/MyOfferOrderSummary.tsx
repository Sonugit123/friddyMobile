import { View, Text, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import PreviewBuyCrypto from '../../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../../constants/colorConstants';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import Clipboard from '@react-native-clipboard/clipboard';
import RNShare, { Social } from 'react-native-share';


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
    </SafeAreaView>
  );
};

export default MyOfferOrderSummary;
