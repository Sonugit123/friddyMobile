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
    bankIcon: {
        width: scale(32),
        height: scale(32),
    },
    bankName: {
        color: ColorConstants.FRIDDY_SALE,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
    },
    bankContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        marginTop: scale(16),
    },
    popularBankTxt: {
        color: ColorConstants.GRAY_Heading,
        fontFamily: Fontconstants.MEDIUM,
        ...getTextStyle(14),
        marginTop: scale(16),
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        // bottom: scale(88),
        bottom: scale(0),
        backgroundColor: ColorConstants.WHITE,
        width: '100%',
        paddingBottom: scale(24),
    }
})