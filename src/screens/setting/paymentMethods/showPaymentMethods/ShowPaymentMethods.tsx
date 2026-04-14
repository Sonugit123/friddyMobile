import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import CustomButton from '../../../../components/customButton/CustomButton';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';
import { scale } from '../../../../utils/scale';

const ShowPaymentMethods = () => {
  const paymentMethodExist = false;
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Payment Methods</Text>
        {paymentMethodExist ? (
          <Text style={style.subHeading}>
            You have no payment methods current added
          </Text>
        ) : (
          <>
            <Text style={style.subHeading}>Manage your payment methods</Text>
            <View style={style.paymentMethodContainer}>
              <View style={style.paymentMethodRow}>
                <View style={style.bankContainer}>
                  <Image
                    source={IconConstants.bankTransfer}
                    style={style.bankIcon}
                  />
                  <Text style={style.bankName}>Bank Transfer ( ACH )</Text>
                </View>
                <Image source={IconConstants.trash} style={style.trashIcon} />
              </View>

              <View style={style.paymentMethodRow}>
                <Text style={style.accountNumberTxt}>Account N.O - </Text>
                <Text style={style.accountNumberTxt}>1234567890</Text>
              </View>

              <View style={style.paymentMethodRow}>
                <Text style={style.accountNumberTxt}>Routing N.O - </Text>
                <Text style={style.accountNumberTxt}>1234567890</Text>
              </View>

              <View style={style.lastRow}>
                <Text style={style.accountNumberTxt}>Legal address - </Text>
                <Text
                  style={[
                    style.accountNumberTxt,
                    { width: scale(159), textAlign: 'right' },
                  ]}
                >
                  101 W Jackson Blvd, Chicago, Illinois , USA
                </Text>
              </View>
            </View>
            <View style={style.paymentMethodContainer}>
              <View style={style.paymentMethodRow}>
                <View style={style.bankContainer}>
                  <Image
                    source={IconConstants.bankTransfer}
                    style={style.bankIcon}
                  />
                  <Text style={style.bankName}>Bank Transfer ( WIRE )</Text>
                </View>
                <Image source={IconConstants.trash} style={style.trashIcon} />
              </View>

              <View style={style.paymentMethodRow}>
                <Text style={style.accountNumberTxt}>Account Name - </Text>
                <Text style={style.accountNumberTxt}>John Doe</Text>
              </View>

              <View style={style.paymentMethodRow}>
                <Text style={style.accountNumberTxt}>Bank Name - </Text>
                <Text style={style.accountNumberTxt}>DVn Investment Bank</Text>
              </View>

              <View style={style.paymentMethodRow}>
                <Text style={style.accountNumberTxt}>IBAN - </Text>
                <Text style={style.accountNumberTxt}>
                  DE68500105178297336485
                </Text>
              </View>

              <View style={style.lastRow}>
                <Text style={style.accountNumberTxt}>SWIFT CODE - </Text>
                <Text style={style.accountNumberTxt}>UNAFNGLA098</Text>
              </View>
            </View>
          </>
        )}
        <CustomButton
          disable={false}
          title="Add Payment Method"
          rightImage={IconConstants.plus}
          iconColor={ColorConstants.WHITE}
          imageSize={18}
          width={343}
          topHeight={16}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Add Payment Method')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShowPaymentMethods;
