import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-gifted-charts";
import { ColorConstants } from '../../constants/colorConstants';

const CustomLineChart = () => {
    const data = [{ value: 0 }, { value: 15 }, { value: 15 }, { value: 26 }, { value: 40 }];

    return (
        <View>
            {/* <Text>CustomLineChart</Text> */}
            {/* <LineChart
        areaChart
        data={data}
        color="#27B264"
        thickness={2}
        startFillColor="#27B264"
        endFillColor="#27B264"
        startOpacity={0.2}
        endOpacity={0}
        spacing={30}
        hideDataPoints
        yAxisLabelWidth={40}
        yAxisColor="#9AA4B2"
        yAxisTextStyle={{ color: '#9AA4B2' }}
        xAxisColor="#9AA4B2"
        xAxisLabelTextStyle={{ color: '#9AA4B2' }}
        noOfSections={3}
        maxValue={50}
        yAxisInterval={10}
        pointerConfig={{
          pointerStripUVMargin: 10,
          pointerStripHeight: 100,
          pointerStripColor: '#27B264',
          pointerStripWidth: 2,
          pointerColor: '#27B264',
          pointerThickness: 2,
          activationDistance: 100,
          startPositionY: 10,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          pointerLabelComponent: (item) => {
            return (
              <View style={{ padding: 10, backgroundColor: '#27B264', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.value}</Text>
              </View>
            );
          },
        }}
      /> */}
            <View>
                <LineChart
                    areaChart
                    data={data}
                    hideDataPoints
                    spacing={90}
                    initialSpacing={0}
                    thickness={3}
                    hideRules
                    hideYAxisText
                    yAxisThickness={0}
                    xAxisThickness={0}
                    color={ColorConstants.BTNCOLOR}
                    startFillColor="rgba(101, 133, 255, 1)"
                    startOpacity={1}
                    endFillColor="rgba(204, 215, 255, 0)"
                    endOpacity={0} />
            </View>
        </View>
    )
}

export default CustomLineChart