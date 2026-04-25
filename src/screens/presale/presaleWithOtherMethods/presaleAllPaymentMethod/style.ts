import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { Fontconstants } from "../../../../constants/fontConstants";
import { getTextStyle, scale } from "../../../../utils/scale";

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
    popularMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    paymentMethodView: {
        height: scale(32),
        borderRadius: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        paddingLeft: scale(4),
        paddingRight: scale(8),
    },
    popularIcon: {
        width: scale(24),
        height: scale(24),
    },
    popularMethodNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    popularMethodContainer: {
        flexDirection: 'row',
        gap: scale(8),
        marginTop: scale(8),
    },
    allPaymentMethodView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(12),
    },
    paymentIconView: {
        width: scale(24),
        height: scale(24),
        borderRadius: scale(4),
        backgroundColor: ColorConstants.UPLOAD_BTN
    },
    allPaymentMethodNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
})