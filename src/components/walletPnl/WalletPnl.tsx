import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { IconConstants } from '../../constants/iconConstants'
import { scale } from '../../utils/scale';

interface WalletPnlProps {
  // pnlText: string;
  // showChartTxt: string;
  topHeight?: number;
}

const WalletPnl = (props: WalletPnlProps) => {
  const { topHeight } = props;
  const [showChart, setShowChart] = useState(false);
  return (
      <View style={[style.pnlContainer,{marginTop: scale(topHeight || 0)}]}>
        <Text style={style.pnlText}>Wallet PnL</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowChart(!showChart)}>
          <View style={style.showChartView}>
            <Text style={style.showChartTxt}>{showChart ? "Hide chart" : "Show chart"}</Text>
            <Image source={IconConstants.eyeOpenTransaction} style={style.eyeIcon} />
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default WalletPnl