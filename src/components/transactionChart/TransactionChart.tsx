import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { IconConstants } from '../../constants/iconConstants'
import { style } from './style'

interface TransactionChartProps {
  transactionType: string;
  transactionTypeSubTxt: string;
  amtViewTxt: string;
  amtViewSubTxt: string;
}
const TransactionChart = (props: TransactionChartProps) => {
  const { transactionType, transactionTypeSubTxt, amtViewTxt, amtViewSubTxt } = props;
  const [showChart, setShowChart] = useState(false);

  const transactionData = [
    {
      id: "1",
      icon: IconConstants.arrowUp,
      transactionType: "Withdraw",
      transactionTypeSubTxt: "Ethereum",
      amtViewTxt: "$500.00",
      amtViewSubTxt: "488.88 FRIDDY",
    },
    {
      id: "2",
      icon: IconConstants.arrowUp,
      transactionType: "Receive",
      transactionTypeSubTxt: "Ethereum",
      amtViewTxt: "$500.00",
      amtViewSubTxt: "488.88 FRIDDY",
    },
    {
      id: "3",
      icon: IconConstants.arrowUp,
      transactionType: "Withdraw",
      transactionTypeSubTxt: "Ethereum",
      amtViewTxt: "$500.00",
      amtViewSubTxt: "488.88 FRIDDY",
    },
    {
      id: "4",
      icon: IconConstants.arrowUp,
      transactionType: "Receive",
      transactionTypeSubTxt: "Ethereum",
      amtViewTxt: "$500.00",
      amtViewSubTxt: "488.88 FRIDDY",
    },
  ]

  const renderItem = ({ item }: any) => (
    <View style={style.transactionContainer}>
      <View style={style.iconAndTransactionType}>
        <View style={style.arrowIconView}>
          <Image source={item.icon} style={style.arrowIcon} />
        </View>

        <View style={style.transactionTypeView}>
          <Text style={style.transactionTypeTxt}>{item.transactionType}</Text>
          <Text style={style.transactionTypeSubTxt}>
            {item.transactionTypeSubTxt}
          </Text>
        </View>
      </View>

      <View style={style.amtView}>
        <Text style={style.transactionTypeTxt}>{item.amtViewTxt}</Text>
        <Text style={style.transactionTypeSubTxt}>{item.amtViewSubTxt}</Text>
      </View>
    </View>
  );

  return (
    <View style={style.container}>
      <View style={style.pnlContainer}>
        <Text style={style.pnlText}>Wallet PnL</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowChart(!showChart)}>
          <View style={style.showChartView}>
            <Text style={style.showChartTxt}>Show chart</Text>
            <Image source={IconConstants.eyeOpenTransaction} style={style.eyeIcon} />
          </View>
        </TouchableOpacity>
      </View>
      {showChart && (
        <>
          <View style={style.recentTransactionContainer}>
            <Text style={style.recentTransactionTxt}>Recent Transaction’s</Text>
            <TouchableOpacity
              activeOpacity={0.8}>
              <Text style={style.seeAllTxt}>See all</Text>
            </TouchableOpacity>
          </View>
          {/* {transactionData.map((item, index) => (
            <View style={style.transactionContainer} key={index}>
              <View style={style.iconAndTransactionType}>
                <View style={style.arrowIconView}>
                  <Image source={item.icon} style={style.arrowIcon} />
                </View>
                <View style={style.transactionTypeView}>
                  <Text style={style.transactionTypeTxt}>{item.transactionType}</Text>
                  <Text style={style.transactionTypeSubTxt}>{item.transactionTypeSubTxt}</Text>
                </View>
              </View>
              <View style={style.amtView}>
                <Text style={style.transactionTypeTxt}>{item.amtViewTxt}</Text>
                <Text style={style.transactionTypeSubTxt}>{item.amtViewSubTxt}</Text>
              </View>
            </View>
          ))} */}
          <FlatList
            data={transactionData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            scrollEnabled={showChart}   // Scroll only when expanded

            // 🔥 Performance tuning
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            windowSize={5}
            removeClippedSubviews={true}
          />
        </>
      )}
    </View>
  )
}

export default TransactionChart