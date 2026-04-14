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
    onlyTokensTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        width: scale(320),
    },
    yourTokensTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(14),
    },
    selectMultipleTokensTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(4),
    },
    tokenIcon: {
        width: scale(42),
        height: scale(42),
    },
    tokenNameTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tokenTypeTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    tokenTypeValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tokenValueTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    tokenNameView: {

    },
    tokenValueView: {
        alignItems: 'flex-end',
    },
    tokenIconAndNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
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
    tokenValueAndPlusIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(24),
    },
    tokenContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    cancelIcon: {
        width: scale(12),
        height: scale(12),
        tintColor: ColorConstants.BTNCOLOR,
    },
    cancelIconView: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(16),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: scale(16),
    },
    sellPriceView: {
        height: scale(116),
        borderRadius: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        padding: scale(12),
        gap: scale(16),
        marginTop: scale(8),
    },
    sellPriceTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    sellPriceValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    sellPriceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
        arrowRight: {
        width: scale(15),
        height: scale(15),
        tintColor: ColorConstants.BLACK,
    },
    arrowRightView: {
        width: scale(18),
        height: scale(18),
        borderRadius: scale(18),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorConstants.SIGNIN_BOX,
        position: 'absolute',
        bottom: scale(10),
        right: scale(10),
    },
        inputPercentView: {
        width: scale(45),
        height: scale(24),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputPercentTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    inputPercentContainer: {
        flexDirection: 'row',
        gap: scale(8),
        marginTop: scale(8),
        justifyContent: 'flex-end',
    },
})