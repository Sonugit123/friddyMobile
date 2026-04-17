import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import CustomButton from '../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../constants/colorConstants';
import { Fontconstants } from '../../../constants/fontConstants';
import Divider from '../../../components/divider/Divider';

const btnData = [
  {
    id: '1',
    title: 'Sign up with password',
    icon: IconConstants.email,
  },
  {
    id: '2',
    title: 'Link email to Apple',
    icon: IconConstants.appleIcon,
  },
  {
    id: '3',
    title: 'Link email to Google',
    icon: IconConstants.googleIcon,
  },
];

const PresaleClaimFunds = () => {
  const checkBox = false;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.makePaymentView}>
          <Text style={style.makePaymentTxt}>Claim Funds</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.makePaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>
          Funds have been credited to email provided
        </Text>
        <View style={style.transactionComplete}>
          <Text style={style.transactionCompleteTxt}>
            Transaction complete{' '}
          </Text>
          <View style={style.friddyCoinAndTickView}>
            <View style={style.friddyCoinView}>
              <Image
                source={IconConstants.friddyCoin}
                style={style.friddyCoin}
              />
              <Text style={style.friddyCoinTxt}>36.49 FRIDDY</Text>
            </View>
            <Image
              source={IconConstants.depositTick}
              style={style.depositTick}
            />
          </View>
          <View style={style.friddyFeesView}>
            <Text style={style.friddyFeesTxt}>Friddy fees</Text>
            <Text style={style.friddyFeesValue}>$0.15</Text>
          </View>
        </View>
        <Text style={style.sentToTxt}>Sent to</Text>
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

        {checkBox ? (
          <>
            <View style={style.checkYourInboxView}>
              <Text style={style.checkYourInboxTxt}>Check your inbox</Text>
              <Image source={IconConstants.btnCheck} style={style.checkIcon} />
            </View>
            <Text style={style.seeOnBlockExplorerTxt}>
              See on block explorer
            </Text>
          </>
        ) : (
          <View style={style.btnContainer}>
            {btnData.map((item, index) => {
              return (
                <>
                  {index === 1 && <Text style={style.orTxt}>OR</Text>}
                  <View key={item.id} style={[style.btnView,{backgroundColor: index ===1 ? ColorConstants.BLACK : ""}]}>
                    <Image source={item.icon} style={style.btnIcon} />
                    <Text style={[style.btnTxt,{color: index ===1 ? ColorConstants.WHITE : ""}]}>{item.title}</Text>
                  </View>
                </>
              );
            })}
          </View>
        )}
        <Text style={style.newToFriddyTxt}>
          New to friddy ? <Text style={style.signUpTxt}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PresaleClaimFunds;
