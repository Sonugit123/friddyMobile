import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import { style } from './style';
import PreviewBuyCryptoWithTimer from '../../../components/previewBuyCryptoWithTimer/PreviewBuyCryptoWithTimer';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const PresaleMakePayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <View style={style.makePaymentView}>
          <Text style={style.makePaymentTxt}>Make Payment</Text>
          <Image
            source={IconConstants.addPaymentMethod}
            style={style.makePaymentIcon}
          />
        </View>
        <Text style={style.subHeading}>
          Please make payment to seller’s details
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

        <View style={{ flexDirection: 'row', marginTop: scale(8) }}>
          {[...Array(20)].map((_, i) => (
            <View
              key={i}
              style={{
                width: 12,
                height: 1,
                backgroundColor: '#ccc',
                marginRight: 6,
              }}
            />
          ))}
        </View>
        <Text style={style.sendToTxt}>Send to</Text>
        <View style={style.paytmView}>
          <Image source={IconConstants.paypal2} style={style.paytmIcon} />
          <Text style={style.paytmTxt}>PayPal</Text>
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
              <Image source={IconConstants.copyIcon2} style={style.copyIcon} />
            </View>
          </View>
        </View>

        <View style={style.copyDetailsView}>
          <Text style={style.copyDetailsTxt}>Copy details</Text>
          <View style={style.copyIconView}>
            <Image source={IconConstants.copyIcon2} style={style.copyIcon} />
          </View>
        </View>
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

        {/* --------------------------------------------------------*/}
        {/* <View style={{ flexDirection: 'row', marginTop: scale(8) }}>
          {[...Array(20)].map((_, i) => {
            return (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginRight: i == 18 ? scale(6) : scale(5),
                }}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                }}
              />
            ))}
          </View>
          <View>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                  marginLeft: scale(i * 6),
                }}
              />
            ))}
          </View>
          <View style={{flex: 1}}>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                }}
              />
            ))}
          </View>
          <View >
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                }}
              />
            ))}
          </View>
          <View>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                  marginLeft: scale(i * 6),
                }}
              />
            ))}
          </View>
          <View>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginTop: scale(6),
                }}
              />
            ))}
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: scale(0) }}>
          {[...Array(20)].map((_, i) => {
            return (
              <View
                key={i}
                style={{
                  width: scale(12),
                  height: scale(1),
                  backgroundColor: '#ccc',
                  marginRight: i == 18 ? scale(6) : scale(5),
                }}
              />
            );
          })}
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default PresaleMakePayment;
