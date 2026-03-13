import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(16),
    },
    cryptoTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(16),
    },
    cryptoHeaidngContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cryptoCoinsImg: {
        width: scale(40),
        height: scale(16),
    },
    cashCoinsImg: {
        width: scale(28),
        height: scale(16),
    },
    cryptoIncreaseTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    cryptoIncreaseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cryptoContainer: {
        width: scale(167.5),
        height: scale(68),
        padding: scale(8),
        gap: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.BORDER_COLOR,
        borderRadius: scale(8),
    }
})