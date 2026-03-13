
import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
        flex: 1,
        paddingHorizontal: scale(8),
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
    },
    subHeadingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(14),
    },
    usdcBaseNetwork: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
        bottom: scale(0),
        right: scale(0),
    },
    usdcCoin: {
        width: scale(56),
        height: scale(56),
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingTxtContainer: {
        marginTop: scale(8),
    }
})