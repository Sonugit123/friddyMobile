import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { IconConstants } from '../../../constants/iconConstants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import InputBoxSellCrypto from '../../../components/inputBoxSellCrypto/InputBoxSellCrypto';
import { ColorConstants } from '../../../constants/colorConstants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSellCryptoStore } from '../../../store/sellCryptoStore';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
// 'SellCryptoTokens'
const SellCryptoAtWhatPrice = () => {
  const [selectedTokens, setSelectedTokens] = useState<number[]>([]);
  // const [value, setvalue] = useState('');
  // const [priceValue, setpriceValue] = useState('');
  const { priceValues, setPriceValue } = useSellCryptoStore();
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute();
  const { token } = route.params as any;

  const toggleToken = (id: number) => {
    setSelectedTokens(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };
  const tokenData = [
    {
      id: 1,
      tokenIcon: IconConstants.usdcCoin,
      tokenName: 'USDC',
      type: 'USDC',
      typeValue: '2100.80 USDC',
      value: '$2101.90',
    },
    {
      id: 2,
      tokenIcon: IconConstants.usdtCoin,
      tokenName: 'USDT',
      type: 'USDT',
      typeValue: '1300.00 USDT',
      value: '$101.90',
    },
    {
      id: 3,
      tokenIcon: IconConstants.friddyCoin,
      tokenName: 'FRIDDY',
      type: 'FRIDDY',
      typeValue: '1300.00 FRIDDY',
      value: '$101.90',
    },
    {
      id: 4,
      tokenIcon: IconConstants.ethCoin,
      tokenName: 'Ethereum',
      type: 'ETH',
      typeValue: '0.001 ETH',
      value: '$801.90',
    },
    {
      id: 5,
      tokenIcon: IconConstants.bitcoin,
      tokenName: 'Bitcoin',
      type: 'BTC',
      typeValue: '00.008 BTC',
      value: '$101.90',
    },
  ];

  console.log('tokenData-->', token.id);
  console.log('route.params-->', route.params);

  const renderItem = ({ item }: { item: (typeof tokenData)[0] }) => {
    const isSelected = selectedTokens.includes(item.id);

    if (isSelected && item.id === token.id) {
      return (
        <View>
          <View style={style.cancelIconView}>
            <TouchableOpacity onPress={() => toggleToken(item.id)}>
              <Image source={IconConstants.cancel} style={style.cancelIcon} />
            </TouchableOpacity>
          </View>

          <InputBoxSellCrypto
            label="At what price?"
            topHeight={8}
            keyboardType="numeric"
            autoCapitalize="none"
            value={priceValues[token.id] || ''}
            onChangeText={val => setPriceValue(token.id, val)}
          />

          <TouchableOpacity
            style={style.arrowRightView}
            onPress={() => navigation.goBack()}
          >
            <Image source={IconConstants.arrowRight} style={style.arrowRight} />
          </TouchableOpacity>
        </View>
      );
    }

    if (isSelected) {
      return (
        <>
          <View>
            <InputBoxSellCrypto
              label={`Sell ${item.type}`}
              rightLabel={`0.00 ${item.type}`}
              rightLabelColor={ColorConstants.GRAY_LABEL}
              topHeight={8}
              keyboardType="numeric"
              autoCapitalize="none"
              tokenType={item.type}
            />

            <TouchableOpacity
              style={style.arrowRightView}
              onPress={() =>
                navigation.navigate('SellCryptoAtWhatPrice', {
                  token: item,
                })
              }
            >
              <Image
                source={IconConstants.arrowRight}
                style={style.arrowRight}
              />
            </TouchableOpacity>
          </View>

          <View style={style.inputPercentContainer}>
            {['25%', '50%', '100%'].map(p => (
              <View key={p} style={style.inputPercentView}>
                <Text style={style.inputPercentTxt}>{p}</Text>
              </View>
            ))}
          </View>
        </>
      );
    }

    return (
      <TouchableOpacity
        style={style.tokenContainer}
        onPress={() => toggleToken(item.id)}
      >
        <View style={style.tokenIconAndNameView}>
          <Image source={item.tokenIcon} style={style.tokenIcon} />
          <View style={style.tokenNameView}>
            <Text style={style.tokenNameTxt}>{item.tokenName}</Text>
            <Text style={style.tokenTypeTxt}>{item.type}</Text>
          </View>
        </View>

        <View style={style.tokenValueAndPlusIconView}>
          <View style={style.tokenValueView}>
            <Text style={style.tokenTypeValueTxt}>{item.typeValue}</Text>
            <Text style={style.tokenValueTxt}>{item.value}</Text>
          </View>

          <View style={style.plusIconView}>
            <Image source={IconConstants.plus} style={style.plusIcon} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.headingContainer}>
        <Text style={style.headingTxt}>Sell crypto</Text>
        <Image
          source={IconConstants.addPaymentMethod}
          style={style.addPaymentMethod}
        />
      </View>
      <Text style={style.onlyTokensTxt}>
        Only tokens with minimum balance of $20 will show here
      </Text>
      <Text style={style.yourTokensTxt}>Your tokens</Text>
      <Text style={style.selectMultipleTokensTxt}>
        You can select multiple tokens
      </Text>
      <FlatList
        data={tokenData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SellCryptoAtWhatPrice;
