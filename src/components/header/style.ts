import { StyleSheet } from 'react-native';
import { fontScale, moderateScale, scale } from '../../utils/scale';
import { Fontconstants } from '../../constants/fontConstants';
import { ColorConstants } from '../../constants/colorConstants';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoIcon: {
    width: scale(100),
    height: scale(24),
  },
  menuIcon: {
    width: scale(32),
    height: scale(32),
    marginLeft: scale(16),
  },
  signInTxt: {
    color: ColorConstants.BTNCOLOR,
    fontSize: fontScale(14),
    fontFamily: Fontconstants.SEMIBOLD,
  },
  signInIcon: {
    width: scale(20),
    height: scale(20),
    marginLeft: scale(4),
  },
  signInIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorConstants.SIGNIN_BOX,
    width: scale(105.5),
    height: scale(32),
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
