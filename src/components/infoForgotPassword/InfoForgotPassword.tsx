import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../header/Header';
import CustomButton from '../customButton/CustomButton';
import { Fontconstants } from '../../constants/fontConstants';

interface Props {
    title: string;
    highlightText: string;
    description: string;
    buttonText: string;
    icon: any;
    onPress: () => void;
}

const InfoForgotPassword = ({
  title,
  highlightText,
  description,
  buttonText,
  icon,
  onPress,
}: Props) => {
  return (
 <SafeAreaView style={style.safeAreaStyle}>
      <View style={style.container}>
        <Header />

        <Text style={style.welcomeText}>{title}</Text>

        <View style={style.emailSentView}>
          <Text style={style.emailSentText}>{highlightText}</Text>
          <Image source={icon} style={style.checkIcon} />
        </View>

        <Text style={style.emailText}>{description}</Text>

        <CustomButton
          disable={false}
          title={buttonText}
          width={343}
          topHeight={24}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  )
}

export default InfoForgotPassword