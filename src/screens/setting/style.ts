import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

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
    accountSecurityTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    accountSecurityContainer: {
        marginTop: scale(24),
    },
    labelIcon: {
        width: scale(18),
        height: scale(18),
    },
    labelTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    labelView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    tickMarkIcon: {
        width: scale(16),
        height: scale(16),
    },
    inputBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderWidth: scale(1),
        borderRadius: scale(8),
        borderColor: ColorConstants.BACKARROWBG,
        padding: scale(8),
        flex: 1,
    },
    inputBoxTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    manageBtnView: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        paddingVertical: scale(10),
        paddingHorizontal: scale(16),
    },
    manageBtnTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    trashIcon: {
        width: scale(24),
        height: scale(24),
    },
    trashView: {
        backgroundColor: ColorConstants.PROGRESS_RED_BORDER,
        padding: scale(8),
        borderRadius: scale(8),
    },
    inputBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    suspiciousAccountView: {
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    suspiciousAccountTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    disableAccountTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        textDecorationLine: 'underline',
    }
})