import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcom to React Native</Text>
        <Icon
          name={'magnify'}
          type="MaterialCommunityIcons"
        />
      </View>
    )
  }
}

export default App