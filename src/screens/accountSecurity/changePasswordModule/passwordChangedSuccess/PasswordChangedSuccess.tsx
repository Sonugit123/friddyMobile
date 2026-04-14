import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { IconConstants } from '../../../../constants/iconConstants'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const PasswordChangedSuccess = () => {
  return (
   <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Password changed Successfully</Text>
        <View style={style.tickMarkContainer}>
          <Image source={IconConstants.check} style={style.tickMark} />
        </View>
        <Text style={style.subHeading}>
          You will be logged out once you close this page and asked to log in again
        </Text>
        <CustomButton
          disable={false}
          title="Done"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={16}
          onPress={() => console.log('Done')}
        />
      </View>
    </SafeAreaView>
  )
}

export default PasswordChangedSuccess