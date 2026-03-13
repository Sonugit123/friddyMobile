import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ColorConstants } from '../../constants/colorConstants';
import { scale } from '../../utils/scale';
import { IconConstants } from '../../constants/iconConstants';
import { style } from './style';

interface prop {
    placeholder: string;
    onChangeText: (text: string) => void;
    // value: string | number;
    value: string;
    error: string;
    password: boolean;
    width: number;
    topHeight: number;
    keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    label: string;
    rightLabel: string;
}

const InputBoxMoney = (props: Partial<prop>) => {
    const {
        placeholder,
        onChangeText,
        value,
        error,
        password,
        width,
        topHeight,
        keyboardType,
        autoCapitalize,
        label,
        rightLabel,
    } = props;
      const [showPassword, setShowPassword] = useState(password);
      const [isFocused, setIsFocused] = useState(false);
    return (
    <View style={{ marginTop: scale(topHeight!)}}>
        <View style={style.labelContainer}>
      <Text style={[style.inputBoxLabel]}>{label}</Text>
      <Text style={style.labelText}>{rightLabel}</Text>
        </View>
      <View>
        <TextInput
          style={[
            style.inputBox,
            { width: width || '100%' },
            isFocused && { borderColor: ColorConstants.BTNCOLOR },
            // error ? style.errorInputBox : null,
          ]}
          placeholder={placeholder}
          placeholderTextColor={ColorConstants.GRAY_LABEL}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={password}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
          <View style={style.eyeIconView}>
              <Text style={style.dollarTxt}>$</Text>
          </View>
          <View style={style.percentageContainer}>
            <View style={style.percentageView}>
                <Text style={style.percentageTxt}>25%</Text>
            </View>
            <View style={style.percentageView}>
                <Text style={style.percentageTxt}>50%</Text>
            </View>
            <View style={style.percentageView}>
                <Text style={style.percentageTxt}>100%</Text>
            </View>
          </View>
      </View>
    </View>
    )
}

export default InputBoxMoney