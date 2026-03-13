import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";


export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    welcomeText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20),
        marginBottom: scale(16),
    },
    transactionTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    transactionTypeBtn: {
        width: scale(109),
        height: scale(40),
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: scale(8),
    },
    transactionTypeTxt: {
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    transactionTypeIcon: {
        width: scale(16),
        height: scale(16),
    },
    receiveCoinContainer: {
        // gap: scale(12),
        // backgroundColor: 'red',
        marginTop: scale(16),
    },
    receiveCoinIcon: {
        width: scale(24),
        height: scale(24),
    },
    receiveCoinTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    receiveCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: scale(8),
        marginBottom: scale(24),
    },
    typeTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(12),
    },
    coinAndTypeView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        borderRadius: scale(8),
    },
    amountTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    }
})