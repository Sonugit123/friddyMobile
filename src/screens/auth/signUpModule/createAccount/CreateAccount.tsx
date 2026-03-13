import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/header/Header'
import BackHeader from '../../../../components/backHeader/BackHeader'
import { style } from './style'
import InputBox from '../../../../components/inputBox/InputBox'
import { validatePassword } from '../../../../utils/passwordValidator'
import { IconConstants } from '../../../../constants/iconConstants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale } from '../../../../utils/scale'
import { Fontconstants } from '../../../../constants/fontConstants'
import CustomButton from '../../../../components/customButton/CustomButton'

const CreateAccount = () => {
    const [password, setPassword] = useState('');

    const { rules, isValid } = validatePassword(password);

    const ruleList = [
        { text: 'Minimum 8 characters', valid: rules.length },
        { text: 'Uppercase letter', valid: rules.uppercase },
        { text: 'Special character', valid: rules.special },
    ];
    return (
        <SafeAreaView style={style.safeAreaStyle}>
            <Header />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAwareScrollView style={style.container}
                contentContainerStyle={{ paddingBottom: scale(60), flexGrow: 1 }}
                    extraScrollHeight={scale(60)}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <BackHeader />
                    <Text style={style.welcomeText}>Create an account </Text>
                    <Text style={style.loginText}>Let’s get you all set up so you can start enjoying friddy experience.</Text>
                    <InputBox
                        placeholder={'Email address'}
                        label="First name"
                        keyboardType="default"
                        autoCapitalize="none"
                        topHeight={24}
                    />
                    <InputBox
                        placeholder={'Last name'}
                        label="Last name"
                        keyboardType="default"
                        autoCapitalize="none"
                        topHeight={32}
                    />
                    <InputBox
                        placeholder={'Email address'}
                        label="Email address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        topHeight={32}
                    />
                    <InputBox
                        password={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={'Minimum 8 characters'}
                        label="Password"
                        topHeight={32}
                    />
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
                    <View style={style.agreeView}>
                        <Image source={IconConstants.checkBoxFill} style={style.checkBoxIcon} />
                        <Text style={style.agreeText}>I Certify that I am 18 years of age or older, and I agree to the <Text style={style.linkText}>User Agreement</Text> and <Text style={style.linkText}>Privacy Policy</Text></Text>
                    </View>
                    <CustomButton
                        disable={false}
                        title="Reset password"
                        width={343}
                        topHeight={32}
                        fontsize={14}
                        fontfamily={Fontconstants.SEMIBOLD}
                        onPress={() => console.log("create account")}
                    />
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default CreateAccount