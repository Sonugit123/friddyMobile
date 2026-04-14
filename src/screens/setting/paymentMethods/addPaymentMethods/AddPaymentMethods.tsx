import React, { useState } from 'react';
import { View, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import { scale } from '../../../../utils/scale';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import SearchBar from '../../../../components/searchBar/SearchBar';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const AddPaymentMethods = () => {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 🔥 Single source of truth (no duplicate arrays)
  const banks = [
    {
      id: 'popular-1',
      section: 'Popular',
      name: 'Bank Transfer ( WIRE )',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'popular-2',
      section: 'Popular',
      name: 'Bank Transfer ( ACH )',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'popular-3',
      section: 'Popular',
      name: 'PayPal',
      icon: IconConstants.paypal,
    },
    {
      id: 'popular-4',
      section: 'Popular',
      name: 'Wise',
      icon: IconConstants.wise,
    },
    {
      id: 'popular-5',
      section: 'Popular',
      name: 'Venmo',
      icon: IconConstants.venmo,
    },

    {
      id: 'all-1',
      section: 'All',
      name: '7-Eleven ( Seven Bank )',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'all-2',
      section: 'All',
      name: 'A-Bank',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'all-3',
      section: 'All',
      name: 'ABA',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'all-4',
      section: 'All',
      name: 'ABB',
      icon: IconConstants.bankTransfer,
    },
    {
      id: 'all-5',
      section: 'All',
      name: 'ABC',
      icon: IconConstants.bankTransfer,
    },
  ];

const filteredBanks = banks.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase())
);


  // 🔥 Convert to SectionList format
  // const sections = [
  //   {
  //     title: 'Popular',
  //     data: banks.filter(item => item.section === 'Popular'),
  //   },
  //   {
  //     title: 'All',
  //     data: banks.filter(item => item.section === 'All'),
  //   },
  // ];
  const sections = [
  {
    title: 'Popular',
    data: filteredBanks.filter(item => item.section === 'Popular'),
  },
  {
    title: 'All',
    data: filteredBanks.filter(item => item.section === 'All'),
  },
].filter(section => section.data.length > 0);

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />

      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Add Payment Method</Text>

        <SearchBar
          topHeight={8}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />

        {/* 🔥 SectionList instead of multiple maps */}
        <SectionList
          sections={sections}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: scale(100) }}
          renderSectionHeader={({ section }) => (
            <Text style={style.popularBankTxt}>{section.title}</Text>
          )}
          renderItem={({ item }) => {
            const isSelected = selectedId === item.id;

            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedId(item.id)}
              >
                <View
                  style={[
                    style.bankContainer,
                    {
                      borderColor: isSelected
                        ? ColorConstants.BTNCOLOR
                        : 'transparent',
                      borderWidth: isSelected ? scale(1) : 0,
                      padding: isSelected ? scale(8) : 0,
                    },
                  ]}
                >
                  <Image source={item.icon} style={style.bankIcon} />
                  <Text style={style.bankName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* 🔥 Bottom Button */}
      <View style={style.buttonContainer}>
        <CustomButton
          disable={!selectedId}
          title="Proceed"
          bgColor={
            selectedId ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG
          }
          txtColor={
            selectedId ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT
          }
          width={343}
          topHeight={28}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Selected:', selectedId)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPaymentMethods;
