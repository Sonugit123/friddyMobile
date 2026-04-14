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
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        marginTop: scale(24),
        ...getTextStyle(20)
    },
    photoFrame: {
        width: scale(343),
        height: scale(200),
        borderRadius: scale(8),
        borderWidth: scale(1.5),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        marginTop: scale(24),
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewIdTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    reviewIdSubTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        width: scale(285),
    },
    sadEmoji: {
        width: scale(18),
        height: scale(18),
    },
    reviewIdContainer: {

    },
    emojiAndReviewIdContainer: {
        flexDirection: 'row',
        gap: scale(8),
        marginTop: scale(16),
        paddingHorizontal: scale(16)
    },
    infoContainer: {
        width: scale(343),
        height: scale(72),
        backgroundColor: ColorConstants.SIGNIN_BOX,
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(16),
    },
    infoTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        width: scale(290),
    },
})