import { View, Text, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import InputBox from '../../../../components/inputBox/InputBox';
import CustomButton from '../../../../components/customButton/CustomButton';
import { Fontconstants } from '../../../../constants/fontConstants';
import { validatePassword } from '../../../../utils/passwordValidator';
import { IconConstants } from '../../../../constants/iconConstants';

const ChangeOldPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const { rules, isValid } = useMemo(
    () => validatePassword(password, confirm),
    [password, confirm],
  );

  const ruleList = [
    { text: 'Minimum 8 characters', valid: rules.length },
    { text: 'Uppercase letter', valid: rules.uppercase },
    { text: 'Special character', valid: rules.special },
    { text: 'Passwords match', valid: rules.match },
  ];
  const createNewPassword = () => {
    console.log('createNewPassword');
  };
  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Change password</Text>
        <Text style={style.subHeading}>
          Please type in the new email you want to verify
        </Text>
        <InputBox
          password={true}
          value={password}
          onChangeText={setPassword}
          placeholder={'Minimum 8 characters'}
          label="Password"
          topHeight={16}
        />
        <InputBox
          password={true}
          value={confirm}
          onChangeText={setConfirm}
          placeholder={'Minimum 8 characters'}
          label="Confirm password"
          topHeight={16}
        />
        <Text style={style.infoText}>
          Create a password with at least 8 characters, including at least one
          uppercase letter, and one special character.
        </Text>

        <View style={style.ruleListView}>
          {ruleList.map((rule, index) => (
            <View key={index} style={style.checkView}>
              <Image
                source={
                  rule.valid ? IconConstants.tickMark : IconConstants.crossMark
                }
                style={style.checkIcon}
              />
              <Text>{rule.text}</Text>
            </View>
          ))}
        </View>
        <CustomButton
          disable={false}
          title="Confirm"
          width={343}
          topHeight={32}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={createNewPassword}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeOldPassword;
