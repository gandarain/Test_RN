import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// ***** Import Screen ***** //
import HomeScreen from '../screen/home/Home'
// ***** /Import Screen ***** //

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
    }
  }
})

const AppNavigator = createSwitchNavigator({
  HomeStack: HomeStack
})

export default createAppContainer(AppNavigator)