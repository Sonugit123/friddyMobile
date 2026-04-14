import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../utils/scale";
import { Fontconstants } from "../../../constants/fontConstants";

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
    infoBox: {
        width: scale(343),
        height: scale(52),
        borderRadius: scale(8),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        justifyContent: 'center',
        paddingHorizontal: scale(16),
        marginTop: scale(24),
    },
    infoTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    cameraFrame: {
        width: scale(256),
        height: scale(256),
        borderRadius: scale(256),
        borderWidth: scale(2),
        borderColor: ColorConstants.BTNCOLOR,
        marginTop: scale(24),
        alignSelf: 'center',
        backgroundColor: ColorConstants.BLACK,
    },
    tipsContainer: {
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        paddingVertical: scale(8),
        paddingHorizontal: scale(16),
        marginTop: scale(24),
    },
    infoIcon: {
        width: scale(18),
        height: scale(18),
        tintColor: ColorConstants.GRAY_LABEL,
    },
    numTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    tipsTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        width: scale(290),
        ...getTextStyle(14),
    },
    tipsHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    },
    tipsRow: {
        flexDirection: 'row',
        marginTop: scale(8),
        // width: scale(311),
        gap: scale(8),
        // backgroundColor: 'red',
    }
})