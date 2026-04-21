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
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(200),
    },
     shareTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(16),
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
        gap: scale(16),
        paddingHorizontal: scale(8),
        paddingBottom: scale(24),
    },
    shareItemContainer: {
        alignItems: 'center',
    },
    shareIconBox: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(22),
        backgroundColor: ColorConstants.WHITE,
        borderWidth: scale(1),
        borderColor: ColorConstants.BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareIcon: {
        width: scale(32),
        height: scale(32),
    },
    shareIconInner: {
        width: scale(20),
        height: scale(20),
        tintColor: ColorConstants.BTNCOLOR,
    },
    shareText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
})