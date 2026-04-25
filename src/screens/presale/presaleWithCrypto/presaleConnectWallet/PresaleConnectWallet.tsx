import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import { ImageConstants } from '../../../../constants/imageConstants';

const PresaleConnectWallet = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <BackHeader />

          {/* QR Code Section */}
          <View style={style.qrCodeContainer}>
            <View style={style.friddyLogoBox}>
              <Image
                source={IconConstants.headerLogo}
                style={style.headerLogo}
              />
            </View>
            <Image
              source={ImageConstants.DEPOSITE_QR}
              style={style.depositeQr}
            />
          </View>

          {/* User Details */}
          <View style={style.userDetailsRow}>
            <Text style={style.userName}>John Doe</Text>
            <Text style={style.userEmail}>John@gmail.com</Text>
          </View>

          {/* Amount Due Section */}
          <View style={style.amountDueRow}>
            <Text style={style.amountDueText}>Amount Due</Text>
            <TouchableOpacity style={style.copyBtn}>
              <Text style={style.copyBtnText}>Copy</Text>
            </TouchableOpacity>
          </View>

          <View style={style.amountValueRow}>
            <Image source={IconConstants.usdcCoin} style={style.coinIcon} />
            <Text style={style.dollarsValue}>100.00 USDC</Text>
            <Text style={style.onNetworkText}>on Ethereum</Text>
          </View>

          {/* Receive & Time Left Section */}
          <View style={style.receiveAndTimeRow}>
            <View style={style.receiveColumn}>
              <Text style={style.columnLabel}>Receive</Text>
              <View style={style.columnValueRow}>
                <Image
                  source={IconConstants.friddyCoin}
                  style={style.coinIconSmall}
                />
                <Text style={style.columnValueText}>36.49</Text>
              </View>
            </View>
            <View style={style.timeColumn}>
              <Text style={style.columnLabel}>Time Left</Text>
              <View style={style.columnValueRow}>
                <Text style={style.columnValueText}>00:59s</Text>
              </View>
            </View>
          </View>

          {/* Payment Address Section */}
          <View style={style.paymentAddressRow}>
            <Text style={style.paymentAddressLabel}>Payment address</Text>
            <TouchableOpacity style={style.copyBtn}>
              <Text style={style.copyBtnText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <Text style={style.addressText}>
            0x8e4d18f411e0049e082b32e63d5576f51d59b628
          </Text>

          {/* Connect Wallet Button */}
          <CustomButton
            disable={false}
            title="Connect wallet"
            bgColor={ColorConstants.BTNCOLOR}
            txtColor={ColorConstants.WHITE}
            bordRadius={360}
            width={327}
            topHeight={24}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Connect wallet')}
          />

          {/* Checkbox Section */}
          <View style={style.checkBoxRow}>
            <Image
              source={IconConstants.checkBoxFill}
              style={style.checkboxIcon}
            />
            <Text style={style.checkboxText}>
              Read our <Text style={style.linkText}>Privacy Policy</Text> &{' '}
              <Text style={style.linkText}>terms and conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresaleConnectWallet;
