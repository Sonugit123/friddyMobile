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
import SocialShare from '../../../../components/socialShare/SocialShare';

const TOKENS = [
  {
    id: 1,
    name: '100 USDC',
    price: '$101.00',
    rate: '$ 1.12 per USDC',
    profit: 'Profit $112',
    icon: IconConstants.usdcCoin,
  },
  {
    id: 2,
    name: '100 Bitcoin',
    price: '$101.00',
    rate: '$ 1.12 per Bitcoin',
    profit: 'Profit $112',
    icon: IconConstants.bitcoin,
  },
  {
    id: 3,
    name: '100 USDT',
    price: '$101.00',
    rate: '$ 1.12 per USDC',
    profit: 'Profit $112',
    icon: IconConstants.usdtCoin,
  },
  {
    id: 4,
    name: '100 ETH',
    price: '$101.00',
    rate: '$ 1.12 per USDC',
    profit: 'Profit $112',
    icon: IconConstants.ethCoin,
  },
];



const sellerInformationData = [
  {
    id: '1',
    icon: IconConstants.star,
    txt: '4.5',
  },
  {
    id: '2',
    icon: IconConstants.timer,
    txt: '5 Secs',
  },
  {
    id: '3',
    icon: IconConstants.cart,
    txt: '1.8k USDC',
  },
  {
    id: '4',
    icon: IconConstants.btnCheck,
    txt: '90%',
  },
];
const MyOfferChooseToken = () => {
  const [selectedTokenId, setSelectedTokenId] = useState<number>(1);

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

          {/* Choose Token Section */}
          <Text style={style.chooseTokenTitle}>Choose a token</Text>
          {TOKENS.map(token => (
            <TouchableOpacity
              key={token.id}
              style={[
                style.tokenCard,
                selectedTokenId === token.id
                  ? style.tokenCardSelected
                  : style.tokenCardUnselected,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedTokenId(token.id)}
            >
              <Image source={token.icon} style={style.coinIcon} />
              <View style={style.tokenDetailsMiddle}>
                <Text style={style.tokenMainText}>{token.name}</Text>
                <Text style={style.tokenSubText}>{token.price}</Text>
              </View>
              <View style={style.tokenDetailsRight}>
                <Text style={style.tokenRightTopText}>{token.rate}</Text>
                <Text style={style.tokenRightBottomText}>{token.profit}</Text>
              </View>
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

export default MyOfferChooseToken;
