import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/colorConstants";
import { getTextStyle, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";

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
    addPaymentMethod: {
        width: scale(24),
        height: scale(24),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20)
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    setupInfoTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(16),
    },
    accountDetailsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(16),
        ...getTextStyle(14),
    },
    profileIconView: {
        width: scale(46),
        height: scale(46),
        borderRadius: scale(46),
        backgroundColor: ColorConstants.BACKARROWBG,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIconTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    nameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
    },
    verifiedBadgeIcon: {
        width: scale(18),
        height: scale(18),
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    friddyIdTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    friddyIdValueTxt: {
        color: ColorConstants.BTNCOLOR,
        textDecorationLine: 'underline',
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    copyIcon: {
        width: scale(14),
        height: scale(14),
    },
    friddyIdRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(4),
    },
    nameAndFriddyIdView: {
        flex: 1,
    },
    profileIconAndNameAndFriddyIdView: {
        flexDirection: 'row',
        gap: scale(8),
        marginTop: scale(8),
    },
    switchBtnTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    switchBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    addPaymentMethodTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    infoIcon: {
        width: scale(14),
        height: scale(14),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    addPaymentMethodRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(32),
    },
    paymentMethodView: {
        width: scale(103),
        height: scale(32),
        borderRadius: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(4),
    },
    paymentMethodIcon: {
        width: scale(24),
        height: scale(24),
    },
    paymentMethodNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    plusIconView: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(16),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusIcon: {
        width: scale(16),
        height: scale(16),
        tintColor: ColorConstants.BLACK,
    },
    paymentMethodIconAndNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: scale(8),
        marginTop: scale(8),
    },
    searchMoreView: {
        width: scale(103),
        height: scale(32),
        borderRadius: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.QR_BOX_BG,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        paddingHorizontal: scale(4),
    },
    searchIcon: {
        width: scale(14),
        height: scale(14),
        tintColor: ColorConstants.BTNCOLOR,
    },
    searchMoreTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    crossIcon: {
                width: scale(12),
        height: scale(12),
        tintColor: ColorConstants.WHITE,
    },
    crossIconView: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(16),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorConstants.GET_CODE,
    }
})