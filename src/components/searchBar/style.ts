import { StyleSheet } from "react-native";
import { fontScale, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style= StyleSheet.create({
        inputBox: {
            borderWidth: scale(1.5),
            borderColor: ColorConstants.BORDER_COLOR,
            borderRadius: scale(8),
            height: scale(40),
            paddingLeft: scale(32),
            fontSize: fontScale(14),
            fontFamily: Fontconstants.REGULAR,
        },
        searchIconView: {
            position: 'absolute',
            left: scale(8),
            top: scale(12),
        },
        searchIcon: {
            width: scale(16),
            height: scale(16),
        },
})