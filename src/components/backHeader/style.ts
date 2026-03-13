import { StyleSheet } from "react-native";
import { fontScale, moderateScale, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(24),
  },
  arrowIconView: {
    width: scale(24),
    height: scale(24),
    backgroundColor: ColorConstants.BACKARROWBG,
    // backgroundColor: 'red',
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(8),
  },
  arrowIcon: {
    width: scale(18),
    height: scale(18),
  },
  backTxt: {
    color: ColorConstants.BLACK,
    fontSize: fontScale(14),
    fontFamily: Fontconstants.MEDIUM,
    textDecorationLine: 'underline',
  }
})