import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import PreviewBuyCrypto from '../../../../components/previewBuyCrypto/PreviewBuyCrypto';
import { ColorConstants } from '../../../../constants/colorConstants';
import InputBox from '../../../../components/inputBox/InputBox';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const PresaleProvideDetails = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Provide details</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <PreviewBuyCrypto
        headingTxt="John Doe"
        coinValue="$100"
        receiveValue="198.49"
        friddyFees="$0.15"
        bgColor={ColorConstants.SIGNIN_BOX}
        topHeight={24}
      />
      <Text style={style.paymentMethodTxt}>Payment method</Text>
      <View style={style.paymentMethodAndChangeView}>
        <View style={style.paymentMethodAndSellerView}>
          <View style={style.paymentMethodView}>
            <Image
              source={IconConstants.paypal}
              style={style.paymentMethodIcon}
            />
            <Text>Paypal</Text>
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
      <InputBox
        placeholder={'Full name'}
        label="Full name"
        keyboardType="default"
        autoCapitalize="none"
        value="Jon doe"
        topHeight={24}
      />
      <InputBox
        placeholder={'Email'}
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value="Jon@gmail.com"
        topHeight={16}
      />
      <CustomButton
        disable={false}
        title="Continue to buy"
        width={343}
        topHeight={24}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue to buy')}
      />
      <Text style={style.existingUserTxt}>
        Existing user ? <Text style={style.loginTxt}>Login</Text>
      </Text>
    </SafeAreaView>
  );
};

export default PresaleProvideDetails;
