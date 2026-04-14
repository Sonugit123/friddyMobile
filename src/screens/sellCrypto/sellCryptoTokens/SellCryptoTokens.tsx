import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import InputBoxSellCrypto from '../../../components/inputBoxSellCrypto/InputBoxSellCrypto';
import { ColorConstants } from '../../../constants/colorConstants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { useSellCryptoStore } from '../../../store/sellCryptoStore';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList
  // 'SellCryptoTokens'
>;
type TokenItem = {
  id: number;
  tokenIcon: any;
  tokenName: string;
  type: string;
  typeValue: string;
  value: string;
};
const SellCryptoTokens = () => {
  const [selectedTokens, setSelectedTokens] = useState<number[]>([]);
  // const [value, setvalue] = useState('');
  const { sellAmounts, setSellAmount, priceValues, resetSellAmount, resetPriceValue } = useSellCryptoStore();
  const navigation = useNavigation<NavigationProp>();

  const toggleToken = React.useCallback((id: number) => {
    setSelectedTokens(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  }, []);

  const handleCancelSelling = (id: number) => {
  resetSellAmount(id);
  resetPriceValue(id);
  toggleToken(id);
};

  const tokenData = React.useMemo(
    () => [
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
    ],
    [],
  );
  const isAnyTokenReadyToSell = React.useMemo(() => {
    return tokenData.some(item => {
    const sellValue = sellAmounts[item.id];
    const priceValue = priceValues[item.id];
    return sellValue && priceValue;
  });
  },[tokenData, sellAmounts, priceValues]);

  const renderItem = React.useCallback(
    ({ item }: { item: TokenItem }) => {
      const isSelected = selectedTokens.includes(item.id);
      const sellValue = sellAmounts[item.id];
      const priceValue = priceValues[item.id];
      const isReadyToSell = sellValue && priceValue;

      if (isReadyToSell) {
        return (
          <View  style={style.sellingView}>
            <View style={style.tokenIconAndNameView}>
              <Image source={item.tokenIcon} style={style.tokenIcon} />
              <View style={style.tokenNameView}>
                <Text style={style.tokenNameTxt}>Selling</Text>
                <Text style={style.tokenTypeTxt}>{item.type}</Text>
              </View>
            </View>
            <View style={style.tokenValueAndPlusIconView}>
              <View style={style.tokenValueView}>
                <Text style={style.tokenTypeValueTxt}>
                  {sellValue} ( $101 )
                </Text>
                <Text style={style.tokenValueTxt}>@{`$${priceValue}`}</Text>
              </View>

              <TouchableOpacity
                style={style.crossIconView}
                onPress={() => handleCancelSelling(item.id)}
              >
                <Image source={IconConstants.cancel} style={style.crossIcon} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }

      if (isSelected) {
        return (
          <View>
            <View style={style.cancelIconView}>
              <TouchableOpacity onPress={() => toggleToken(item.id)}>
                <Image source={IconConstants.cancel} style={style.cancelIcon} />
              </TouchableOpacity>
            </View>
            <>
              <View>
                <InputBoxSellCrypto
                  label={`Sell ${item.type}`}
                  rightLabel={`0.00 ${item.type}`}
                  rightLabelColor={ColorConstants.GRAY_LABEL}
                  topHeight={8}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  // value={value}
                  // onChangeText={val => setvalue(val)}
                  value={sellAmounts[item.id] || ''}
                  onChangeText={val => setSellAmount(item.id, val)}
                  tokenType={item.type}
                />
                <TouchableOpacity
                  style={style.arrowRightView}
                  onPress={() =>
                    // navigation.navigate('SellCryptoAtWhatPrice', {
                    //   token: item,
                    //   value: value,
                    // })
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
          </View>
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
    },
    [selectedTokens, sellAmounts, priceValues],
  );
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
        ListFooterComponent={
          <CustomButton
            disable={!isAnyTokenReadyToSell}
            title="Submit offer"
            bgColor={
              isAnyTokenReadyToSell
                ? ColorConstants.BTNCOLOR
                : ColorConstants.BACKARROWBG
            }
            txtColor={
              isAnyTokenReadyToSell
                ? ColorConstants.WHITE
                : ColorConstants.DISABLE_BTN_TXT
            }
            width={343}
            topHeight={28}
            fontsize={14}
            fontfamily={Fontconstants.SEMIBOLD}
            onPress={() => console.log('Submit offer')}
          />
        }
      />
    </SafeAreaView>
  );
};

export default SellCryptoTokens;
