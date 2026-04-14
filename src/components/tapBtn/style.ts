import { StyleSheet } from "react-native";
import { fontScale, getTextStyle, scale } from "../../utils/scale";
import { Fontconstants } from "../../constants/fontConstants";
import { ColorConstants } from "../../constants/colorConstants";

export const style = StyleSheet.create({
    container: {
        width: scale(343),
        height: scale(50),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: scale(16),
        alignItems: 'center',
        borderRadius: scale(8),
        overflow: 'hidden'
    },
    pressBtn: {
        width: scale(156),
        height: scale(34),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(4),
    },
    btnTxt: {
        color: ColorConstants.WHITE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    }
})