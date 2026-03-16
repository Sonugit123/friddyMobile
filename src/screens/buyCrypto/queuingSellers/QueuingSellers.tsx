import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { style } from './style';
import PreviewBuyCrypto from '../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../constants/colorConstants';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const QueuingSellers = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.queuingSellersView}>
          <Text style={style.queuingSellersTxt}>Queuing sellers</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.queuingSellersIcon}
          />
        </View>
        <Text style={style.yourDetailsTxt}>Your details</Text>
        <PreviewBuyCrypto
          headingTxt="John Doe"
          coinValue="$200"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.SIGNIN_BOX}
          topHeight={8}
        />
        <Text style={style.paymentMethodTxt}>Payment method</Text>
        <View style={style.paymentMethodContainer}>
          <View style={style.paymentMethodLeftView}>
            <View style={style.paymentMethodView}>
              <Image
                source={IconConstants.paytm}
                style={style.paymentMethodIcon}
              />
              <Text style={style.paytmTxt}>Paytm</Text>
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
            <Image source={IconConstants.queue1} style={style.queue1Icon} />
            <Image source={IconConstants.queue2} style={style.queue2Icon} />
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
          txtColor={ColorConstants.BTNCOLOR}
          imageSize={20}
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Buy Crypto')}
        />
      </View>
    </SafeAreaView>
  );
};

export default QueuingSellers;
