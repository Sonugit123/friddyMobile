import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import InputBox from '../../../../components/inputBox/InputBox';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';

const TOKENS = [
  {
    id: 1,
    name: 'USDC on ETH',
    youPay: 'You pay',
    amountCrypto: '100.00 USDC',
    amountFiat: '$100',
    mainIcon: IconConstants.usdcCoin,
    subIcon: IconConstants.ethCoin,
    subIconType: 'image',
  },
  {
    id: 2,
    name: 'USDC on Solana',
    youPay: 'You pay',
    amountCrypto: '100.00 USDC',
    amountFiat: '$100',
    mainIcon: IconConstants.usdcCoin,
    subIcon: IconConstants.solCoin,
    subIconType: 'image',
  },
  {
    id: 3,
    name: 'USDC on BSC',
    youPay: 'You pay',
    amountCrypto: '100.00 USDC',
    amountFiat: '$100',
    mainIcon: IconConstants.usdcCoin,
    subIcon: IconConstants.binanceCoin,
    subIconType: 'image',
  },
  {
    id: 4,
    name: 'USDC.e on Arbitrum',
    youPay: 'You pay',
    amountCrypto: '100.00 USDC',
    amountFiat: '$100',
    mainIcon: IconConstants.usdcCoin,
    subIcon: IconConstants.arbitrumCoin,
    subIconType: 'image',
  },
  {
    id: 5,
    name: 'USDC on Optimism',
    youPay: 'You pay',
    amountCrypto: '100.00 USDC',
    amountFiat: '$50',
    mainIcon: IconConstants.usdcCoin,
    subIcon: IconConstants.optimismCoin,
    subIconType: 'image',
  },
  {
    id: 6,
    name: 'Eth on Ethereum',
    youPay: 'You pay',
    amountCrypto: '0.004 ETH',
    amountFiat: '$100',
    mainIcon: IconConstants.ethCoin,
    subIcon: IconConstants.ethSmallCoin,
    subIconType: 'image',
  },
];

const PresaleChooseToken = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          <BackHeader />
          <View style={style.quoteChangeRow}>
            <Text style={style.quoteChangeText}>Quote change in</Text>
            <Text style={style.quoteChangeTime}>00:59s</Text>
          </View>

          <Text style={style.chooseTokenText}>Choose token</Text>
          <View style={style.tokenContainer}>
          {TOKENS.map(token => (
            <View key={token.id} style={style.tokenRow}>
              <View style={style.tokenLeft}>
                <View style={style.iconWrapper}>
                  <Image source={token.mainIcon} style={style.mainIcon} />
                  <View style={style.subIconWrapper}>
                    <Image source={token.subIcon!} style={style.subIcon} />
                  </View>
                </View>
                <View>
                  <Text style={style.tokenName}>{token.name}</Text>
                  <Text style={style.tokenYouPay}>{token.youPay}</Text>
                </View>
              </View>
              <View style={style.tokenRight}>
                <Text style={style.tokenCryptoAmount}>
                  {token.amountCrypto}
                </Text>
                <Text style={style.tokenFiatAmount}>{token.amountFiat}</Text>
              </View>
            </View>
          ))}
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresaleChooseToken;
