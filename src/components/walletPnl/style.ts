import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
        eyeIcon: {
            width: scale(16),
            height: scale(16),
        },
        showChartView: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: scale(8),
            backgroundColor: ColorConstants.SIGNIN_BOX,
            width: scale(117),
            height: scale(24),
            justifyContent: 'center',
        },
        pnlContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        pnlText: {
            color: ColorConstants.GRAY_LABEL,
            fontFamily: Fontconstants.MEDIUM,
            ...getTextStyle(14),
        },
        showChartTxt: {
            color: ColorConstants.BTNCOLOR,
            fontFamily: Fontconstants.MEDIUM,
            ...getTextStyle(14),
        },
})