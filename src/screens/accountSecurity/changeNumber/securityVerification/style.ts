import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(8),
        flex: 1,
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
        marginTop: scale(16),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(18),
        width: scale(320),
    },
    getCodeContainer: {
        width: scale(343),
        height: scale(48),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
        marginTop: scale(24),
    },
    getCodeTxt: {
        color: ColorConstants.GET_CODE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
    },
    timerContainer: {
        width: scale(50),
        height: scale(22),
        borderRadius: scale(24),
        backgroundColor: ColorConstants.BTNCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerTxt: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
})