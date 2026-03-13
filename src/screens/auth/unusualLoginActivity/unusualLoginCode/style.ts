import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        backgroundColor: ColorConstants.WHITE,
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
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    subHeadingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    subHeadingTxtBold: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(5),
        marginTop: scale(8),
        justifyContent: 'flex-end',
    },
    timeTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    resendTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        textDecorationLine: 'underline',
        ...getTextStyle(14),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    }
})