import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import { style } from './style';
import InputBoxMoney from '../../../components/inputBoxMoney/InputBoxMoney';
import InputBoxTwoLabel from '../../../components/inputBoxTwoLabel/InputBoxTwoLabel';
import { IconConstants } from '../../../constants/iconConstants';
import SearchBar from '../../../components/searchBar/SearchBar';
import CustomButton from '../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../constants/colorConstants';
import { Fontconstants } from '../../../constants/fontConstants';
import CloseButton from '../../../components/closeButton/CloseButton';
import { scale } from '../../../utils/scale';

const NewUserBuyCrypto = () => {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState<
    string | null
  >(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  const coinData = [
    {
      id: '1',
      name: 'USDC',
      icon: IconConstants.usdcCoin,
    },
    {
      id: '2',
      name: 'USDT',
      icon: IconConstants.usdtCoin,
    },
    {
      id: '3',
      name: 'ETH',
      icon: IconConstants.ethCoin,
    },
    {
      id: '4',
      name: 'FRIDDY',
      icon: IconConstants.friddyCoin,
    },
    {
      id: '5',
      name: 'BTC',
      icon: IconConstants.bitcoin,
    },
  ];

  const paymentMethod = [
    {
      id: '1',
      name: 'Wise',
      icon: IconConstants.wise,
    },
    {
      id: '2',
      name: 'Paylpal',
      icon: IconConstants.paypal,
    },
    {
      id: '3',
      name: 'Netler',
      icon: IconConstants.netler,
    },
    {
      id: '4',
      name: 'Zelle',
      icon: IconConstants.zelle,
    },
    {
      id: '5',
      name: 'Payoneer',
      icon: IconConstants.payoneer,
    },
    { id: '6', name: 'Paytm', icon: IconConstants.wise },
    { id: '7', name: 'PhonePe', icon: IconConstants.wise },
    { id: '8', name: 'Skrill', icon: IconConstants.wise },
    { id: '9', name: 'Payeer', icon: IconConstants.wise },
  ];
  const filteredPaymentMethods = paymentMethod.filter(method =>
    method.name.toLowerCase().includes(search.toLowerCase()),
  );
  const selectedMethodData = paymentMethod.find(
  item => item.id === selectedPaymentMethod
);


  const displayedPaymentMethods =
    search.length > 0
      ? filteredPaymentMethods.slice(0, 5)
      : paymentMethod.slice(0, 5);

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <InputBoxTwoLabel
          label="Buy ( USDC )"
          rightLabel="0.00 USDC"
          topHeight={24}
          keyboardType="numeric"
          autoCapitalize="none"
        />
        <Text style={style.minimumBuyTxt}>
          Minimum buy amount is $1.0 ( 1.0 USDC )
        </Text>
        <View style={style.coinContainer}>
          {coinData.map((item, index) => {
            const isSelected = selectedCoin === item.id;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCoin(item.id)}
                activeOpacity={0.8}
                key={index}
                style={[
                  style.coinView,
                  {
                    backgroundColor: isSelected
                      ? ColorConstants.SIGNIN_BOX
                      : ColorConstants.WHITE,
                  },
                ]}
              >
                <Image source={item.icon} style={style.coinIcon} />
                <Text
                  style={[
                    style.coinTxt,
                    {
                      color: isSelected
                        ? ColorConstants.BTNCOLOR
                        : ColorConstants.BLACK,
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={style.paymentMethodTxt}>Choose payment method</Text>
        <SearchBar
          topHeight={8}
          placeholder="Search over 300+ methods"
          value={search}
          onChangeText={setSearch}
        />
        {selectedPaymentMethod ? (
          <Text style={style.quickOptionTxt}>Selected</Text>
        ) : (
          <Text style={style.quickOptionTxt}>Quick options</Text>
        )}

        <View style={style.coinContainer}>
          {/* {displayedPaymentMethods.map(item => { */}
           {(selectedPaymentMethod ? [selectedMethodData] : displayedPaymentMethods).map(
    item => {
      if (!item) return null;
            const isSelected = selectedPaymentMethod === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => setselectedPaymentMethod(item.id)}
                style={[
                  style.paymentView,
                  {
                    borderColor: isSelected
                      ? ColorConstants.TO_CONTAINER
                      : ColorConstants.MODEL_BORDER_COLOR,
                    backgroundColor: isSelected
                      ? ColorConstants.SIGNIN_BOX
                      : ColorConstants.WHITE,
                  },
                ]}
              >
                <Image source={item.icon} style={style.coinIcon} />
                <Text style={style.coinTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {!selectedPaymentMethod && search.length > 0 && filteredPaymentMethods.length >= 5 && (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ marginTop: 8 }}
          >
            <Text style={{ color: ColorConstants.BTNCOLOR }}>See All</Text>
          </TouchableOpacity>
        )}
        <CustomButton
          disable={false}
          title="Buy Crypto"
          bgColor={
            selectedPaymentMethod
              ? ColorConstants.BTNCOLOR
              : ColorConstants.BACKARROWBG
          }
          txtColor={
            selectedPaymentMethod
              ? ColorConstants.WHITE
              : ColorConstants.DISABLE_BTN_TXT
          }
          imageSize={20}
          width={327}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Buy Crypto')}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle="fullScreen"
      >
        <View
          style={[
            style.safeAreaStyle,
            { paddingTop: Platform.OS === 'ios' ? insets.top : 0 },
          ]}
        >
          <Header />
          <View style={style.container}>
            <CloseButton onPress={() => setModalVisible(false)} />
            <View style={style.addPaymentMethodView}>
              <Text style={style.addPaymentMethodTxt}>Add payment method</Text>
              <Image
                source={IconConstants.addPaymentMethod}
                style={style.addPaymentMethodIcon}
              />
            </View>
            <SearchBar
              topHeight={8}
              placeholder="Search over 300+ methods"
              value={search}
              onChangeText={setSearch}
            />

            <Text style={style.resultsTxt}>Results ( 20 )</Text>
            <View style={style.paymentlistContainer}>
              <FlatList
                style={{}}
                data={displayedPaymentMethods}
                renderItem={({ item }) => (
                  <>
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.8}
                      onPress={() => {
                        setselectedPaymentMethod(item.id);
                        setModalVisible(false);
                      }}
                      style={[
                        style.paymentView,
                        { borderWidth: 0, marginBottom: scale(16) },
                      ]}
                    >
                      <Image source={item.icon} style={style.coinIcon} />
                      <Text style={style.coinTxt}>{item.name}</Text>
                    </TouchableOpacity>
                  </>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default NewUserBuyCrypto;
