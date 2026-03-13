import { StyleSheet } from "react-native";
import { fontScale, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";

export const style = StyleSheet.create({
    inputBox: {
        borderWidth: scale(1.5),
        borderColor: ColorConstants.BORDER_COLOR,
        borderRadius: scale(8),
        height: scale(52),
        paddingLeft: scale(16),
        fontSize: fontScale(14),
        fontFamily: Fontconstants.MEDIUM,
        // backgroundColor: 'blue'
    },
    eyeIcon: {
        width: scale(18),
        height: scale(18),
    },
    eyeIconView: {
        position: 'absolute',
        right: scale(16),
        top: scale(17),
    },
    inputBoxLabel: {
        color: ColorConstants.GRAY_LABEL,
        fontSize: fontScale(14),
        fontFamily: Fontconstants.MEDIUM,
        paddingBottom: scale(8),
        // backgroundColor: 'yellow'
    }
})