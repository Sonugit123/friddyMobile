import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import BackHeader from '../../components/backHeader/BackHeader';
import { IconConstants } from '../../constants/iconConstants';
import { style } from './style';
import ToggleSwitch from 'toggle-switch-react-native';
import { ColorConstants } from '../../constants/colorConstants';
import CustomButton from '../../components/customButton/CustomButton';
import { Fontconstants } from '../../constants/fontConstants';

const SellCrypto = () => {
  const [selectedPayments, setSelectedPayments] = useState<number[]>([]);
  const [selectedCommunication, setSelectedCommunication] = useState<number>();

  const togglePayment = (id: number) => {
    setSelectedPayments(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const toggleCommunication = (id: number) => {
    setSelectedCommunication(id);
  };

  const paymentMethodData = [
    {
      id: 1,
      name: 'Kuda',
      icon: IconConstants.kudaIcon,
    },
    {
      id: 2,
      name: 'UBA',
      icon: IconConstants.ubaIcon,
    },
    {
      id: 3,
      name: 'Wise',
      icon: IconConstants.wise,
    },
    {
      id: 4,
      name: 'PayPal',
      icon: IconConstants.paypal2,
    },
    {
      id: 5,
      name: 'Payoneer',
      icon: IconConstants.payoneer,
    },
  ];

  const communicationMethodData = [
    {
      id: 1,
      name: 'Whatsapp',
      icon: IconConstants.whatsApp,
    },
    {
      id: 2,
      name: 'Telegram',
      icon: IconConstants.telegram,
    },
    {
      id: 3,
      name: 'Mail',
      icon: IconConstants.mail2,
    },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Sell crypto</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <Text style={style.setupInfoTxt}>Setup information</Text>
      <Text style={style.accountDetailsTxt}>Account details</Text>
      <View style={style.profileIconAndNameAndFriddyIdView}>
        <View style={style.profileIconView}>
          <Text style={style.profileIconTxt}>CP</Text>
        </View>
        <View style={style.nameAndFriddyIdView}>
          <View style={style.nameContainer}>
            <Text style={style.nameTxt}>Cole Palmer</Text>
            <Image
              source={IconConstants.verifiedBadge}
              style={style.verifiedBadgeIcon}
            />
          </View>
          <View style={style.friddyIdRow}>
            <Text style={style.friddyIdTxt}>
              FriddyID : <Text style={style.friddyIdValueTxt}>1234567890</Text>
            </Text>
            <Image source={IconConstants.copyIcon2} style={style.copyIcon} />
          </View>
        </View>
      </View>
      <View style={style.switchBtnView}>
        <Text style={style.switchBtnTxt}>
          Hide your Seller name and friddy ID
        </Text>
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor={ColorConstants.SIGNIN_BOX}
          size="medium"
          thumbOnStyle={{ backgroundColor: ColorConstants.WHITE }}
          thumbOffStyle={{ backgroundColor: ColorConstants.QR_BOX_BG }}
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View style={style.addPaymentMethodRowView}>
        <Text style={style.addPaymentMethodTxt}>Add your payment methods</Text>
        <Image source={IconConstants.infoIcon} style={style.infoIcon} />
      </View>
      <View style={style.paymentMethodContainer}>
        {paymentMethodData.map(item => {
          const isSelected = selectedPayments.includes(item.id);
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                style.paymentMethodView,
                {
                  backgroundColor: isSelected
                    ? ColorConstants.BTNCOLOR
                    : ColorConstants.WHITE,
                },
              ]}
              onPress={() => togglePayment(item.id)}
            >
              <View style={style.paymentMethodIconAndNameView}>
                <Image source={item.icon} style={style.paymentMethodIcon} />
                <Text style={style.paymentMethodNameTxt}>{item.name}</Text>
              </View>
              {isSelected ? (
                <View style={style.crossIconView}>
                  <Image
                    source={IconConstants.cancel}
                    style={style.crossIcon}
                  />
                </View>
              ) : (
                <View style={style.plusIconView}>
                  <Image source={IconConstants.plus} style={style.plusIcon} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
        <View style={style.searchMoreView}>
          <Image source={IconConstants.search} style={style.searchIcon} />
          <Text style={style.searchMoreTxt}>Search more</Text>
        </View>
      </View>
      <View style={style.addPaymentMethodRowView}>
        <Text style={style.addPaymentMethodTxt}>Add communication methods</Text>
      </View>
      <View style={style.paymentMethodContainer}>
        {communicationMethodData.map(item => {
          const isSelected = selectedCommunication === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                style.paymentMethodView,
                {
                  backgroundColor: isSelected
                    ? ColorConstants.BTNCOLOR
                    : ColorConstants.WHITE,
                },
              ]}
              onPress={() => toggleCommunication(item.id)}
            >
              <View style={style.paymentMethodIconAndNameView}>
                <Image source={item.icon} style={style.paymentMethodIcon} />
                <Text style={style.paymentMethodNameTxt}>{item.name}</Text>
              </View>
              {!isSelected && (
                <View style={style.plusIconView}>
                  <Image source={IconConstants.plus} style={style.plusIcon} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <CustomButton
        disable={selectedPayments.length === 0}
        title="Choose crypto to sell"
        // bgColor={ColorConstants.BACKARROWBG}
        // txtColor={ColorConstants.GRAY_LABEL}
        bgColor={
          selectedPayments.length > 0 && selectedCommunication !== undefined
            ? ColorConstants.BTNCOLOR
            : ColorConstants.BACKARROWBG
        }
        txtColor={
          selectedPayments.length > 0 && selectedCommunication !== undefined
            ? ColorConstants.WHITE
            : ColorConstants.GRAY_LABEL
        }
        width={343}
        topHeight={32}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Choose crypto to sell')}
      />
    </SafeAreaView>
  );
};

export default SellCrypto;
