import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/Header'
import BackHeader from '../../../components/backHeader/BackHeader'
import { style } from './style'
import { IconConstants } from '../../../constants/iconConstants'
import CustomButton from '../../../components/customButton/CustomButton'
import { ColorConstants } from '../../../constants/colorConstants'
import { Fontconstants } from '../../../constants/fontConstants'
import ConvertSelectToken from '../selectToken/ConvertSelectToken'

const ConvertEmpty = () => {
    const [selectedBox, setSelectedBox] = useState<"from" | "to" | null>(null);
    const [value, setValue] = useState("");
    const [selectedToken, setSelectedToken] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [toValue, setToValue] = useState(1.00);

    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <View style={style.container}>
                <BackHeader />
                <View style={style.headingContainer}>
                    <Text style={style.headingTxt}>Convert</Text>
                    {/* <Image source={IconConstants.modalCross} style={style.modalCross} /> */}
                </View>
                <TouchableOpacity onPress={() => setSelectedBox("from")}>
                    <View style={[
                        style.fromContainer,
                        {
                            borderColor:
                                selectedBox === "from"
                                    ? ColorConstants.BTNCOLOR
                                    : ColorConstants.TO_CONTAINER,
                        },
                    ]}>
                        <Text style={style.fromTxt}>From</Text>
                        <View style={style.fromView}>
                            {/* <Text style={style.fromValue}>0.00</Text> */}
                            <TextInput
                                style={[
                                    style.inputBox,
                                ]}
                                placeholder={'0.00'}
                                placeholderTextColor={ColorConstants.GRAY_LABEL}
                                onChangeText={(text) => setValue(text)}
                                value={value}
                                keyboardType='numeric'
                            />
                            <TouchableOpacity
                                style={style.coinView}
                                onPress={() => setModalVisible(true)}
                            >
                                <Image
                                    source={selectedToken?.icon || IconConstants.friddyCoin}
                                    style={style.coinStyle}
                                />

                                <Text>
                                    {selectedToken?.type || "FRIDDY"}
                                </Text>
                                <Image source={IconConstants.downArrow} style={style.downArrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={style.fromValueView}>
                            <Text style={style.amtTxt}>$0.00</Text>
                            <Text style={style.amtTxt}>36.40($100.00)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedBox("to")}>
                    <View style={[
                        style.toContainer,
                        {
                            borderColor:
                                selectedBox === "to"
                                    ? ColorConstants.BTNCOLOR
                                    : ColorConstants.TO_CONTAINER,
                        },
                    ]}>
                        <Text style={style.toTxt}>To</Text>
                        <View style={style.fromView}>
                            <View style={style.toValueView}>
                                <Text style={[style.fromValue, { color: toValue > 0 ? ColorConstants.BTNCOLOR : ColorConstants.GRAY_LABEL }]}>{toValue}</Text>
                            </View>
                            <View style={style.coinView}>
                                <Image source={IconConstants.usdcCoin} style={style.coinStyle} />
                                <Text>USDC</Text>
                                <Image source={IconConstants.downArrow} style={style.downArrow} />
                            </View>
                        </View>
                        <View style={style.fromValueView}>
                            <Text style={style.amtTxt}>$0.00</Text>
                            <Text style={style.amtTxt}>36.40($100.00)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <CustomButton
                    disable={false}
                    title="Preview"
                    bgColor={toValue > 0 ? ColorConstants.BTNCOLOR : ColorConstants.BACKARROWBG}
                    txtColor={toValue > 0 ? ColorConstants.WHITE : ColorConstants.DISABLE_BTN_TXT}
                    width={327}
                    topHeight={24}
                    fontsize={14}
                    fontfamily={Fontconstants.SEMIBOLD}
                    onPress={() => console.log("Preview")}
                />
            </View>
            <Modal visible={modalVisible}
                animationType="slide"
                transparent>
                <ConvertSelectToken
                    onSelectToken={(token: any) => {
                        setSelectedToken(token)
                        setModalVisible(false)
                    }}
                />
            </Modal>
        </SafeAreaView>
    )
}

export default ConvertEmpty