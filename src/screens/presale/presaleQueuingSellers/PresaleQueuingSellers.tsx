import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import PreviewBuyCrypto from '../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const queueImages = [
  IconConstants.queue1,
  IconConstants.queue2,
  //   IconConstants.queue2,
  //   IconConstants.queue3,
  //   IconConstants.more,
];
const PresaleQueuingSellers = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Queuing sellers</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <Text style={style.yourDetailsTxt}>Your details</Text>
      <PreviewBuyCrypto
        headingTxt="John Doe"
        coinValue="$100"
        receiveValue="198.49"
        friddyFees="$0.15"
        bgColor={ColorConstants.SIGNIN_BOX}
        topHeight={8}
      />
      <Text style={style.paymentMethodTxt}>Payment method</Text>
      <View style={style.paymentMethodAndChangeView}>
        <View style={style.paymentMethodAndSellerView}>
          <View style={style.paymentMethodView}>
            <Image
              source={IconConstants.paytm}
              style={style.paymentMethodIcon}
            />
            <Text>Paytm</Text>
          </View>
          <View style={style.sellerView}>
            <Image source={IconConstants.seller} style={style.sellerIcon} />
            <Text style={style.sellerTxt}>200 sellers</Text>
          </View>
        </View>
        <View style={style.changeView}>
          <Text style={style.changeTxt}>Change</Text>
        </View>
      </View>
      <Text style={style.queueTxt}>Queue</Text>
      <View style={style.queueContainer}>
        <View style={style.queueLeftView}>
          {queueImages.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={[style.queueIcon, { left: index * scale(16) }]}
            />
          ))}
        </View>
        <View style={style.queueRightView}>
          <Image
            source={IconConstants.eyeOpenTransaction}
            style={style.eyeIcon}
          />
          <Text style={style.onQueueTxt}>2 On Queue</Text>
        </View>
      </View>
      <CustomButton
        disable={false}
        title="Queuing sellers..."
        bgColor={ColorConstants.SIGNIN_BOX}
        txtColor={ColorConstants.GET_CODE}
        width={343}
        topHeight={24}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Queuing sellers...')}
      />
    </SafeAreaView>
  );
};

export default PresaleQueuingSellers;
