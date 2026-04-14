import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header/Header';
import { IconConstants } from '../../../../constants/iconConstants';
import CustomDropDownOpenBox from '../../../../components/customDropDownOpenBox/CustomDropDownOpenBox';
import CustomButton from '../../../../components/customButton/CustomButton';
import { ColorConstants } from '../../../../constants/colorConstants';
import { Fontconstants } from '../../../../constants/fontConstants';

const ResolutionCenter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('All cases');

  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeSelected, setRangeSelected] = useState('This month');

  const casesData = [
    { id: 1, title: 'All cases' },
    { id: 2, title: 'Pending support response' },
    { id: 3, title: 'Pending customer response' },
    { id: 4, title: 'Active' },
    { id: 5, title: 'In Review' },
    { id: 6, title: 'Resolved' },
  ];

  const rangeData = [
    { id: 1, title: 'This month' },
    { id: 2, title: 'Last month' },
    { id: 3, title: 'Pick Range', icon: IconConstants.calendar },
  ];

  const customerResponse = [
    {
      id: 1,
      reportedTxt: 'Reported',
      time: 'Just now',
      trouble: 'Troubles verifying account',
      caseId: 'Case ID: #120225-P2P',
      status: 'Pending Support Response',
    },
    {
      id: 2,
      reportedTxt: 'Reported',
      time: '12th, Feb, 2025 @4:29pm',
      trouble: 'Troubles verifying account',
      caseId: 'Case ID: #120225-P2P',
      status: 'Pending Customer Response',
    },
  ];

  return (
    <SafeAreaView style={style.safeAreaStyle}>
      <Header />
      <View style={style.container}>
        <Text style={style.headingTxt}>Resolution Center</Text>
        <CustomButton
          disable={false}
          title="Report A Problem"
          rightImage={IconConstants.plus}
          margLeft={8}
          bgColor={ColorConstants.UPLOAD_BTN}
          txtColor={ColorConstants.BTNCOLOR}
          imageSize={18}
          width={343}
          topHeight={16}
          fontsize={14}
          fontfamily={Fontconstants.SEMIBOLD}
          onPress={() => console.log('Report A Problem')}
        />
        <Text style={style.casesTxt}>Cases</Text>
        <View style={style.dropDownView}>
          <CustomDropDownOpenBox
            data={casesData}
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            closeOther={() => setRangeOpen(false)}
          />
          <CustomDropDownOpenBox
            data={rangeData}
            open={rangeOpen}
            setOpen={setRangeOpen}
            selected={rangeSelected}
            setSelected={setRangeSelected}
            closeOther={() => setOpen(false)}
          />
        </View>
        {customerResponse.map((item, index) => {
          return (
            <View key={item.id} style={style.customerResponseContainer}>
              <View style={style.reportedView}>
                <Text style={style.reportedTxt}>{item.reportedTxt}</Text>
                <Text style={style.reportedTxt}>{item.time}</Text>
              </View>
              <View style={style.troublesView}>
                <Text style={style.troublesTxt}>{item.trouble}</Text>
                {index === 0 && ( // <-- only latest item
                  <View style={style.newView}>
                    <Text style={style.newTxt}>New</Text>
                  </View>
                )}
              </View>
              <View style={style.caseIdView}>
                <Text style={style.caseIdTxt}>{item.caseId}</Text>
                <Image source={IconConstants.copyIcon} style={style.copyIcon} />
              </View>
              <View style={style.pendingViewRow}>
                <View style={style.pendingView}>
                  <Text style={style.pendingTxt}>{item.status}</Text>
                </View>
                <Image
                  source={IconConstants.arrowRight}
                  style={style.rightArrow}
                />
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ResolutionCenter;
