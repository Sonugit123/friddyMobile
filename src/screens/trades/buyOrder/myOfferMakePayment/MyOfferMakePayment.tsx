import { View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import PreviewBuyCryptoWithTimer from '../../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { scale } from '../../../../utils/scale';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const MyOfferMakePayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* Title Section */}
          <View style={style.makePaymentView}>
            <Text style={style.makePaymentTxt}>Make payment</Text>
            <Image
              source={IconConstants.addPaymentMethod}
              style={style.makePaymentIcon}
            />
          </View>
          <Text style={style.subtitleTxt}>
            Please make payment to seller’s details
          </Text>

          {/* Amount Due Card */}
          <PreviewBuyCryptoWithTimer
            headingTxt="Amount Due"
            headingTxtColor={ColorConstants.WARNING_TXT}
            coinValue="$50"
            receiveValue="198.49"
            friddyFees="$0.15"
            topHeight={8}
            bgColor={ColorConstants.WARNING_CONTAINER}
            timerValue="00:00"
            timerColor={ColorConstants.WARNING_TXT}
            timerBorderColor={ColorConstants.PROGRESS_RED_BORDER}
          />

          {/* Dotted Divider */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scale(8),
            }}
          >
            {[...Array(20)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  //   marginRight: scale(6),
                }}
              />
            ))}
          </View>

          {/* Payment Section */}
          <Text style={style.sendToTxt}>Send to</Text>
          <View style={style.paymentMethodRow}>
            <Image source={IconConstants.paytm} style={style.paymentIcon} />
            <Text style={style.paymentNameTxt}>PayTM</Text>
          </View>

          <Text style={style.accountNameTxt}>Account Name</Text>
          <View style={style.accountNameView}>
            <Text style={style.accountName}>Cole Palmer</Text>
            <View style={style.copyIconView}>
              <Image source={IconConstants.copyIcon2} style={style.copyIcon} />
            </View>
          </View>
          <View style={style.accountNoAndRoutingNoContainer}>
            <View style={style.accountNoContainer}>
              <Text style={style.accountNoTxt}>Account no.</Text>
              <View style={style.accountNoView}>
                <Text style={style.accountNo}>1234567890</Text>
                <View style={style.copyIconView}>
                  <Image
                    source={IconConstants.copyIcon2}
                    style={style.copyIcon}
                  />
                </View>
              </View>
            </View>
            <View style={style.accountNoContainer}>
              <Text style={style.accountNoTxt}>Routing n.o</Text>
              <View style={style.accountNoView}>
                <Text style={style.accountNo}>0987654321</Text>
                <View style={style.copyIconView}>
                  <Image
                    source={IconConstants.copyIcon2}
                    style={style.copyIcon}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={style.addressContainer}>
            <Text style={style.addressTxt}>Address</Text>
            <View style={style.addressView}>
              <Text style={style.address}>
                115 Wild Basin Road South, Austin, TX 78746 USA
              </Text>
              <View style={style.copyIconView}>
                <Image
                  source={IconConstants.copyIcon2}
                  style={style.copyIcon}
                />
              </View>
            </View>
          </View>
          {/* Copy details link */}
          <View style={style.copyDetailsView}>
            <Text style={style.copyDetailsTxt}>Copy details</Text>
            <View style={style.copyIconView}>
              <Image source={IconConstants.copyIcon2} style={style.copyIcon} />
            </View>
          </View>

          {/* Footer Buttons */}
          <View style={style.btnContainer}>
            <CustomButton
              disable={false}
              title="Paid"
              bgColor={ColorConstants.BTNCOLOR}
              txtColor={ColorConstants.WHITE}
              width={159}
              topHeight={24}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Paid')}
            />
            <CustomButton
              disable={false}
              title="Cancel"
              bgColor={ColorConstants.WARNING_CONTAINER}
              txtColor={ColorConstants.WARNING_TXT}
              width={159}
              topHeight={24}
              fontsize={14}
              fontfamily={Fontconstants.SEMIBOLD}
              onPress={() => console.log('Cancel')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOfferMakePayment;
