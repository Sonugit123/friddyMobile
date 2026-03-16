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
    queuingSellersIcon: {
        width: scale(24),
        height: scale(24),
    },
    queuingSellersView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    queuingSellersTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    yourDetailsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(16),
        ...getTextStyle(14),
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
        gap: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        padding: scale(4),
        borderRadius: scale(8),
        width: scale(86),
        height: scale(32),
    },
    paytmTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    sellerIcon: {
        width: scale(16),
        height: scale(16),
    },
    sellerView: {
        width: scale(113),
        height: scale(32),
        backgroundColor: ColorConstants.BACKARROWBG,
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        padding: scale(8),
        borderRadius: scale(8),
    },
    sellerTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    changeTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    changeView: {
        width: scale(68),
        height: scale(32),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(32),
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(8),
    },
    paymentMethodLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    queueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
    },
    queueContainer: {
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    queueLeftView: {

    },
    queue1Icon: {
        width: scale(24),
        height: scale(24),
    },
    queue2Icon: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
        left: scale(16),
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
    }
})