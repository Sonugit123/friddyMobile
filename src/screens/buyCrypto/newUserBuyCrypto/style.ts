import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    minimumBuyTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(8),
    },
    coinIcon: {
        width: scale(24),
        height: scale(24),
    },
    coinContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
        // marginTop: scale(16),
        // backgroundColor: 'red',
    },
    coinView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        // width: scale(75.5),
        // height: scale(32),
        padding: scale(4),
        borderRadius: scale(32),
    },
    coinTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(32),
    },
    quickOptionTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    paymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        padding: scale(4),
        borderRadius: scale(8),
    },
    addPaymentMethodIcon: {
        width: scale(24),
        height: scale(24),
    },
    addPaymentMethodView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addPaymentMethodTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    paymentlistContainer: {

    },
    resultsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
        marginBottom: scale(8),
    }
})