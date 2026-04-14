import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

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
    infoIcon: {
        width: scale(18),
        height: scale(18),
    },
    infoIconView: {
        width: scale(32),
        height: scale(32),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(30),
    },
    activityTypeTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    infoIconAndTxtView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    infoIconAndActivityTypeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginActivityView: {
        width: scale(343),
        height: scale(90),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        padding: scale(12),
    },
    timeTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    timeAndIpView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    disableAccountTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        textAlign: 'center',
        paddingHorizontal: scale(15),
        marginTop: scale(16),
    },
    deviceHeadingTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    sessionHeadingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    revokeAllTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    revokeAllBtnView: {
        width: scale(60),
        height: scale(18),
        backgroundColor: ColorConstants.BACKARROWBG,
        borderRadius: scale(4),
    },
    sessionHeadingAndBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale(26),
    },
    sessionContainer: {
        width: scale(343),
        height: scale(124),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        padding: scale(12),
        marginTop: scale(16),
    },
    signedInTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    signedInAndTimeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    systemTypeTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    revokeBtnView: {
        width: scale(50),
        height: scale(24),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.PROFILE_ICON_BG,
        alignItems: 'center',
        justifyContent: 'center',
    },
    revokeTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    infoIconAndRevokeBtnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale(16),
    },
    deviceTypeTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    deviceTypeAndLocationView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(16),
    }
})