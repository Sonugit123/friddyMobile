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
        marginTop: scale(24),
    },
    yourDetailsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    paymentMethodIcon: {
        width: scale(24),
        height: scale(24),
    },
    paymentMethodView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: scale(89),
        height: scale(32),
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        gap: scale(8),
        paddingLeft: scale(4),
        paddingRight: scale(8),
    },
    sellerView: {
        width: scale(113),
        height: scale(32),
        borderRadius: scale(8),
        backgroundColor: ColorConstants.BACKARROWBG,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        paddingHorizontal: scale(8),
    },
    sellerIcon: {
        width: scale(16),
        height: scale(16),
    },
    sellerTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    paymentMethodAndSellerView: {
        flexDirection: 'row',
        gap: scale(8),
    },
    changeView: {
        width: scale(68),
        height: scale(32),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    changeTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    paymentMethodAndChangeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    queueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    queueIcon: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
    },
    queueLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap: scale(4),
    },
    queueRightView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    eyeIcon: {
        width: scale(16),
        height: scale(16),
    },
    onQueueTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    queueContainer: {
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
})