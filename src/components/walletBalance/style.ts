import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";
import { getTextStyle, scale } from "../../utils/scale";

export const style = StyleSheet.create({
  container: {

  },
  walletBalanceTxt: {
    color: ColorConstants.GRAY_LABEL,
    fontFamily: Fontconstants.MEDIUM,
    ...getTextStyle(14),
  },
  walletBalanceAmount: {
    color: ColorConstants.BLACK,
    fontFamily: Fontconstants.REGULAR,
    ...getTextStyle(30),
  },
  amountContainer: {
    flexDirection: 'row',
    gap: scale(8),
    marginTop: scale(8),
  },
  walletEyeClose: {
    width: scale(32),
    height: scale(32),
  },
  dailyAmount: {
    color: ColorConstants.GRAY_Heading,
    fontFamily: Fontconstants.REGULAR,
    ...getTextStyle(12),
  },
  dailyPercentage: {
    color: ColorConstants.GRAY_Heading,
    fontFamily: Fontconstants.REGULAR,
    ...getTextStyle(12),
  },
  dailyContainer: {
    flexDirection: 'row',
    gap: scale(8),
    alignItems: 'center',
    marginTop: scale(8),
  },
  dailyAmtView: {

  },
  dailyPercentageView: {
    width: scale(63),
    height: scale(24),
    borderRadius: scale(32),
    backgroundColor: ColorConstants.BACKARROWBG,
    alignItems: 'center',
    justifyContent: 'center',
  }
})