import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(8),
    },
    paymentMethodContainer: {
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        padding: scale(12),
        marginTop: scale(16),
    },
    bankIcon: {
        width: scale(32),
        height: scale(32),
    },
    bankName: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14)
    },
    bankContainer: {
        flexDirection: 'row',
        gap: scale(8),
        alignItems: 'center',
    },
    trashIcon: {
        width: scale(18),
        height: scale(18),
    },
    paymentMethodRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale(16),
    },
    accountNumberTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})