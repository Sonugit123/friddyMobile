import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { style } from './style';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';
import { ColorConstants } from '../../../constants/colorConstants';

const FrontIdCardReview = () => {
  const isButtonEnabled = true;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <Text style={style.headingTxt}>Front of ID Card</Text>
      <View style={style.photoFrame}>
        <Text>No Photo</Text>
      </View>
      {isButtonEnabled ? (
        <View style={style.emojiAndReviewIdContainer}>
          <Image source={IconConstants.satisfiedEmoji} style={style.sadEmoji} />
          <Text style={style.reviewIdTxt}>Great, Please proceed</Text>
        </View>
      ) : (
        <>
          <View style={style.emojiAndReviewIdContainer}>
            <Image source={IconConstants.sadEmoji} style={style.sadEmoji} />
            <View style={style.reviewIdContainer}>
              <Text style={style.reviewIdTxt}>Please review your ID,</Text>
              <Text style={style.reviewIdSubTxt}>
                Make sure it is well positioned and nothing is cut off.
              </Text>
            </View>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.infoTxt}>
              Center your ID in the frame and we will take the photo
              automatically.
            </Text>
          </View>
        </>
      )}
      <CustomButton
        disable={!isButtonEnabled}
        title="Continue"
        bgColor={
          isButtonEnabled ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG
        }
        txtColor={
          isButtonEnabled ? ColorConstants.WHITE : ColorConstants.VERIFY_BTN_TXT
        }
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue')}
      />
    </SafeAreaView>
  );
};

export default FrontIdCardReview;
