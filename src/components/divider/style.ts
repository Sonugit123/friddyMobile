import { StyleSheet } from "react-native";
import { fontScale, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    // flex: 1,
    height: scale(1),
    width: scale(111.6),
    backgroundColor: ColorConstants.DIVIDER_LINE,
  },
  text: {
    // marginHorizontal: 16,
    fontSize: fontScale(14),
    fontFamily: Fontconstants.MEDIUM,
    color: ColorConstants.GRAY_Heading,
  },
})