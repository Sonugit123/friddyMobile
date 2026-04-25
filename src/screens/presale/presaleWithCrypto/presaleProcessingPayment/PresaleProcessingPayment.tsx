import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';

const PresaleProcessingPayment = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          
          <View style={style.userDetailsBox}>
            <View style={style.userRow}>
              <Text style={style.userRowLabel}>John Doe</Text>
              <Text style={style.userRowValue}>John@gmail.com</Text>
            </View>
            <View style={style.walletRow}>
              <Text style={style.userRowLabel}>Wallet</Text>
              <Text style={style.userRowValue}>0xa74...E21f</Text>
            </View>
          </View>

          <View style={style.paidSection}>
            <Text style={style.paidLabel}>Paid</Text>
            <View style={style.paidValueRow}>
              <Image source={IconConstants.usdcCoin} style={style.coinIcon} />
              <Text style={style.dollarsValue}>100.00 USDC </Text>
              <Text style={style.onNetworkText}>on Ethereum</Text>
            </View>
          </View>

          <View style={style.receiveAndTimeRow}>
            <View style={style.receiveColumn}>
              <Text style={style.columnLabel}>Receive</Text>
              <View style={style.columnValueRow}>
                <Image source={IconConstants.friddyCoin} style={style.coinIconSmall} />
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

          <View style={style.paymentAddressRow}>
            <Text style={style.paymentAddressLabel}>Payment address</Text>
            <TouchableOpacity style={style.copyBtn}>
              <Text style={style.copyBtnText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <Text style={style.addressText}>
            0x8e4d18f411e0049e082b32e63d5576f51d59b628
          </Text>

          <View style={style.processingBtnContainer}>
             <Text style={style.processingText}>Processing payment</Text>
             <View style={style.processingPill}>
                <Text style={style.processingPillText}>1/18</Text>
             </View>
          </View>

          {/* Checkbox Section */}
          <View style={style.checkBoxRow}>
            <Image source={IconConstants.checkBoxFill} style={style.checkboxIcon} />
            <Text style={style.checkboxText}>
              Read our <Text style={style.linkText}>Privacy Policy</Text> & <Text style={style.linkText}>terms and conditions</Text>
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresaleProcessingPayment;