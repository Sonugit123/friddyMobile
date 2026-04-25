import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    sellerInformationTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(14),
    },
    sellerInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    sellerInformationLeftView: {
        backgroundColor: ColorConstants.QR_BOX_BG,
        width: scale(42),
        height: scale(42),
        borderRadius: scale(42),
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellerTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(12),
    },
    sellerInformationRightView: {

    },
    sellerNameTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    sellerIdTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(12),
    },
    verifiedBadgeIcon: {
        width: scale(18),
        height: scale(18),
    },
    sellerNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    sellerDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
        marginRight: scale(9),
    },
    sellerDetailView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    starIcon: {
        width: scale(18),
        height: scale(18),
    },
    starTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    paymentMethodView: {
        width: scale(327),
        height: scale(40),
        borderRadius: scale(8),
        borderWidth: scale(0.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    paypalIcon: {
        width: scale(32),
        height: scale(32),
    },
    paypalTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    queueIcon: {
        width: scale(24),
        height: scale(24),
        position: 'absolute',
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
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cancelTxt: {
        color: ColorConstants.WARNING_TXT,
        fontFamily: Fontconstants.SEMIBOLD,
        marginTop: scale(14),
        alignSelf: 'center',
        ...getTextStyle(14),
    }
})