import React, { Component } from 'react'
import AppNavigator from './src/navigator/Navigator'
import { Root } from 'native-base'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}