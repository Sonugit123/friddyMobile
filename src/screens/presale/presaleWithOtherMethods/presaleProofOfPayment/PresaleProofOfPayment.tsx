import { View, Text, Image, Animated, Pressable } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const PresaleProofOfPayment = () => {
  // assuming original height is 144 (change if different)
  const widthAnim = useRef(new Animated.Value(327)).current;
  const heightAnim = useRef(new Animated.Value(144)).current;

  const animatePress = () => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: 327,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(heightAnim, {
        toValue: 38,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.makePaymentView}>
          <Text style={style.makePaymentTxt}>Proof of payment</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.makePaymentIcon}
          />
        </View>

        <Text style={style.subHeading}>
          To ensure payment has been made we need a receipt from the transaction
          made
        </Text>

        <PreviewBuyCryptoWithTimer
          headingTxt="Amount Due"
          headingTxtColor={ColorConstants.WARNING_TXT}
          coinValue="$100"
          receiveValue="198.49"
          friddyFees="$0.15"
          bgColor={ColorConstants.WARNING_CONTAINER}
          topHeight={8}
          timerValue="00:00"
          timerBorderColor={ColorConstants.PROGRESS_RED_BORDER}
          timerColor={ColorConstants.WARNING_TXT}
        />

        <Pressable onPress={animatePress}>
          <Animated.View
            style={[
              style.uploadProofView,
              {
                width: widthAnim,
                height: heightAnim,
              },
            ]}
          >
            <View style={style.uploadIconView}>
              <Image
                source={IconConstants.uploadIcon}
                style={style.uploadIcon}
              />
              <Text style={style.uploadTransScriptTxt}>
                Upload transaction receipt
              </Text>
            </View>
          </Animated.View>
        </Pressable>

        <CustomButton
          disable={false}
          title="Submit proof"
          bgColor={ColorConstants.BACKARROWBG}
          txtColor={ColorConstants.GRAY_LABEL}
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Submit proof')}
        />
      </View>
    </SafeAreaView>
  );
};

export default PresaleProofOfPayment;