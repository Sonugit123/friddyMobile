import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { scale } from '../../utils/scale';
import { style } from './style';
import { ColorConstants } from '../../constants/colorConstants';

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
  rightLabelColor: string;
  tokenType: string;
}
const InputBoxSellCrypto = (props: Partial<prop>) => {
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
    rightLabelColor,
    tokenType,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const leftPadding = tokenType
  ? scale(tokenType.length * scale(10) + scale(10))
  : scale(30);
  return (
    <View style={{ marginTop: scale(topHeight!) }}>
      <View style={style.labelContainer}>
        <Text style={[style.inputBoxLabel]}>{label}</Text>
        <Text style={[style.labelText, { color: rightLabelColor }]}>
          {rightLabel}
        </Text>
      </View>
      <View>
        <TextInput
          style={[
            style.inputBox,
            { width: width || '100%',paddingLeft: leftPadding, },
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
        {tokenType ? (
          <View style={style.eyeIconView}>
            <Text style={style.dollarTxt}>{tokenType}</Text>
          </View>
        ) : (
          <View style={style.eyeIconView}>
            <Text style={style.dollarTxt}>$</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputBoxSellCrypto;
