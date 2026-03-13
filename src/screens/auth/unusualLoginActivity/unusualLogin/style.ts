import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    unusualIcon: {
        width: scale(32),
        height: scale(32),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(24),
    },
    subHeadingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
        width: scale(312),
    },
    subHeadingTxtBold: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    }
})