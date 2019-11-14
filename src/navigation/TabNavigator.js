import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-ui-kitten'

import Feed from '../screens/Feed'
import AddPost from '../screens/AddPost'

const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='plus-square-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
)

export default createAppContainer(TabNavigator)
