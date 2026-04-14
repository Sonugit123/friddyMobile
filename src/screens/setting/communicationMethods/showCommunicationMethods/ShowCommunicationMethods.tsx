import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import BackHeader from '../../../../components/backHeader/BackHeader';
import { style } from './style';
import CustomButton from '../../../../components/customButton/CustomButton';
import { IconConstants } from '../../../../constants/iconConstants';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';
import { scale } from '../../../../utils/scale';

const ShowCommunicationMethods = () => {
  const communicationMethodExist = false;

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <BackHeader />
        <Text style={style.headingTxt}>Communication Methods</Text>
        {communicationMethodExist ? (
          <Text style={style.subHeading}>
            You need to add at least one communication method to be able to deal
            with transactions.
          </Text>
        ) : (
          <>
            <Text style={style.subHeading}>
              Manage your communication methods
            </Text>
            <View style={style.paymentMethodContainer}>
              <View style={style.paymentMethodRow}>
                <View style={style.communicationView}>
                  <Image
                    source={IconConstants.textMessage}
                    style={style.communicationIcon}
                  />
                  <Text style={style.communicationMethodName}>
                    Text Message
                  </Text>
                </View>
                <Image source={IconConstants.trash} style={style.trashIcon} />
              </View>
              <View style={[style.paymentMethodRow, { marginTop: scale(16) }]}>
                <Text style={style.idTxt}>ID -</Text>
                <Text style={style.idTxt}>+234 806 7429 641</Text>
              </View>
            </View>
          </>
        )}

        <CustomButton
          disable={false}
          title="Add Communication Method"
          rightImage={IconConstants.plus}
          iconColor={ColorConstants.WHITE}
          imageSize={18}
          width={343}
          topHeight={16}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Add Communication Method')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShowCommunicationMethods;
