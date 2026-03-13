import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./style";
import { ColorConstants } from "../../constants/colorConstants";

const SelectDayYear = ({ data }: any) => {
  const [selected, setSelected] = useState("1H");
  return (
    <View style={style.listMainContainer}>
      {data.map((item: string, index: any) => (
        <View key={item}>
          <TouchableOpacity onPress={() => {setSelected(item);
            }
          }>
            <View style={[style.listContainer, { backgroundColor: selected == item ?  ColorConstants.UNFILLED_PROGRESS : "transparent" }]}>
              <Text style={[style.listText, { color: selected == item ? ColorConstants.BLACK: ColorConstants.GRAY_LABEL }]}>{item}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SelectDayYear;
