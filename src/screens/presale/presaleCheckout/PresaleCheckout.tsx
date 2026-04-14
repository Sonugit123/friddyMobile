import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';

const DURATION_DATA = [
  {
    num: '0',
    label: 'DYs',
  },
  {
    num: '0',
    label: 'HRs',
  },
  {
    num: '0',
    label: 'MINs',
  },
  {
    num: '0',
    label: 'SECs',
  },
];

const paymentMethod = [
  {
    id: '1',
    name: 'Kuda',
    icon: IconConstants.kudaIcon,
  },
  {
    id: '2',
    name: 'Opay',
    icon: IconConstants.opayIcon,
  },
  {
    id: '3',
    name: 'Grey',
    icon: IconConstants.greyPay,
  },
  {
    id: '4',
    name: 'Wise',
    icon: IconConstants.wise,
  },
  {
    id: '5',
    name: 'Paypal',
    icon: IconConstants.paypal,
  },
  {
    id: '6',
    name: 'Payoneer',
    icon: IconConstants.payoneer,
  },
  {
    id: '7',
    name: 'CashApp',
    icon: IconConstants.cashApp,
  },
  {
    id: '8',
    name: 'Venmo',
    icon: IconConstants.venmo,
  },
];

const cryptoImg = [
  IconConstants.bitcoin,
  IconConstants.usdcCoin,
  IconConstants.ethCoin,
];

const PresaleCheckout = () => {
  const [isFocused, setIsFocused] = useState(false);

  const queueImages = [
    IconConstants.paypal2,
    IconConstants.wise,
    IconConstants.venmo,
  ];

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <BackHeader />
          <Image
            source={IconConstants.friddyCoin}
            style={style.friddyCoinImg}
          />
          <Text style={style.friddyPresaleTxt}>Friddy Presale</Text>
          <Text style={style.participateTxt}>
            Participate in friddy presale
          </Text>
          <View style={style.friddyBox}>
            <Text>1 FRIDDY</Text>
            <Text>=</Text>
            <Text>$ 3.0646</Text>
          </View>
          <Text style={style.nextPriceIncreaseTxt}>Next price increase in</Text>
          <View style={style.durationContainer}>
            {DURATION_DATA.map((item, index) => (
              <View key={index} style={style.durationBox}>
                <Text style={style.durationNumTxt}>{item.num}</Text>
                <Text style={style.durationTxt}>{item.label}</Text>
              </View>
            ))}
          </View>
          <Text style={style.inputAmountTxt}>Input Amount</Text>
          {/* <TextInput style={style.inputAmountBox} placeholder="0" /> */}
          <View>
            <TextInput
              style={[
                style.inputBox,
                isFocused && { borderColor: ColorConstants.BTNCOLOR },
              ]}
              // placeholder={placeholder}
              // placeholderTextColor={ColorConstants.GRAY_LABEL}
              // onChangeText={onChangeText}
              // value={value}
              // secureTextEntry={password}
              // keyboardType={keyboardType}
              // autoCapitalize={autoCapitalize}
              // onFocus={() => setIsFocused(true)}
              // onBlur={() => setIsFocused(false)}
            />
            <View style={style.dollarIconView}>
              <Text style={style.dollarTxt}>$</Text>
            </View>
            <View style={style.inputFriddyLogoAndTxt}>
              <Image
                source={IconConstants.friddyCoin}
                style={style.friddyLogoImg}
              />
              <Text style={style.inputFriddyTxt}>Friddy</Text>
            </View>
          </View>
          <Text style={style.payWithTxt}>Pay with </Text>
          <View style={style.searchOtherMethodView}>
            <View style={style.payIconView}>
              {queueImages.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={[
                    style.payIcon,

                    {
                      marginLeft: index === 0 ? 0 : -scale(4),
                      zIndex: queueImages.length + index,
                    },
                  ]}
                />
              ))}
              <Text style={style.searchOtherMethodTxt}>
                Search other methods
              </Text>
            </View>
            <Image
              source={IconConstants.arrowRightIcon}
              style={style.arrowRightIcon}
            />
          </View>
          <View style={style.paymentMethodContainer}>
            {paymentMethod.map((item, index) => (
              <View key={index} style={style.paymentMethodView}>
                <Image source={item.icon} style={style.paymentMethodIcon} />
                <Text style={style.paymentMethodTxt}>{item.name}</Text>
              </View>
            ))}
          </View>
          <Text style={style.orPayWithTxt}>Or pay with</Text>
          <View style={style.searchOtherMethodView}>
            <View style={style.payIconView}>
              {cryptoImg.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={[
                    style.payIcon,

                    {
                      marginLeft: index === 0 ? 0 : -scale(4),
                      zIndex: cryptoImg.length + index,
                    },
                  ]}
                />
              ))}
              <Text style={style.searchOtherMethodTxt}>
                Search other methods
              </Text>
            </View>
            <Image
              source={IconConstants.arrowRightIcon}
              style={style.arrowRightIcon}
            />
          </View>
          <View style={style.checkBoxView}>
            <Image
              source={IconConstants.checkBoxFill}
              style={style.checkBoxFill}
            />
            <Text>
              Read our{' '}
              <Text style={style.privacyPolicyTxt}>Privacy Policy</Text> &{' '}
              <Text style={style.privacyPolicyTxt}>terms and conditions</Text>
            </Text>
          </View>
          <View style={style.poweredByContainer}>
            <Text style={style.poweredByTxt}>Powered by</Text>
            <Image source={IconConstants.friddyLogo} style={style.friddyLogo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresaleCheckout;
