import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { style } from './style';
import { IconConstants } from '../../constants/iconConstants';
import Clipboard from '@react-native-clipboard/clipboard';
import RNShare, { Social } from 'react-native-share';

interface SocialShareProps {
  shareUrl: string;
  shareText: string;
  containerStyle?: ViewStyle;
}

const SHARE_OPTIONS = [
  { id: 'copy', label: 'Copy', icon: IconConstants.copyIcon2, isPill: true },
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    icon: IconConstants.whatsApp,
    isPill: false,
  },
  { id: 'x', label: 'X', icon: IconConstants.xIcon, isPill: false },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: IconConstants.telegram,
    isPill: false,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: IconConstants.messenger,
    isPill: false,
  },
  { id: 'more', label: 'More', icon: IconConstants.xIcon, isPill: true },
];

const SocialShare = ({ shareUrl, shareText, containerStyle }: SocialShareProps) => {
  const handleShare = async (id: string) => {
    const shareOptions = {
      title: 'Share Seller',
      message: shareText,
      url: shareUrl,
    };

    try {
      switch (id) {
        case 'copy':
          Clipboard.setString(`${shareText} ${shareUrl}`);
          break;
        case 'whatsapp':
          await RNShare.shareSingle({ ...shareOptions, social: Social.Whatsapp });
          break;
        case 'x':
          await RNShare.shareSingle({ ...shareOptions, social: Social.Twitter });
          break;
        case 'telegram':
          await RNShare.shareSingle({ ...shareOptions, social: Social.Telegram });
          break;
        case 'facebook':
          await RNShare.shareSingle({ ...shareOptions, social: Social.Facebook });
          break;
        case 'more':
          await Share.share({ message: `${shareText} ${shareUrl}` });
          break;
        default:
          break;
      }
    } catch (error: any) {
      console.log('Error sharing:', error?.message);
    }
  };

  return (
    <View style={containerStyle}>
      <View style={style.shareTitleRow}>
        <Text style={style.shareTitle}>Share</Text>
        <Image source={IconConstants.downArrow} style={style.downArrow} />
      </View>

      <View style={style.shareItemsRow}>
        {SHARE_OPTIONS.map(item => (
          <TouchableOpacity
            key={item.id}
            style={style.shareItemContainer}
            onPress={() => handleShare(item.id)}
            activeOpacity={0.8}
          >
            {item.isPill ? (
              <View style={style.shareIconBox}>
                <Image source={item.icon} style={style.shareIconInner} />
              </View>
            ) : (
              <Image source={item.icon} style={style.shareIcon} />
            )}
            <Text style={style.shareText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SocialShare;