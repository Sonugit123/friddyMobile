import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
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
    checkIcon: {
        width: scale(14),
        height: scale(14),
    },
    checkView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    ruleListView: {
        marginTop: scale(16),
        gap: scale(8),
    },
    agreeText: {
        flex: 1,
        flexWrap: 'wrap',
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    agreeView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10),
        marginTop: scale(32),
        width: scale(325),
    },
    checkBoxIcon: {
        width: scale(24),
        height: scale(24),
    },
    linkText: {
        color: ColorConstants.BTNCOLOR,
    }
})