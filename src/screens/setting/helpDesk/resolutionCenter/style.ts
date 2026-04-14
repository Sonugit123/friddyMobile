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
        marginTop: scale(24),
    },
    casesTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    dropDownView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    reportedView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    customerResponseContainer: {
        width: scale(343),
        height: scale(154),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        marginTop: scale(16),
        padding: scale(16),
    },
    reportedTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    troublesTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(16),
    },
    newTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    newView: {
        width: scale(47),
        height: scale(24),
        backgroundColor: ColorConstants.BACKARROWBG,
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    troublesView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(10),
    },
    caseIdTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    copyIcon: {
        width: scale(18),
        height: scale(18),
    },
    caseIdView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(10),
    },
    pendingView: {
        backgroundColor: ColorConstants.PROFILE_ICON_BG,
        width: scale(210),
        height: scale(24),
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    pendingTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    rightArrow: {
        tintColor: ColorConstants.BLACK,
        width: scale(18),
        height: scale(18),
    },
    pendingViewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale(10),
    }
})