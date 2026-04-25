import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import { ColorConstants } from '../../../../constants/colorConstants';

const SellOrderTransactionSuccessful = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        {/* Seller's Information Section */}
        <Text style={style.headingTxt}>Transaction successful</Text>
        <Text style={style.subHeading}>
          Check your balance in the dashboard
        </Text>
        <View style={style.sentView}>
          <Text style={style.sentTxt}>Sent </Text>
          <View style={style.usdcIconRow}>
            <View style={style.usdcIconView}>
              <Image source={IconConstants.usdcCoin} style={style.usdcIcon} />
              <Text style={style.usdcTxt}>50 USDC</Text>
            </View>
            <Image source={IconConstants.depositTick} style={style.checkIcon} />
          </View>
        </View>
        <View style={style.receivedView}>
          <Text style={style.receivedTxt}>Received </Text>
          <View style={style.usdcIconRow}>
            <Text style={style.usdcTxt}>$56.00</Text>
            <Image
              source={IconConstants.receivedCheck}
              style={style.receivedCheckIcon}
            />
          </View>
        </View>
        <Text style={style.blockExplorerTxt}>See on block explorer</Text>
        <CustomButton
          disable={false}
          title="Dashboard"
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          width={327}
          topHeight={14}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Dashboard')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SellOrderTransactionSuccessful;
