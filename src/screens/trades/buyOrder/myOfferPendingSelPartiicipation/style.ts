import { StyleSheet } from "react-native";
import { getTextStyle, scale } from "../../../../utils/scale";
import { ColorConstants } from "../../../../constants/colorConstants";
import { Fontconstants } from "../../../../constants/fontConstants";

export const style = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        paddingHorizontal: scale(16),
    },
    container: {
        flex: 1,
        paddingHorizontal: scale(8),
    },
    headingTxt: {
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.SEMIBOLD,
        ...getTextStyle(20),
        marginTop: scale(24),
    },
    paymentMethodTxt: {
        color: ColorConstants.GRAY_LABEL,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
        marginTop: scale(24),
        marginBottom: scale(8),
    },
    paymentMethodCardSelected: {
        width: '100%',
        padding: scale(4),
        paddingRight: scale(8),
        borderWidth: scale(1),
        borderColor: ColorConstants.MODEL_BORDER_COLOR,
        borderRadius: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentIcon: {
        width: scale(32),
        height: scale(32),
        marginRight: scale(8),
        resizeMode: 'contain',
    },
    paymentTextName: {
        flex: 1,
        color: ColorConstants.BLACK,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(12),
    },
    pendingParticipationView: {
        width: scale(327),
        height: scale(48),
        backgroundColor: ColorConstants.PENDING_PARTICIPATION_BOX,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
        borderRadius: scale(4),
        marginTop: scale(24),
    },
    pendingParticipationTxt: {
        color: ColorConstants.PENDING_PARTICIPATION_TXT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    },
    clockPending: {
        width: scale(16),
        height: scale(16),
    },
    timerView: {
        width: scale(79),
        height: scale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: ColorConstants.TIMER_BG,
        borderRadius: scale(32),
        padding: scale(4),
    },
    timerTxt: {
        color: ColorConstants.PENDING_PARTICIPATION_TXT,
        fontFamily: Fontconstants.REGULAR,
        ...getTextStyle(14),
    }
})