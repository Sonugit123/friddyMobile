import { Platform, StyleSheet } from "react-native";
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
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
        marginTop: scale(16),
    },
    profileIconView: {
        width: scale(88),
        height: scale(88),
        borderRadius: scale(64),
        backgroundColor: '#E74C3C26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIconTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.BOLD,
        ...getTextStyle(24),
    },
    profileBtnAndTxtView: {
        width: scale(231),
    },
    profileBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    uploadBtnView: {
        width: scale(107.5),
        height: scale(32),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.UPLOAD_BTN,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadBtnTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    saveBtnView: {
        width: scale(107.5),
        height: scale(32),
        borderRadius: scale(4),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        backgroundColor: ColorConstants.BACKARROWBG,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveBtnTxt: {
        color: ColorConstants.VERIFY_BTN_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    fileSizeTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
        marginTop: scale(8),
    },
    profileIconAndBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(34),
    },
    profileSettingsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        marginTop: scale(34),
    },
    verifyEmailView: {
        width: scale(196),
        height: scale(32),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.UPLOAD_BTN,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
        alignSelf: 'flex-end',
        marginTop: scale(8),
    },
    verifyEmailTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    arrowRightIcon: {
        tintColor: ColorConstants.BTNCOLOR,
        width: scale(18),
        height: scale(18),
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: Platform.OS == "android" ? scale(24) : scale(6),
        width: scale(343),
    }
    
})