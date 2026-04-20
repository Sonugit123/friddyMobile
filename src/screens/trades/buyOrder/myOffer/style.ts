import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
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
    chooseTokenTitle: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginBottom: scale(8),
    },
    tokenCard: {
        width: '100%',
        padding: scale(16),
        borderWidth: scale(1),
        borderRadius: scale(8),
        marginBottom: scale(16),
        flexDirection: 'row',
        alignItems: 'center',
    },
    tokenCardSelected: {
        borderColor: ColorConstants.QR_BOX_BG,
        backgroundColor: '#F5F7FF',
    },
    tokenCardUnselected: {
        borderColor: ColorConstants.BORDER_COLOR,
        backgroundColor: ColorConstants.WHITE,
    },
    coinIcon: {
        width: scale(42),
        height: scale(42),
        marginRight: scale(16),
    },
    tokenDetailsMiddle: {
        flex: 1,
    },
    tokenMainText: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tokenSubText: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(4),
    },
    tokenDetailsRight: {
        alignItems: 'flex-end',
    },
    tokenRightTopText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tokenRightBottomText: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
        marginTop: scale(4),
    },
    shareTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(24),
        marginBottom: scale(16),
    },
    shareTitle: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginRight: scale(4),
    },
    downArrow: {
        width: scale(12),
        height: scale(12),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    shareItemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(8),
        paddingBottom: scale(24),
    },
    shareItemContainer: {
        alignItems: 'center',
    },
    shareIconBox: {
        width: scale(44),
        height: scale(44),
        borderRadius: scale(22),
        backgroundColor: ColorConstants.WHITE,
        borderWidth: scale(1),
        borderColor: ColorConstants.BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(8),
    },
    shareIcon: {
        width: scale(44),
        height: scale(44),
    },
    shareIconInner: {
        width: scale(20),
        height: scale(20),
        tintColor: ColorConstants.BTNCOLOR,
    },
    shareText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(10),
    }
});
