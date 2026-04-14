import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../../components/header/Header';
import { style } from './style';
import BackHeader from '../../../../../components/backHeader/BackHeader';
import CustomButton from '../../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../../constants/fontConstants';
import { ColorConstants } from '../../../../../constants/colorConstants';

const DisableAccountInfo = () => {
  const infoPoints = [
    {
      id: 1,
      title:
        'All trading capacities and login for your account will be disabled.',
    },
    {
      id: 2,
      title: 'All API keys for your account will be deleted.',
    },
    {
      id: 3,
      title: 'All devices for your account will be deleted.',
    },
    {
      id: 4,
      title: 'All pending withdrawals will be canceled.',
    },
    {
      id: 5,
      title: 'All open orders will be canceled.',
    },
    {
      id: 6,
      title: 'Your verified information will not be deleted.',
    },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Disable Account ?</Text>
        <Text style={style.subHeading}>
          This is what happens when you disable your account.
        </Text>
        {infoPoints.map(item => (
          <View key={item.id} style={style.bulletRow}>
            <Text style={style.bullet}>•</Text>
            <Text style={style.infoTitle}>{item.title}</Text>
          </View>
        ))}
        <CustomButton
          disable={false}
          title="Yes"
          width={343}
          topHeight={16}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Yes')}
        />
        <CustomButton
          disable={false}
          title="No let me think about this"
          bgColor={ColorConstants.SIGNIN_BOX}
          txtColor={ColorConstants.BTNCOLOR}
          width={343}
          topHeight={16}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('No let me think about this')}
        />
      </View>
    </SafeAreaView>
  );
};

export default DisableAccountInfo;
