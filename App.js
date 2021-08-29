import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsList: ResultsScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
})

export default createAppContainer(navigator)