import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../../constants/iconConstants';
import { scale } from '../../../../utils/scale';

const PresaleChooseWallet = () => {
  const walletList = [
    {
      id: '1',
      icon: IconConstants.walletConnect,
      name: 'WalletConnect',
      rightViewTxt: 'QR Code',
    },
    {
      id: '2',
      icon: IconConstants.metaMask,
      name: 'MetaMask',
    },
    {
      id: '3',
      icon: IconConstants.coinBase,
      name: 'CoinBase',
    },
    {
      id: '4',
      icon: IconConstants.phantom,
      name: 'Phantom',
    },
    {
      id: '5',
      icon: IconConstants.trustWallet,
      name: 'Trust Wallet',
    },
    {
      id: '6',
      icon: IconConstants.allWallet,
      name: 'All Wallet',
      rightViewTxt: '+300',
    },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <View style={{ marginBottom: scale(24) }} />
        {walletList.map((item, index) => (
          <View key={index} style={style.walletContainer}>
            <View style={style.walletIconAndTxt}>
              <Image source={item.icon} style={style.walletIcon} />
              <Text style={style.walletName}>{item.name}</Text>
            </View>
            {item.rightViewTxt && (
              <View style={style.rightInnerView}>
                <Text style={style.rightViewTxt}>{item.rightViewTxt}</Text>
              </View>
            )}
          </View>
        ))}
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
    </SafeAreaView>
  );
};

export default PresaleChooseWallet;
