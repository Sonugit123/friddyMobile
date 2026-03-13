import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { style } from './style'
import * as Progress from "react-native-progress";
import { scale } from '../../utils/scale';
import { ColorConstants } from '../../constants/colorConstants';
import { IconConstants } from '../../constants/iconConstants';

interface customButton {
    heading: string;
    subHeading: string;
    progress: number;
    bgColor: string;
    icon: ImageSourcePropType;
    txtColor: string;
}

const InfoDashboard = (props: customButton) => {
    const { heading, subHeading, progress, bgColor, icon, txtColor } = props;
    return (
        <View style={[style.container, { backgroundColor: bgColor }]}>
            <View style={style.headingContainer}>
            <Text style={[style.heading,{color: txtColor}]}>{heading}</Text>
            <Image source={IconConstants.wave} style={style.waveIcon} />
            </View>
            <Text style={[style.subHeading,{color: txtColor}]}>{subHeading}</Text>
            <View style={style.progressAndIconContainer}>
                <View style={style.progressContainer}>
                    <Progress.Bar
                        progress={progress}
                        width={scale(50)}
                        height={scale(7)}
                        color={ColorConstants.WARNING_TXT}
                        unfilledColor={ColorConstants.UNFILLED_PROGRESS}
                        borderWidth={0}
                        borderRadius={5}
                    />
                    <Text style={[style.progressTxt,{color: txtColor}]}>20%</Text>
                </View>
                <View style={style.iconContainer}>
                    <Image source={icon} style={style.arrowIcon} />
                </View>
            </View>
        </View>
    )
}

export default InfoDashboard