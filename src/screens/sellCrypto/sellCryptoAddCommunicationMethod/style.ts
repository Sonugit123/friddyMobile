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
    paypal2: {
        width: scale(24),
        height: scale(24),
    },
    paymentMethodTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    paymentMethodView: {
        // width: scale(83),
        height: scale(32),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderRadius: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        paddingLeft: scale(4),
        paddingRight: scale(8),
    },
    popularMethodTxt: {
        color:ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
        marginBottom: scale(8),
    },
    popularMethodContainer: {
        flexDirection: 'row',
        gap: scale(8),
    },
    paymentIconView: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.BACKARROWBG,
    },
    allPaymentTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    allPaymentMethodView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginBottom: scale(16),
    }
})