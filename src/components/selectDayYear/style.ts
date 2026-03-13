import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../utils/scale";
import { ColorConstants } from "../../constants/colorConstants";
import { Fontconstants } from "../../constants/fontConstants";

export const style = StyleSheet.create({
    listMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listContainer: {
        width: scale(50),
        height: scale(24),
        borderRadius: scale(4),
        alignItems: "center",
        justifyContent: "center",
    },
    listText: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    }
    
})