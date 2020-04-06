import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// ***** Import Screen ***** //
import HomeScreen from '../screen/home/Home'
import DetailScreen from '../screen/detail/Detail'
import DemoScren from '../screen/demo/Demo'
// ***** /Import Screen ***** //

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Demo: {
    screen: DemoScren,
    navigationOptions: {
      headerShown: false,
    }
  }
})

const AppNavigator = createSwitchNavigator({
  HomeStack: HomeStack
})

export default createAppContainer(AppNavigator)