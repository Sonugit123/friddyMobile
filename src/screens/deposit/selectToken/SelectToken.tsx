import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import { ColorConstants } from '../../../constants/colorConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const SelectToken = () => {
        const [selectedId, setSelectedId] = useState<string | null>(null);
    
        const recentData = [
            {
                id: "1",
                icon: IconConstants.usdcCoin,
                name: "USDC",
            },
            {
                id: "2",
                icon: IconConstants.usdtCoin,
                name: "USDT",
            }
        ]
    
        const receiveData = [
            {
                id: "1",
                icon: IconConstants.usdcCoin,
                name: "USDC on Base",
            },
            {
                id: "2",
                icon: IconConstants.usdcCoin,
                name: "USDC on ETH",
            },
            {
                id: "3",
                icon: IconConstants.usdcCoin,
                name: "USDC on Solana",
            },
            {
                id: "4",
                icon: IconConstants.usdcCoin,
                name: "USDC on BSC",
            },
            {
                id: "5",
                icon: IconConstants.usdcCoin,
                name: "USDC.e on Arbitrum",
            },
            {
                id: "6",
                icon: IconConstants.usdcCoin,
                name: "USDC on Optimism",
            },
        ]
  return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <BackHeader />
            <View style={style.headingContainer}>
                <Text style={style.headingTxt}>Select token</Text>
                <Image source={IconConstants.modalCross} style={style.modalCross} />
            </View>

            <Text style={style.recentTxt}>Recent</Text>
            <View style={style.recentCoinContainer}>
                {recentData.map((item, index) => (
                    <View key={index} style={style.recentCoinView}>
                        <Image source={item.icon} style={style.recentCoinIcon} />
                        <Text style={style.recentCoinTxt}>{item.name}</Text>
                    </View>
                ))}
            </View>

            <Text style={style.receiveTxt}>Receive</Text>
            <View style={style.receiveCoinContainer}>
                {receiveData.map((item, index) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            onPress={() => setSelectedId(item.id)}
                        >
                            <View style={[style.receiveCoinView, {
                                borderColor: isSelected ? ColorConstants.BTNCOLOR : 'transparent',
                                borderWidth: isSelected ? scale(1) : 0,
                                padding: isSelected ? scale(8) : 0,
                                marginBottom: isSelected ? scale(16) : scale(24),
                            }]}>
                                <Image source={item.icon} style={style.receiveCoinIcon} />
                                <Text style={style.receiveCoinTxt}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={style.buttonContainer}>
                <CustomButton
                    disable={false}
                    title="Deposit"
                    bgColor={selectedId ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
                    txtColor={selectedId ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT}
                    width={343}
                    topHeight={28}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log("Deposit")}
                />
            </View>
        </SafeAreaView>
  )
}

export default SelectToken