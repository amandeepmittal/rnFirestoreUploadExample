import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text, Layout, withStyles, List } from 'react-native-ui-kitten'

const DATA = [
  {
    id: 1,
    postTitle: 'Planet of Nature',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 2,
    postTitle: 'Lamp post',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  }
]

class _Feed extends Component {
  render() {
    const renderItem = ({ item }) => (
      <View style={this.props.themedStyle.card}>
        <Image
          source={{ uri: item.imageURI }}
          style={this.props.themedStyle.cardImage}
        />
        <View style={this.props.themedStyle.cardHeader}>
          <Text category='s1' style={this.props.themedStyle.cardTitle}>
            {item.postTitle}
          </Text>
        </View>
      </View>
    )
    return (
      <Layout style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 60,
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignItems: 'center'
          }}>
          <Text style={{ fontSize: 20 }}>All Posts 🔥</Text>
        </View>
        <List
          style={this.props.themedStyle.container}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={DATA.id}
        />
      </Layout>
    )
  }
}

export default Feed = withStyles(_Feed, theme => ({
  container: {
    flex: 1
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    marginBottom: 25
  },
  cardImage: {
    width: '100%',
    height: 300
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: theme['color-basic-1000']
  }
}))
