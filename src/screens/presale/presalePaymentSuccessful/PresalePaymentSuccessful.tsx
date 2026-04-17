import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import PreviewMoney from '../../../components/previewMoney/PreviewMoney';
import { ColorConstants } from '../../../constants/colorConstants';
import { Fontconstants } from '../../../constants/fontConstants';
import CustomButton from '../../../components/customButton/CustomButton';

const PresalePaymentSuccessful = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.makePaymentView}>
          <Text style={style.makePaymentTxt}>Payment successful</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.makePaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>
          Funds have been credited to your account
        </Text>
        <PreviewMoney
          headingTxt="Sent to wallet"
          headingTxtColor={ColorConstants.BTNCOLOR}
          coinValue="36.49 FRIDDY"
          dollarValue="$200"
          friddyFees="$0.15"
          topHeight={24}
          coinIcon={IconConstants.friddyCoin}
          bgColor={ColorConstants.SIGNIN_BOX}
        />
        <Text style={style.sentToTxt}>Account details</Text>
        <View style={style.profileIconAndNameView}>
          <View style={style.profileIconView}>
            <Text style={style.profileIconTxt}>JO</Text>
          </View>
          <Text style={style.profileNameTxt}>John Doe</Text>
        </View>
        <View style={style.profileIconAndNameView}>
          <View style={style.profileIconView}>
            <Image source={IconConstants.email} style={style.emailIcon} />
          </View>
          <Text style={style.profileNameTxt}>John@gmail.com</Text>
        </View>
        <CustomButton
          disable={false}
          title="Open dashboard"
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Open dashboard')}
        />
        <CustomButton
          disable={false}
          title="Invite to earn"
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          rightImage={IconConstants.inviteToEarn}
          imageSize={18}
          width={327}
          topHeight={8}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Invite to earn')}
        />
        <Text style={style.seeOnBlockExplorerTxt}>See on block explorer</Text>
      </View>
    </SafeAreaView>
  );
};

export default PresalePaymentSuccessful;
