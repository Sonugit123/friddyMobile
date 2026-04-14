import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { scale } from '../../utils/scale';
import { IconConstants } from '../../constants/iconConstants';
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
  height: number;
}

const InputBox = (props: Partial<prop>) => {
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
    height,

  } = props;
  const [showPassword, setShowPassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginTop: scale(topHeight!)}}>
      <Text style={[style.inputBoxLabel,
        isFocused && { color: ColorConstants.BTNCOLOR}
      ]}>{label}</Text>
      <View>
        <TextInput
          style={[
            style.inputBox,
            { width: width ? scale(width) : '100%', height: height ? scale(height) : scale(52) },
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
        {password && (
          <View style={style.eyeIconView}>
            <TouchableOpacity>
              <Image
                style={style.eyeIcon}
                source={
                  showPassword
                    ? IconConstants.eyeClose
                    : IconConstants.eyeClose
                }
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputBox;
