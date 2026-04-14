import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './style';
import { ColorConstants } from '../../constants/colorConstants';
import { scale } from '../../utils/scale';

interface prop {
  onPress1: () => void;
  onPress2: () => void;
  selected: number;
  btn1: string;
  btn2: string;
  topHeight?: number;
  bgContainerColor?: string;
  heightContainer?: number;
  btnWidth?: number;
  btnHeight?: number;
  selectedBtnColor?: string;
  selectedTxtColor?: string;
  unSelectedTxtColor?: string;
}

const TapBtn = (props: prop) => {
  const {
    onPress1,
    onPress2,
    selected,
    btn1,
    btn2,
    topHeight,
    bgContainerColor,
    heightContainer,
    btnWidth,
    btnHeight,
    selectedBtnColor,
    selectedTxtColor,
    unSelectedTxtColor,
  } = props;
  const containerHeight = heightContainer ? scale(heightContainer) : scale(50);
  return (
    <View
      style={[
        style.container,
        {
          marginTop: topHeight ? scale(topHeight) : scale(0),
          backgroundColor: bgContainerColor || ColorConstants.SIGNIN_BOX,
          height: containerHeight,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress1}>
        <View
          style={[
            style.pressBtn,
            {
              backgroundColor:
                selected == 1
                  ? selectedBtnColor || ColorConstants.BTNCOLOR
                  : bgContainerColor || ColorConstants.SIGNIN_BOX,
              width: btnWidth ? scale(btnWidth) : scale(156),
              height: btnHeight ? scale(btnHeight) : scale(34),
            },
          ]}
        >
          <Text
            style={[
              style.btnTxt,
              {
                color:
                  selected == 1
                    ? selectedTxtColor || ColorConstants.WHITE
                    : unSelectedTxtColor || ColorConstants.GET_CODE,
              },
            ]}
          >
            {btn1}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <View
          style={[
            style.pressBtn,
            {
              backgroundColor:
                selected == 2
                  ? selectedBtnColor || ColorConstants.BTNCOLOR
                  : bgContainerColor || ColorConstants.SIGNIN_BOX,
              width: btnWidth ? scale(btnWidth) : scale(156),
              height: btnHeight ? scale(btnHeight) : scale(34),
            },
          ]}
        >
          <Text
            style={[
              style.btnTxt,
              {
                color:
                  selected == 2
                    ? selectedTxtColor || ColorConstants.WHITE
                    : unSelectedTxtColor || ColorConstants.GET_CODE,
              },
            ]}
          >
            {btn2}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TapBtn;
