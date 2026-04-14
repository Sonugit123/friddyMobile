import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import { IconConstants } from '../../../constants/iconConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../constants/fontConstants';

const tipdaData = [
  {
    id: 1,
    title: 'Take photo with neutral expressions',
  },
  {
    id: 2,
    title: 'Make sure whole face visible, centered and eyes are open',
  },
  {
    id: 3,
    title: 'DO NOT use Screenshots of any ID or passport document ',
  },
  {
    id: 4,
    title: 'DO NOT alter appearance ',
  },
];

const KycSelfie = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <BackHeader />
      <View style={style.infoBox}>
        <Text style={style.infoTxt}>Please center your face in the circle</Text>
      </View>
      <View style={style.cameraFrame}></View>
      <View style={style.tipsContainer}>
        <View style={style.tipsHeaderView}>
          <Image source={IconConstants.infoIcon} style={style.infoIcon} />
          <Text style={style.tipsTxt}>Here are some tips </Text>
        </View>
        {tipdaData.map(item => (
          <View
            key={item.id}
            style={[
              style.tipsRow,
              { marginTop: item.id === 1 ? scale(8) : scale(16) },
            ]}
          >
            <Text style={style.numTxt}>{item.id}.</Text>
            <Text style={style.tipsTxt}>{item.title}</Text>
          </View>
        ))}
      </View>
      <CustomButton
        disable={false}
        title="Next"
        width={343}
        topHeight={16}
        fontsize={14}
        fontfamily={Fontconstants.SEMIBOLD}
        onPress={() => console.log('Continue')}
      />
    </SafeAreaView>
  );
};

export default KycSelfie;
