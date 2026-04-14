import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { style } from './style';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import { scale } from '../../../../utils/scale';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';

const AddCommunicationMethods = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const communicationMethod = [
    {
      id: '1',
      icon: IconConstants.textMessage,
      name: 'Text',
    },
    {
      id: '2',
      icon: IconConstants.whatsApp,
      name: 'Whatsapp',
    },
    {
      id: '3',
      icon: IconConstants.telegram,
      name: 'Telegram',
    },
    {
      id: '4',
      icon: IconConstants.messenger,
      name: 'Messenger',
    },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Add Communication Method</Text>
        {communicationMethod.map((item, index) => {
          const isSelected = selectedId === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => setSelectedId(item.id)}
            >
              <View
                key={index}
                style={[
                  style.communicationMethodView,
                  {
                    borderColor: isSelected
                      ? ColorConstants.BTNCOLOR
                      : 'transparent',
                    borderWidth: isSelected ? scale(1) : 0,
                    padding: isSelected ? scale(8) : 0,
                  },
                ]}
              >
                <Image source={item.icon} style={style.iconStyle} />
                <Text style={style.communicationMethodTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
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
          onPress={() => console.log('Proceed')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCommunicationMethods;
