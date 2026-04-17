import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    makePaymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    makePaymentTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    makePaymentIcon: {
        width: scale(24),
        height: scale(24),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    transactionComplete: {
        width: scale(327),
        height: scale(120),
        backgroundColor: ColorConstants.SUCCESS_BOX_BG,
        borderRadius: scale(8),
        padding: scale(16),
        marginTop: scale(24),
    },
    transactionCompleteTxt: {
        color: ColorConstants.GREEN_DOT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyCoin: {
        width: scale(32),
        height: scale(32),
    },
    friddyCoinTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    friddyCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    depositTick: {
        width: scale(18),
        height: scale(18),
    },
    friddyCoinAndTickView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scale(8),
    },
    friddyFeesTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesValue: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    friddyFeesView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sentToTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    profileIconView: {
        width: scale(32),
        height: scale(32),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIconTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    profileNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    profileIconAndNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    emailIcon: {
        width: scale(18),
        height: scale(18),
        tintColor: ColorConstants.BTNCOLOR,
    },
    checkYourInboxView: {
        width: scale(327),
        height: scale(40),
        backgroundColor: ColorConstants.SUCCESS_BOX_BG,
        borderRadius: scale(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
        marginTop: scale(24),
    },
    checkYourInboxTxt: {
        color: ColorConstants.GREEN_DOT,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
    },
    checkIcon: {
        width: scale(18),
        height: scale(18),
        tintColor: ColorConstants.GREEN_DOT,
    },
    seeOnBlockExplorerTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: scale(8),
    },
    orTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
        alignSelf: 'center',
        // marginTop: scale(16),
    },
    newToFriddyTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
        alignSelf: 'center',
        marginTop: scale(24),
    },
    signUpTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    btnView: {
        width: scale(327),
        height: scale(48),
        borderWidth: scale(1),
        borderRadius: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnIcon: {
        width: scale(24),
        height: scale(24),
    },
    btnTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(14),
        width: scale(271),
        textAlign: 'center',
    },
    btnContainer: {
        gap: scale(16),
        marginTop: scale(24),
    }
})