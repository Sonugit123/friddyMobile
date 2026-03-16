import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import PreviewBuyCrypto from '../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../constants/colorConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import { scale } from '../../../utils/scale';

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

const queueImages = [
  IconConstants.queue1,
  IconConstants.queue2,
  IconConstants.queue2,
  IconConstants.queue3,
  IconConstants.more,
];
const SellerInformation = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.sellerInformationTxt}>Seller’s information</Text>
        <View style={style.sellerInformationContainer}>
          <View style={style.sellerInformationLeftView}>
            <Text style={style.sellerTxt}>JD</Text>
          </View>
          <View style={style.sellerInformationRightView}>
            <View style={style.sellerNameView}>
              <Text style={style.sellerNameTxt}>John Doe</Text>
              <Image
                source={IconConstants.verifiedBadge}
                style={style.verifiedBadgeIcon}
              />
            </View>
            <Text style={style.sellerIdTxt}>FriddyID : 1234567890</Text>
          </View>
        </View>
        <View style={style.sellerDetailsContainer}>
          {sellerInformationData.map(item => (
            <View style={style.sellerDetailView}>
              <Image source={item.icon} style={style.starIcon} />
              <Text style={style.starTxt}>{item.txt}</Text>
            </View>
          ))}
        </View>
        <Text style={style.paymentMethodTxt}>Seller’s payment method</Text>
        <View style={style.paymentMethodView}>
          <Image source={IconConstants.paypal2} style={style.paypalIcon} />
          <Text style={style.paypalTxt}>PayPal</Text>
        </View>
        <PreviewBuyCrypto
          headingTxt="John Doe"
          coinValue="$200"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={16}
        />
        <Text style={style.queueTxt}>Queue</Text>
        <View style={style.queueContainer}>
          <View style={style.queueLeftView}>
            {/* <Image source={IconConstants.queue1} style={style.queue1Icon} />
            <Image source={IconConstants.queue2} style={style.queue2Icon} />
            <Image source={IconConstants.queue2} style={style.queue3Icon} />
            <Image source={IconConstants.queue3} style={style.queue4Icon} />
            <Image source={IconConstants.more} style={style.queue5Icon} /> */}
            {queueImages.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={[
                  style.queueIcon,
                  { left: index * scale(16)},
                ]}
              />
            ))}
          </View>
          <View style={style.queueRightView}>
            <Image
              source={IconConstants.eyeOpenTransaction}
              style={style.eyeIcon}
            />
            <Text style={style.onQueueTxt}>4 others in Queue</Text>
          </View>
        </View>
        <View style={style.btnContainer}>
          <CustomButton
            disable={false}
            title="Accept seller"
            bgColor={ColorConstants.BTNCOLOR}
            txtColor={ColorConstants.WHITE}
            width={159}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Accept seller')}
          />
          <CustomButton
            disable={false}
            title="Next seller"
            bgColor={ColorConstants.SIGNIN_BOX}
            txtColor={ColorConstants.BTNCOLOR}
            width={159}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Next seller')}
          />
        </View>
        <Text style={style.cancelTxt}>Cancel Transaction</Text>
      </View>
    </SafeAreaView>
  );
};

export default SellerInformation;
