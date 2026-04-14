import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import BackHeader from '../../../../components/backHeader/BackHeader'
import { IconConstants } from '../../../../constants/iconConstants'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'

const ChangePassword = () => {
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Change Password</Text>
        <View style={style.emailContainer}>
          <Text style={style.currentEmailTxt}>Current password</Text>
          <View style={style.emailView}>
            <Text style={style.emailTxt}>Dvn12345A#</Text>
          </View>
        </View>
        <CustomButton
          disable={false}
          title="Change Password"
          fontfamily={Fontconstants.SEMIBOLD}
          fontsize={14}
          width={343}
          topHeight={8}
          onPress={() => console.log('Change Password')}
        />
      </View>
    </SafeAreaView>
  )
}

export default ChangePassword