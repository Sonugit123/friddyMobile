import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import { fontScale, scale } from '../../utils/scale';
import { style } from './style';
import { Fontconstants } from '../../constants/fontConstants';
import { ColorConstants } from '../../constants/colorConstants';

interface customButton {
    title: string;
    onPress: () => void;
    width: number;
    disable: boolean;
    topHeight?: number;
    bgColor?: string;
    txtColor?: string;
    borderColor?: string;
    borderWidth?: number;
    fontsize?: number;
    fontfamily?: string;
    bordRadius?: number;

    leftImage?: ImageSourcePropType;
    rightImage?: ImageSourcePropType;
    imageSize?: number;
}
const CustomButton = (props: customButton) => {
    const { title, onPress, width, disable, topHeight, bgColor, txtColor, leftImage, rightImage, imageSize, borderColor, borderWidth, fontsize, fontfamily, bordRadius } = props;
    console.log("leftImage->",leftImage);
    
    return (
    <View style={{ marginTop: scale(topHeight || 0) }}>
        <TouchableOpacity
         disabled={disable}
         onPress={onPress}
         activeOpacity={0.8}
         style={[style.touchStyle, { width: scale(width), backgroundColor: bgColor || ColorConstants.BTNCOLOR, borderWidth: scale(borderWidth || 0), borderColor: borderColor || 'transparent', borderRadius: scale(bordRadius || 4) }]}
        >
            {leftImage && (
                <Image 
                source={leftImage}
                style={{ width: scale(imageSize || 24), height: scale(imageSize || 24), marginRight: scale(16) }}
                />
            )}
            <Text style={[style.titleTxt, { color: txtColor || ColorConstants.WHITE, fontSize: fontScale(fontsize || 16), fontFamily: fontfamily || Fontconstants.MEDIUM }]}>{title}</Text>
            {rightImage && (
                <Image 
                 source={rightImage}
                 style={{ width: scale(imageSize || 24), height: scale(imageSize || 24), marginLeft: scale(16) }}
                />
            )}
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton