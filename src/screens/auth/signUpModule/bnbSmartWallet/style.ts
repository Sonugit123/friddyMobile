import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";
import { ColorConstants } from "../../../../constants/colorConstants";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(16),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
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
        marginTop: scale(8),
        ...getTextStyle(14),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(24),
    }
})