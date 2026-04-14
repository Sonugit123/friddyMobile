import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../../utils/scale";
import { ColorConstants } from "../../../../../constants/colorConstants";
import { Fontconstants } from "../../../../../constants/fontConstants";

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
        marginTop: scale(8),
        width: scale(320),
    },
    requestView: {
        width: scale(343),
        height: scale(48),
        backgroundColor: ColorConstants.SUCCESS_VIEW,
        borderRadius: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: scale(8),
        marginTop: scale(8),
    },
    successTxt: {
        color: ColorConstants.SUCCESS_Text,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    checkIcon: {
        width: scale(18),
        height: scale(20),
    }
})