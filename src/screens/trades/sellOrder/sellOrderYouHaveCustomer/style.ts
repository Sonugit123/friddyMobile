import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    container: {
        flex: 1,
        paddingHorizontal: scale(8),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(24),
    },
    sellerInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(8),
    },
    sellerInformationLeftView: {
        backgroundColor: ColorConstants.BACKARROWBG,
        width: scale(42),
        height: scale(42),
        borderRadius: scale(42),
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellerTxt: {
        color: ColorConstants.WARNING_TXT,
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
    FriddyIdUnderline: {
        textDecorationLine: 'underline',
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
    divider: {
        height: scale(1),
        backgroundColor: ColorConstants.BORDER_COLOR,
        marginVertical: scale(16),
    },
    wantToBuyBox: {
        borderRadius: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        gap: scale(8),
        paddingTop: scale(8),
        paddingHorizontal: scale(16),
        paddingBottom: scale(16),
    },
    wantToBuyTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    wantToBuyInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    usdcCoinIcon: {
        width: scale(32),
        height: scale(32),
    },
    coinValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(20),
    },
    buyerFeesView: {
        flexDirection: 'row',
        gap: scale(8),
    },
    buyerFeesTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    buyerFeesValueTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(16),
        marginBottom: scale(8),
    },
    paymentMethodCardSelected: {
        width: '100%',
        padding: scale(4),
        paddingRight: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentIcon: {
        width: scale(32),
        height: scale(32),
        marginRight: scale(8),
        resizeMode: 'contain',
    },
    paymentTextName: {
        flex: 1,
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})