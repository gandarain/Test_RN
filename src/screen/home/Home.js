import React, { Component } from 'react'
import { View, Text, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Icon, Content, Container } from 'native-base'
import { color } from '../../assets/styles/ColorList'

const screenWidth = Math.round(Dimensions.get('window').width)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      cookingStudio: [],
      newReceipe: []
    }
  }

  componentDidMount() {
    this.loadCategory()
    this.loadCookingStudio()
    this.loadNewRecipe()
  }

  loadCategory() {
    let category = [
      {
        id: 1,
        name: 'Fast Food'
      },
      {
        id: 2,
        name: 'Cakes'
      },
      {
        id: 3,
        name: 'Chicken'
      },
      {
        id: 4,
        name: 'Beverages'
      },
      {
        id: 5,
        name: 'Fast Food'
      }
    ]

    this.setState({ category })
  }

  loadCookingStudio() {
    let cookingStudio = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      }
    ]

    this.setState({ cookingStudio })
  }

  loadNewRecipe() {
    let newReceipe = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      }
    ]

    this.setState({ newReceipe })
  }

  renderCategory() {
    if (this.state.category.length > 0) {
      return this.state.category.map((data) => {
        return (
          <View key={data.id} style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
            <Image
              resizeMode={'stretch'}
              source={require('../../assets/images/category.png')}
              style={{ height: 60, width: 60 }}
            />
            <View style={{ paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: color.whiteColor, fontWeight: 'bold' }}>{data.name}</Text>
            </View>
          </View>
        )
      })
    }
  }

  renderCookingStudio() {
    if (this.state.cookingStudio.length > 0) {
      return this.state.cookingStudio.map((data) => {
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} key={data.id} style={{ backgroundColor: color.whiteColor, borderRadius: 20, marginRight: 20, width: screenWidth / 1.5 }}>
            <View style={{ overflow: 'hidden', borderRadius: 20 }}>
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/cooking_studio.png')}
                style={{ height: 150, width: screenWidth / 1.5 }}
              />
            </View>
            <View style={{ paddingVertical: 15, marginHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#ffe1cd' }}>
              <Text style={{ fontSize: 15, color: color.fontColor }}>Lorem Ipsum</Text>
            </View>
            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
              <Text style={{ fontSize: 12, color: color.fontColor }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              </Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
  }

  renderNewReceipe() {
    if (this.state.newReceipe.length > 0) {
      return this.state.newReceipe.map((data) => {
        return (
          <View key={data.id} style={{ backgroundColor: color.whiteColor, borderRadius: 20, marginRight: 20, width: screenWidth / 3 }}>
            <View style={{ overflow: 'hidden', borderRadius: 20, backgroundColor: 'red' }}>
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/cooking_studio.png')}
                style={{ height: 150, width: screenWidth / 2 }}
              />
            </View>
            <View style={{ paddingVertical: 15, marginHorizontal: 15, backgroundColor: color.whiteColor, borderBottomWidth: 1, borderBottomColor: '#ffe1cd' }}>
              <Text style={{ fontSize: 15, color: color.fontColor }}>Lorem Ipsum</Text>
            </View>
            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
              <Text style={{ fontSize: 12, color: color.fontColor }}>
                Lorem Ipsum is simply dummy text
              </Text>
            </View>
          </View>
        )
      })
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
          {/* Component Search */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, flexDirection: 'row', backgroundColor: color.blackColor }}>
            <View style={{ width: '15%', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Icon
                name={'menu'}
                type="MaterialCommunityIcons"
                style={{ color: color.whiteColor, fontSize: 30 }}
              />
            </View>
            <View style={{ width: '70%', backgroundColor: color.whiteColor, paddingLeft: 10, justifyContent: 'center', borderRadius: 20 }}>
              <Icon
                name={'magnify'}
                type="MaterialCommunityIcons"
                style={{ color: color.fontColor, fontSize: 20 }}
              />
            </View>
            <View style={{ width: '15%', alignItems: 'flex-end', justifyContent: 'center' }}>
              <Icon
                name={'menu'}
                type="MaterialCommunityIcons"
                style={{ color: color.whiteColor, fontSize: 30 }}
              />
            </View>
          </View>
          {/* Component Category */}
          <View style={{ marginLeft: 20, paddingVertical: 20 }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: '100%' }}>
              {this.renderCategory()}
            </ScrollView>
          </View>
          {/* Component Cooking Studio */}
          <View style={{ paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20 }}>
              <View>
                <Text style={{ color: color.subThemaColor, fontSize: 20, fontWeight: 'bold' }}>Cooking Studio</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <View style={{ height: 20, backgroundColor: color.subThemaColor, paddingHorizontal: 15, borderRadius: 20 }}>
                  <Text style={{ color: color.whiteColor, fontSize: 12, fontWeight: 'bold' }}>See All</Text>
                </View>
              </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              {this.renderCookingStudio()}
            </ScrollView>
          </View>
          {/* Component Cooking Studio */}
          <View style={{ paddingVertical: 20, marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
              <View>
                <Text style={{ color: color.subThemaColor, fontSize: 20, fontWeight: 'bold' }}>New Recipe</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <View style={{ height: 20, backgroundColor: color.subThemaColor, paddingHorizontal: 15, borderRadius: 20 }}>
                  <Text style={{ color: color.whiteColor, fontSize: 12, fontWeight: 'bold' }}>See All</Text>
                </View>
              </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              {this.renderNewReceipe()}
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}

export default App