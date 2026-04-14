import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './style';
import { IconConstants } from '../../constants/iconConstants';
import { ColorConstants } from '../../constants/colorConstants';
import { scale } from '../../utils/scale';

interface Props {
  data: any[];
  open: boolean;
  setOpen: (v: boolean) => void;
  selected: string;
  setSelected: (v: string) => void;
  closeOther?: () => void;
  width?: number;
  height?: number;
  bgColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  placeholder?: string;
  iconColor?: string;
  dropDownBoxMarginTop?: number;
}

const CustomDropDownOpenBox = ({
  data,
  open,
  setOpen,
  selected,
  setSelected,
  closeOther,
  width,
  height,
  bgColor,
  borderWidth,
  borderColor,
  borderRadius,
  placeholder,
  iconColor,
  dropDownBoxMarginTop,
}: Props) => {
  return (
    <>
      <TouchableOpacity
        style={[
          style.dropDownView,
          {
            backgroundColor: open
              ? ColorConstants.SIGNIN_BOX
              : bgColor ? bgColor : ColorConstants.BACKARROWBG,
              width: width ? scale(width) : scale(167),
              height: height ? scale(height) : scale(40),
              borderWidth: borderWidth ? scale(borderWidth) : 0,
              borderColor: borderColor ? borderColor : ColorConstants.BORDER_COLOR,
              borderRadius: borderRadius ? borderRadius : scale(4),
          },
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setOpen(!open);
          closeOther?.();
        }}
      >
        <Text
          style={[
            style.dropDownTxt,
            // {
            //   color: open
            //     ? ColorConstants.BTNCOLOR
            //     : ColorConstants.BLACK,
            // },
                {
      color: selected
        ? (open ? ColorConstants.BTNCOLOR : ColorConstants.BLACK)
        : ColorConstants.GRAY_LABEL,
    },
          ]}
        >
          {/* {selected} */}
            {selected || placeholder}

        </Text>

        <Image
          source={IconConstants.downArrow}
          style={[
            style.arrowIcon,
            {
              transform: [{ rotate: open ? '180deg' : '0deg' }],
              tintColor: open
                ? ColorConstants.BTNCOLOR
                : iconColor ? iconColor : ColorConstants.BLACK,
            },
          ]}
        />
      </TouchableOpacity>

      {open && (
        <View style={[style.dropDownBox, { marginTop: dropDownBoxMarginTop ? scale(dropDownBoxMarginTop) : scale(0) }]}>
          {data.map(item => {
            const isSelected = selected === item.title;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  style.drowDownRowView,
                  isSelected && {
                    backgroundColor: ColorConstants.BACKARROWBG,
                  },
                ]}
                onPress={() => {
                  setSelected(item.title);
                  setOpen(false);
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={style.dropDownValue}>
                    {item.title}
                  </Text>

                  {item.icon && (
                    <Image
                      source={item.icon}
                      style={{
                        width: 16,
                        height: 16,
                        marginLeft: 8,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default CustomDropDownOpenBox;