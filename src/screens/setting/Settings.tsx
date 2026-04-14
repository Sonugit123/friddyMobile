import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import { style } from './style';
import { IconConstants } from '../../constants/iconConstants';
import { scale } from '../../utils/scale';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation<any>();
  const accountSecurityData = [
    {
      id: 1,
      label: 'Phone Verification',
      icon: IconConstants.phone,
      value: '+80****9461',
      statusIcon: IconConstants.tickMark,
      btnType: 'Change',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 2,
      label: 'Email Verification',
      icon: IconConstants.email,
      value: 'User@gmail.com',
      statusIcon: IconConstants.tickMark,
      btnType: 'Change',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 3,
      label: 'Password',
      icon: IconConstants.lock,
      value: '********',
      statusIcon: null,
      btnType: 'Change',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 4,
      label: 'Enable Google Authenticator',
      icon: IconConstants.googleAuthenticator,
      value: 'Enabled',
      statusIcon: IconConstants.tickMark,
      btnType: 'Manage',
      trashIcon: IconConstants.trash,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 5,
      label: 'Identity Verification',
      icon: IconConstants.userIdentity,
      value: 'Not verified',
      statusIcon: IconConstants.crossMark,
      btnType: 'Verify',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 6,
      label: 'Login Passcode',
      icon: IconConstants.loginPasscode,
      value: 'Not set',
      statusIcon: IconConstants.crossMark,
      btnType: 'Set',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 7,
      label: 'Device Manager',
      icon: IconConstants.deviceManager,
      value: '3 devices connected',
      statusIcon: null,
      btnType: 'Manage',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
    {
      id: 8,
      label: 'Account Activity',
      icon: IconConstants.loginActivity,
      value: 'Last login :  5/9/25 @3:53pm',
      statusIcon: null,
      btnType: 'Manage',
      trashIcon: null,
      navigateTo: 'ChangePhoneNumber',
    },
  ];
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.accountSecurityTxt}>Account security</Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {accountSecurityData.map(item => (
            <View key={item.id} style={style.accountSecurityContainer}>
              <View style={style.labelView}>
                <Image source={item.icon} style={style.labelIcon} />
                <Text style={style.labelTxt}>{item.label}</Text>
              </View>
              <View style={style.inputBoxContainer}>
                <View style={style.inputBoxView}>
                  <Text style={style.inputBoxTxt}>{item.value}</Text>
                  <Image source={item.statusIcon} style={style.tickMarkIcon} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
                  <View style={style.manageBtnView}>
                    <Text style={style.manageBtnTxt}>{item.btnType}</Text>
                  </View>
                </TouchableOpacity>
                {item.trashIcon && (
                  <TouchableOpacity>
                    <View style={style.trashView}>
                      <Image source={item.trashIcon} style={style.trashIcon} />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
          <View style={style.suspiciousAccountView}>
            <Text style={style.suspiciousAccountTxt}>
              Suspicious Account Activity ?
            </Text>
            <Text style={style.disableAccountTxt}>Disable Account</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
