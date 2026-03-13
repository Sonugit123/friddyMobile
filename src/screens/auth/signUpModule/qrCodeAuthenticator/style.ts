import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

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
    welcomeText: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20),
    },
    loginText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(4),
        ...getTextStyle(14),
    },
    qrCode: {
        width: scale(232),
        height: scale(232),
        alignSelf: 'center',
        marginTop: scale(32),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(32),
    }
})