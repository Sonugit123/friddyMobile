import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

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
    },
    transactionTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    transactionTypeBtn: {
        width: scale(103.67),
        height: scale(40),
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionTypeTxt: {
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    }
})