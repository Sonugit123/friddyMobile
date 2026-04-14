import { View, Text, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { IconConstants } from '../../../constants/iconConstants';
import { style } from './style';
import CloseButton from '../../../components/closeButton/CloseButton';
import SearchBar from '../../../components/searchBar/SearchBar';

type PaymentMethod = {
  id: number;
  name: string;
  icon: any;
};

const SellCryptoAddPaymentMethod = () => {
  const [search, setSearch] = useState('');

  const popularMethod: PaymentMethod[] = [
    { id: 1, name: 'PayPal', icon: IconConstants.paypal2 },
    { id: 2, name: 'Payoneer', icon: IconConstants.payoneer },
    { id: 3, name: 'Kuda', icon: IconConstants.kudaIcon },
  ];

  const allMethods: PaymentMethod[] = [
    { id: 11, name: '7 - Eleven', icon: IconConstants.paypal2 },
    { id: 12, name: 'ABN - AMRO', icon: IconConstants.paypal2 },
    { id: 13, name: 'ABA', icon: IconConstants.paypal2 },
    { id: 14, name: 'ABB Bank', icon: IconConstants.paypal2 },
    { id: 15, name: 'ABSA', icon: IconConstants.paypal2 },
    { id: 16, name: 'Abyssinia', icon: IconConstants.paypal2 },
    { id: 17, name: 'ACB', icon: IconConstants.paypal2 },
  ];

  const searchLower = search.toLowerCase();

  const filteredPopular = useMemo(() => {
    return popularMethod.filter(item =>
      item.name.toLowerCase().includes(searchLower),
    );
  }, [searchLower]);

  const filteredAllMethods = useMemo(() => {
    return allMethods.filter(item =>
      item.name.toLowerCase().includes(searchLower),
    );
  }, [searchLower]);

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <CloseButton />

      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Add payment method</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>

      <SearchBar
        topHeight={24}
        placeholder="Search over 300+ methods"
        value={search}
        onChangeText={setSearch}
      />

      {filteredPopular.length > 0 && (
        <>
          <Text style={style.popularMethodTxt}>Popular</Text>
          <View style={style.popularMethodContainer}>
            {filteredPopular.map(item => (
              <View key={item.id} style={style.paymentMethodView}>
                <Image source={item.icon} style={style.paypal2} />
                <Text style={style.paymentMethodTxt}>{item.name}</Text>
              </View>
            ))}
          </View>
        </>
      )}

      {filteredAllMethods.length > 0 && (
        <>
          <Text style={style.popularMethodTxt}>A - Z</Text>
          {filteredAllMethods.map(item => (
            <View key={item.id} style={style.allPaymentMethodView}>
              <View style={style.paymentIconView} />
              <Text style={style.allPaymentTxt}>{item.name}</Text>
            </View>
          ))}
        </>
      )}
    </SafeAreaView>
  );
};

export default SellCryptoAddPaymentMethod;