import { View, Text, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import CloseButton from '../../../components/closeButton/CloseButton';
import { IconConstants } from '../../../constants/iconConstants';
import SearchBar from '../../../components/searchBar/SearchBar';

type PaymentMethod = {
  id: number;
  name: string;
  icon: any;
};

const SellCryptoAddCommunicationMethod = () => {
  const [search, setSearch] = useState('');
  const popularMethod: PaymentMethod[] = [
    { id: 1, name: 'WhatsApp', icon: IconConstants.whatsApp },
    { id: 2, name: 'Telegram', icon: IconConstants.telegram },
    { id: 3, name: 'Email', icon: IconConstants.mail2 },
  ];

  const allMethods: PaymentMethod[] = [
    { id: 11, name: 'Email', icon: IconConstants.mail2 },
    { id: 12, name: 'X ( Formerly Twitter )', icon: IconConstants.xIcon },
    { id: 13, name: 'Whatsapp', icon: IconConstants.whatsApp },
    { id: 14, name: 'Telegram', icon: IconConstants.telegram },
    { id: 15, name: 'Instagram', icon: null },
    { id: 16, name: 'Messenger', icon: null },
    { id: 17, name: 'Line', icon: null },
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
        <Text style={style.headingTxt}>Add communication method</Text>
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
          <Text style={style.popularMethodTxt}>All</Text>
          {filteredAllMethods.map(item => (
            <View key={item.id} style={style.allPaymentMethodView}>
              {item.icon ? (
                <Image source={item.icon} style={style.paypal2} />
              ) : (
                <View style={style.paymentIconView} />
              )}
              <Text style={style.allPaymentTxt}>{item.name}</Text>
            </View>
          ))}
        </>
      )}
    </SafeAreaView>
  );
};

export default SellCryptoAddCommunicationMethod;
