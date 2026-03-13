import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

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
    warningContainer: {
        width: scale(327),
        height: scale(190),
        backgroundColor: ColorConstants.WARNING_CONTAINER,
        borderRadius: scale(8),
        marginTop: scale(24),
    },
    warningTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(20),
        marginLeft: scale(16),
        marginTop: scale(16),
    },
    warningSubTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
        width: scale(295),
        marginLeft: scale(16),
        marginTop: scale(8),
    },
    checkBoxFill: {
        width: scale(14),
        height: scale(14),
    },
    dontShowTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    dontShowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
        marginTop: scale(16),
    }
})