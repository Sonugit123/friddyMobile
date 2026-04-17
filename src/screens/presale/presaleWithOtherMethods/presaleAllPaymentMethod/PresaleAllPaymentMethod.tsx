import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import SearchBar from '../../../../components/searchBar/SearchBar';
import { IconConstants } from '../../../../constants/iconConstants';

const PresaleAllPaymentMethod = () => {
  const [search, setSearch] = useState('');

  const popularMethod = [
    {
      id: '1',
      icon: IconConstants.wise,
      name: 'Wise',
    },
    {
      id: '2',
      icon: IconConstants.paypal,
      name: 'Paypal',
    },
    {
      id: '3',
      icon: IconConstants.payoneer,
      name: 'Payoneer',
    },
  ];

  const allMethods = [
    {
      id: '1',
      icon: IconConstants.paypal2,
      name: '7 - Eleven',
    },
    {
      id: '2',
      icon: IconConstants.paypal2,
      name: 'ABN - AMRO',
    },
    {
      id: '3',
      icon: IconConstants.paypal2,
      name: 'ABA',
    },
    {
      id: '4',
      icon: IconConstants.paypal2,
      name: 'ABB Bank',
    },
    {
      id: '5',
      icon: IconConstants.paypal2,
      name: 'ABSA',
    },
    {
      id: '6',
      icon: IconConstants.paypal2,
      name: 'Abyssinia',
    },
    {
      id: '7',
      icon: IconConstants.paypal2,
      name: 'ACB',
    },
  ];

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Add Payment Methods</Text>
        <SearchBar
          topHeight={24}
          placeholder="Search over 300+ methods"
          value={search}
          onChangeText={setSearch}
        />
        <Text style={style.popularMethodTxt}>Popular</Text>
        <View style={style.popularMethodContainer}>
          {popularMethod.map(item => {
            return (
              <View key={item.id} style={style.paymentMethodView}>
                <Image source={item.icon} style={style.popularIcon} />
                <Text style={style.popularMethodNameTxt}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <Text style={style.popularMethodTxt}>All</Text>
        {allMethods.map(item => {
          return (
            <View key={item.id} style={style.allPaymentMethodView}>
              <View style={style.paymentIconView} />
              <Text style={style.allPaymentMethodNameTxt}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default PresaleAllPaymentMethod;
