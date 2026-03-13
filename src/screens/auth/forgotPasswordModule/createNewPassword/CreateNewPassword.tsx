import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import { style } from './style'
import InputBox from '../../../../components/inputBox/InputBox'
import { IconConstants } from '../../../../constants/iconConstants'
import { validatePassword } from '../../../../utils/passwordValidator'
import CustomButton from '../../../../components/customButton/CustomButton'
import { Fontconstants } from '../../../../constants/fontConstants'


const CreateNewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const { rules, isValid } = useMemo(
        () => validatePassword(password, confirm),
        [password, confirm]
    );

    const ruleList = [
        { text: 'Minimum 8 characters', valid: rules.length },
        { text: 'Uppercase letter', valid: rules.uppercase },
        { text: 'Special character', valid: rules.special },
        { text: 'Passwords match', valid: rules.match },
    ];
    const createNewPassword = () => {
        console.log("createNewPassword");
    }
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={style.container}>
                    <Header />
                    <Text style={style.welcomeText}>Set New Password</Text>
                    <Text style={style.loginText}>Please create a new password to access your account.</Text>
                    <InputBox
                        password={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={'Enter new password'}
                        label="New password"
                        topHeight={16}
                    />
                    <InputBox
                        password={true}
                        value={confirm}
                        onChangeText={setConfirm}
                        placeholder={'Re-enter your new password'}
                        label="Confirm password"
                        topHeight={16}
                    />
                    <Text style={style.infoText}>Create a password with at least 8 characters, including at least one uppercase letter, and one special character.</Text>

                    <View style={style.ruleListView}>
                        {ruleList.map((rule, index) => (
                            <View key={index} style={style.checkView}>
                                <Image
                                    source={rule.valid ? IconConstants.tickMark : IconConstants.crossMark}
                                    style={style.checkIcon}
                                />
                                <Text>{rule.text}</Text>
                            </View>
                        ))}
                    </View>
                    <CustomButton
                        disable={false}
                        title="Create new password"
                        width={343}
                        topHeight={32}
                        fontsize={14}
                        fontfamily={Fontconstants.SEMIBOLD}
                        onPress={createNewPassword}
                    />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default CreateNewPassword