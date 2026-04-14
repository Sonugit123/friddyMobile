import { View, Text, Image, FlatList, ListRenderItem } from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { style } from './style';
import SearchBar from '../../../components/searchBar/SearchBar';
import { IconConstants } from '../../../constants/iconConstants';

type FAQItem = {
  id: number;
  title: string;
  desc: string;
};

const FAQs = () => {
  const [search, setSearch] = useState('');
  const faqsData: FAQItem[] = [
    {
      id: 1,
      title: 'Getting Started',
      desc: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit dipiscing elit',
    },
    {
      id: 2,
      title: 'Verify account',
      desc: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit dipiscing elit',
    },
    {
      id: 3,
      title: 'Reset password',
      desc: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit dipiscing elit',
    },
    {
      id: 4,
      title: 'Google Authenticator',
      desc: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit dipiscing elit',
    },
  ];
  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqsData;

    return faqsData.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const renderItem: ListRenderItem<FAQItem> = ({ item }) => (
    <View style={style.faqsView}>
      <View style={style.titleRowView}>
        <View style={style.IconAndTitle}>
          <Image
            source={IconConstants.questionMarkCircle}
            style={style.questionMarkCircle}
          />
          <Text style={style.gettingStartedTxt}>{item.title}</Text>
        </View>
        <Image source={IconConstants.arrowRight} style={style.arrowRight} />
      </View>
      <Text style={style.descTxt}>{item.desc}</Text>
    </View>
  );
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>FAQs</Text>
        <SearchBar
          topHeight={24}
          placeholder="Search Help articles"
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredFaqs}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FAQs;
