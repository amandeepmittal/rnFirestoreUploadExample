import React, { Component } from 'react'
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Text, Layout, withStyles, List } from 'react-native-ui-kitten'
import { withFirebaseHOC } from '../utils'

// const DATA = [
//   {
//     id: 1,
//     postTitle: 'Planet of Nature',
//     imageURI:
//       'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
//   },
//   {
//     id: 2,
//     postTitle: 'Lamp post',
//     imageURI:
//       'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
//   }
// ]

class _Feed extends Component {
  state = { DATA: null, isRefreshing: false }
  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await this.props.firebase.getPosts()
      console.log(posts)
      this.setState({ DATA: posts, isRefreshing: false })
    } catch (e) {
      console.error(e)
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.fetchPosts()
  }

  render() {
    const renderItem = ({ item }) => (
      <View style={this.props.themedStyle.card}>
        <Image
          source={{ uri: item.postPhoto.uri }}
          style={this.props.themedStyle.cardImage}
        />
        <View style={this.props.themedStyle.cardHeader}>
          <Text category='s1' style={this.props.themedStyle.cardTitle}>
            {item.postTitle}
          </Text>
        </View>
      </View>
    )
    if (this.state.DATA != null) {
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
            data={this.state.DATA}
            renderItem={renderItem}
            keyExtractor={this.state.DATA.id}
            refreshing={this.state.isRefreshing}
            onRefresh={() => this.onRefresh()}
          />
        </Layout>
      )
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
}

export default Feed = withFirebaseHOC(
  withStyles(_Feed, theme => ({
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
)
