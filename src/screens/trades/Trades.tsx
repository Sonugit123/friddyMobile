import { View, Text, Image, ListRenderItem, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import WalletBalance from '../../components/walletBalance/WalletBalance';
import CustomButton from '../../components/customButton/CustomButton';
import { Fontconstants } from '../../constants/fontConstants';
import { ColorConstants } from '../../constants/colorConstants';
import { IconConstants } from '../../constants/iconConstants';
import TapBtn from '../../components/tapBtn/TapBtn';
import CustomDropDownOpenBox from '../../components/customDropDownOpenBox/CustomDropDownOpenBox';
import { scale } from '../../utils/scale';

const Trades = () => {
  const [id, setId] = useState(1);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('All cases');

  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeSelected, setRangeSelected] = useState('This month');

  const casesData = [
    { id: 1, title: 'All cases' },
    { id: 2, title: 'Pending support response' },
    { id: 3, title: 'Pending customer response' },
    { id: 4, title: 'Active' },
    { id: 5, title: 'In Review' },
    { id: 6, title: 'Resolved' },
  ];

  const rangeData = [
    { id: 1, title: 'This month' },
    { id: 2, title: 'Last month' },
    { id: 3, title: 'Pick Range', icon: IconConstants.calendar },
  ];

  type TradeItem = {
    id: number;
    name: string;
    amount: number;
  };

  const tradesData: TradeItem[] = [
    { id: 1, name: "Jacob O'Connell", amount: 1800 },
    { id: 2, name: "Jacob O'Connell", amount: 1800 },
  ];

  const renderItem: ListRenderItem<TradeItem> = ({ item }) => (
    <View style={style.tradeView}>
      <View style={style.profileRow}>
        <View style={style.profileView}>
          <Text style={style.profileIconTxt}>JO</Text>
        </View>
        <Text style={style.profileNameTxt}>Jacob O'Connell</Text>
      </View>
      <View style={style.tradeAmountRow}>
        <Text style={style.tradeAmountTxt}>Trade Amount</Text>
        <Image source={IconConstants.infoCircle} style={style.infoIcon} />
      </View>
      <View style={style.amountValueRow}>
        <Image source={IconConstants.usdcCoin} style={style.usdcIcon} />
        <Text style={style.tradeAmountValue}>1800</Text>
        <Text style={style.usdcTxt}>USDC</Text>
      </View>
      <View style={style.completedTradeContainer}>
        <View style={style.completedTradeBox}>
          <View style={style.completedTradeRow}>
            <Text style={style.completedTradeTxt}>Completed trades</Text>
            <Image source={IconConstants.infoCircle} style={style.infoIcon} />
          </View>
          <View style={style.completeTradeValueRow}>
            <View style={style.checkMarkView}>
              <Image
                source={IconConstants.checkCircled}
                style={style.checkMarkIcon}
              />
            </View>
            <Text style={style.completeTradesValue}>50</Text>
          </View>
        </View>

        <View style={style.completedTradeBox}>
          <View style={style.completedTradeRow}>
            <Text style={style.completedTradeTxt}>Payment method</Text>
            <Image source={IconConstants.infoCircle} style={style.infoIcon} />
          </View>
          <View style={style.completeTradeValueRow}>
            <Image source={IconConstants.wise} style={style.wiseIcon} />
            <Text style={style.completeTradesValue}>Wise</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={style.openBtnView}>
        <Text style={style.openBtnTxt}>Open</Text>
        <Image
          source={IconConstants.arrowRightIcon}
          style={style.arrowRightIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Trades</Text>
        <WalletBalance headingTxt="Trades balance" />
        <View style={style.buySellCryptoContainer}>
          <View style={style.buyCryptoBtn}>
            <Image source={IconConstants.dollar2} style={style.dollarIcon} />
            <Text style={style.buyCryptoTxt}>Buy Crypto</Text>
          </View>
          <View style={style.sellCryptoBtn}>
            <Image source={IconConstants.sendDollar} style={style.dollarIcon} />
            <Text style={style.sellCryptoTxt}>Sell Crypto</Text>
          </View>
        </View>
        <TapBtn
          selected={id}
          onPress1={() => setId(1)}
          onPress2={() => setId(2)}
          topHeight={32}
          btn1={'Market offers'}
          btn2={'My offers'}
          selectedBtnColor={ColorConstants.WHITE}
          selectedTxtColor={ColorConstants.BLACK}
          unSelectedTxtColor={ColorConstants.GRAY_LABEL}
          bgContainerColor={ColorConstants.BACKARROWBG}
          heightContainer={48}
          btnHeight={40}
          btnWidth={159}
        />
        <View style={style.dropDownView}>
          <CustomDropDownOpenBox
            data={casesData}
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            closeOther={() => setRangeOpen(false)}
            bgColor={ColorConstants.WHITE}
            borderWidth={1}
            width={163}
            height={40}
            borderRadius={8}
          />
          <CustomDropDownOpenBox
            data={rangeData}
            open={rangeOpen}
            setOpen={setRangeOpen}
            selected={rangeSelected}
            setSelected={setRangeSelected}
            closeOther={() => setOpen(false)}
            bgColor={ColorConstants.WHITE}
            borderWidth={1}
            width={163}
            height={40}
            borderRadius={8}
          />
        </View>
        <FlatList
          data={tradesData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: scale(40) }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Trades;
