import { View, Text, Image, SectionList } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import BackHeader from '../../../components/backHeader/BackHeader';
import TapBtn from '../../../components/tapBtn/TapBtn';
import { IconConstants } from '../../../constants/iconConstants';
import { scale } from '../../../utils/scale';
import CustomButton from '../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../constants/colorConstants';
import { Fontconstants } from '../../../constants/fontConstants';

const AccountActivity = () => {
  const [id, setId] = useState(1);

  /* ---------------- LOGIN DATA ---------------- */
  const loginData = [
    {
      id: 1,
      activityType: '2FA',
      status: 'Activated',
      time: '3/3/2025 @3:52pm',
      ip: '112.28.196.24',
    },
    {
      id: 2,
      activityType: 'Password',
      status: 'Modified/Changed',
      time: '3/3/2025 @3:52pm',
      ip: '112.28.196.24',
    },
    {
      id: 3,
      activityType: 'Email',
      status: 'Verified',
      time: '3/3/2025 @3:52pm',
      ip: '112.28.196.24',
    },
    {
      id: 4,
      activityType: 'Login Attempt',
      status: 'Successful',
      time: '3/3/2025 @3:52pm',
      ip: '112.28.196.24',
    },
  ];

  /* ---------------- DEVICE DATA ---------------- */
  const deviceData = [
    {
      id: 1,
      userSignedIn: 'Signed In -',
      time: '3/3/2025 @3:52pm',
      systemType: 'MAC OS',
      deviceName: 'John’s Macbook pro',
      location: 'Cairo,Egypt',
    },
    {
      id: 2,
      userSignedIn: 'Signed In -',
      time: '3/3/2025 @3:52pm',
      systemType: 'MAC OS',
      deviceName: 'John’s Macbook pro',
      location: 'Cairo,Egypt',
    },
  ];

  /* ---------------- SECTIONS ---------------- */
  const loginSections = [
    {
      title: 'login',
      data: loginData,
    },
  ];

  const deviceSections = [
    {
      title: '2 Sessions on Mac Computer',
      data: deviceData,
    },
    {
      title: '2 Sessions on Windows Computer',
      data: deviceData,
    },
  ];

  /* ---------------- HEADER UI ---------------- */
  const HeaderUI = () => (
    <View style={style.container}>
      <BackHeader />

      <Text style={style.headingTxt}>Account Activity</Text>

      <TapBtn
        selected={id}
        onPress1={() => setId(1)}
        onPress2={() => setId(2)}
        topHeight={16}
        btn1={'Login'}
        btn2={'Devices'}
      />

      {id === 2 && (
        <Text style={style.deviceHeadingTxt}>
          You’re signed in on these devices the last 28 days.
        </Text>
      )}
    </View>
  );

  /* ---------------- RENDER ITEM ---------------- */
  const renderItem = ({ item, index }: any) => {
    /* LOGIN TAB */
    if (id === 1) {
      return (
        <View
          style={[
            style.loginActivityView,
            { marginTop: index === 0 ? scale(24) : scale(16) },
          ]}
        >
          <View style={style.infoIconAndActivityTypeView}>
            <View style={style.infoIconAndTxtView}>
              <View style={style.infoIconView}>
                <Image source={IconConstants.infoIcon} style={style.infoIcon} />
              </View>
              <Text style={style.activityTypeTxt}>{item.activityType}</Text>
            </View>
            <Text style={style.activityTypeTxt}>{item.status}</Text>
          </View>

          <View style={style.timeAndIpView}>
            <Text style={style.timeTxt}>{item.time}</Text>
            <Text style={style.timeTxt}>IP - {item.ip}</Text>
          </View>
        </View>
      );
    }

    /* DEVICE TAB */
    return (
      <View style={style.sessionContainer}>
        <View style={style.signedInAndTimeView}>
          <Text style={style.signedInTxt}>{item.userSignedIn}</Text>
          <Text style={style.signedInTxt}>{item.time}</Text>
        </View>

        <View style={style.infoIconAndRevokeBtnView}>
          <View style={style.infoIconAndTxtView}>
            <View style={style.infoIconView}>
              <Image source={IconConstants.infoIcon} style={style.infoIcon} />
            </View>
            <Text style={style.systemTypeTxt}>{item.systemType}</Text>
          </View>

          <View style={style.revokeBtnView}>
            <Text style={style.revokeTxt}>Revoke</Text>
          </View>
        </View>

        <View style={style.deviceTypeAndLocationView}>
          <Text style={style.deviceTypeTxt}>{item.deviceName}</Text>
          <Text style={style.deviceTypeTxt}>{item.location}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />

      <SectionList<any>
        sections={id === 1 ? loginSections : deviceSections}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scale(60) }}
        ListHeaderComponent={HeaderUI}
        renderSectionHeader={({ section }) =>
          id === 2 ? (
            <View style={style.sessionHeadingAndBtn}>
              <Text style={style.sessionHeadingTxt}>{section.title}</Text>
              <View style={style.revokeAllBtnView}>
                <Text style={style.revokeAllTxt}>Revoke All</Text>
              </View>
            </View>
          ) : null
        }
        ListFooterComponent={
          // id === 1 ? 
          (
            <>
              <CustomButton
                disable={false}
                title="Disable account"
                txtColor={ColorConstants.WARNING_TXT}
                bgColor={ColorConstants.PROFILE_ICON_BG}
                width={343}
                topHeight={48}
                fontsize={14}
                fontfamily={Fontconstants.SEMIBOLD}
                onPress={() => console.log('Disable account')}
              />

              <Text style={style.disableAccountTxt}>
                Incase you notice suspicious Activity, disable account here
              </Text>
            </>
          ) 
          // : null
        }
      />
    </SafeAreaView>
  );
};

export default AccountActivity;
