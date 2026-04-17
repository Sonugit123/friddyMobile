import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../utils/scale";
import { ColorConstants } from "../../../constants/colorConstants";
import { Fontconstants } from "../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    makePaymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(24),
    },
    makePaymentTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(8),
    },
    makePaymentIcon: {
        width: scale(24),
        height: scale(24),
    },
    subHeading: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
        uploadProofView: {
        // width: scale(327),
        height: scale(144),
        borderWidth: scale(1),
        borderStyle: 'dashed',
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        marginTop: scale(24),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    uploadIcon: {
        width: scale(14),
        height: scale(14),
    },
    uploadTransScriptTxt: {
        color: ColorConstants.BTNCOLOR,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    uploadIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
    }
})