import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../constants/colorConstants";
import { getTextStyle, scale } from "../../../../utils/scale";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(8),
        flex: 1,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(16),
    },
    iconStyle: {
        width: scale(32),
        height: scale(32),
    },
    communicationMethodView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(16),
        borderRadius: scale(4),
    },
    communicationMethodTxt: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: scale(40),
    },
    modalContainer: {
        flex: 1,
        paddingTop: scale(50),
    },
})