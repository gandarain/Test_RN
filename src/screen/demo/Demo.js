import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { color } from '../../assets/styles/ColorList'

import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'

const screenHeight = Math.round(Dimensions.get('window').height)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datesWhitelist: [
        {
          start: moment().subtract('1', 'years').format(),
          end: moment().format()
        }
      ],
      selectedDate: moment().format(),
    }
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={color.blackColor}
          barStyle="light-content"
        />
        <Content style={{ backgroundColor: color.themaColor }}>
          <View>
            <Image
              source={require('../../assets/images/cooking_studio.png')}
              style={{ height: screenHeight / 3, width: '100%' }}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 30 }}>
            <Text style={{ color: color.subThemaColor, fontSize: 20, fontWeight: 'bold' }}>Cooking Demo Schedule</Text>
          </View>
          <CalendarStrip
            style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
            daySelectionAnimation={{
              type: 'border',
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: color.subThemaColor,
            }}
            calendarHeaderStyle={{ color: color.whiteColor }}
            dateNameStyle={{ color: color.whiteColor }}
            dateNumberStyle={{ color: color.whiteColor }}
            highlightDateNumberStyle={{ color: color.subThemaColor }}
            highlightDateNameStyle={{ color: color.subThemaColor }}
            onDateSelected={(date) => this.setState({ selectedDate: moment(date).format() })}
          />
          <View style={{ backgroundColor: color.fontColor, marginHorizontal: 20, flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ marginVertical: 20, paddingHorizontal: 10, borderRightColor: color.whiteColor, borderRightWidth: 1 }}>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 15, color: color.whiteColor }}>9.00</Text>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 15, color: color.whiteColor }}>10.00</Text>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 15, color: color.whiteColor }}>11.00</Text>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 15, color: color.whiteColor }}>12.00</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 15, color: color.whiteColor }}>13.00</Text>
              </View>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20, width: '70%', borderRadius: 20 }}>
              <View style={{ backgroundColor: color.whiteColor, flexDirection: 'row', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <View style={{ padding: 10, width: '40%' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      resizeMode={'stretch'}
                      source={require('../../assets/images/Ellipse.png')}
                      style={{ height: 60, width: 60 }}
                    />
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: color.fontColor, fontSize: 12, fontWeight: 'bold' }}>Chef Name</Text>
                  </View>
                </View>
                <View style={{ padding: 10, width: '60%' }}>
                  <View>
                    <Text style={{ color: color.blackColor, fontSize: 15, fontWeight: 'bold' }}>Event Name</Text>
                  </View>
                  <View>
                    <Text style={{ color: color.fontColor, fontSize: 12 }}>It is a long establish fact that a reader will be distracted</Text>
                  </View>
                </View>
              </View>
              <View style={{ padding: 10, backgroundColor: color.subThemaColor, flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Icon
                  name={'map-marker-outline'}
                  type="MaterialCommunityIcons"
                  style={{ color: color.whiteColor, fontSize: 15 }}
                />
                <Text style={{ fontSize: 11, color: color.whiteColor, paddingLeft: 5 }}>Cooking Demo Location - 4 miles</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default App