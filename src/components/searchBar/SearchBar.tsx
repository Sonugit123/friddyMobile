import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { scale } from '../../utils/scale'
import { style } from './style'
import { ColorConstants } from '../../constants/colorConstants'
import { IconConstants } from '../../constants/iconConstants'

interface prop {
    placeholder: string;
    onChangeText: (text: string) => void;
    // value: string | number;
    value: string;
    width: number;
    topHeight: number;
    keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
}
const SearchBar = (props: Partial<prop>) => {
    const {
        placeholder,
        onChangeText,
        value,
        width,
        topHeight,
        keyboardType,
        autoCapitalize,
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={{ marginTop: scale(topHeight!) }}>
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
                // secureTextEntry={password}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <View style={style.searchIconView}>
                <TouchableOpacity>
                    <Image
                        style={style.searchIcon}
                        source={IconConstants.search}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar