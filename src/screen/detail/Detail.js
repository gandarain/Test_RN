import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { color } from '../../assets/styles/ColorList'

const screenWidth = Math.round(Dimensions.get('window').width)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {
        profile: {
          name: 'Jane Doe',
          profesi: 'Platinum Chef',
        },
        title: 'Beef Spicy Hamburger',
        description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        point: [
          {
            title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          }
        ],
        ingredients: [
          {
            id: 1,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 2,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 3,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 4,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 5,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 6,
            name: 'Onion',
            value: '200 grams'
          },
          {
            id: 7,
            name: 'Onion',
            value: '200 grams'
          }
        ]
      },
      listImage: [
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
      ],
      selectedImage: 1,
      showMorePoint: false,
      showMoreIngridient: false
    }
  }

  renderPoint() {
    if (this.state.showMorePoint) {
      return this.state.detail.point.map((data, index) => {
        return (
          <View key={index} style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 12, color: color.fontColor2 }}>{index + 1}. {data.title}</Text>
          </View>
        )
      })
    }
  }

  renderIngredients() {
    let lastItem = 5
    let data = this.state.detail.ingredients
    if (this.state.showMoreIngridient) {
      lastItem = data.length
    }
    let content = []
    for (let index = 0; index < lastItem; index++) {
      content.push(
        <View key={data[index].id} style={{ paddingTop: 20, paddingBottom: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: color.fontColor2, borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 12, color: color.fontColor2 }}>{data[index].name}</Text>
          <Text style={{ fontSize: 12, color: color.fontColor2 }}>{data[index].value}</Text>
        </View>
      )
    }

    if (this.state.showMoreIngridient) {
      content.push(
        <View style={{ paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ width: '45%', backgroundColor: color.subThemaColor, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ fontSize: 12, color: color.whiteColor, fontWeight: 'bold' }}>BUY INGREDIENTS </Text>
            <View style={{ backgroundColor: color.blackColor, overflow: 'hidden', borderRadius: 20, padding: 3 }}>
              <Icon
                name={'cart'}
                type="MaterialCommunityIcons"
                style={{ color: color.whiteColor, fontSize: 15 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Demo')} style={{ width: '45%', backgroundColor: color.subThemaColor, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ fontSize: 12, color: color.whiteColor, fontWeight: 'bold' }}>SCHEDULE DEMO </Text>
            <View style={{ backgroundColor: color.blackColor, overflow: 'hidden', borderRadius: 20, padding: 3 }}>
              <Icon
                name={'calendar'}
                type="MaterialCommunityIcons"
                style={{ color: color.whiteColor, fontSize: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      )
    }

    return content
  }

  renderSelectedImage() {
    return (
      <View style={{ marginBottom: 20 }}>
        <Image
          resizeMode={'stretch'}
          source={require('../../assets/images/cooking_studio.png')}
          style={{ height: 200, width: '100%' }}
        />
      </View>
    )
  }

  renderNewReceipe() {
    if (this.state.listImage.length > 0) {
      return this.state.listImage.map((data) => {
        return (
          <TouchableOpacity onPress={() => this.setState({ selectedImage: data.id })} key={data.id} style={{ marginRight: 5, width: screenWidth / 4.5 }}>
            <View>
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/cooking_studio.png')}
                style={{ height: 70, width: screenWidth / 4.5 }}
              />
            </View>
          </TouchableOpacity>
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
          {/* Component Search Bar */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, flexDirection: 'row', backgroundColor: color.blackColor }}>
            <View style={{ width: '15%', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Icon
                name={'arrow-left'}
                type="MaterialCommunityIcons"
                style={{ color: color.fontColor2, fontSize: 30 }}
              />
            </View>
            <View style={{ width: '85%', backgroundColor: color.fontColor2, paddingLeft: 10, justifyContent: 'center', borderRadius: 20 }}>
              <Icon
                name={'magnify'}
                type="MaterialCommunityIcons"
                style={{ color: color.fontColor, fontSize: 20 }}
              />
            </View>
          </View>
          {/* Component Cooking Studio */}
          <View style={{ paddingBottom: 20 }}>
            {this.renderSelectedImage()}
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginHorizontal: 20 }}>
              {this.renderNewReceipe()}
            </ScrollView>
          </View>
          {/* Component Profile */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', width: '65%' }}>
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/Ellipse.png')}
                style={{ height: 60, width: 60 }}
              />
              <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                <Text style={{ fontSize: 17, color: color.fontColor2, fontWeight: 'bold' }}>{this.state.detail.profile.name}</Text>
                <Text style={{ fontSize: 12, color: color.fontColor2 }}>{this.state.detail.profile.profesi}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '35%' }}>
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/ig.png')}
                style={{ height: 30, width: 30 }}
              />
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/fb.png')}
                style={{ height: 30, width: 30 }}
              />
              <Image
                resizeMode={'stretch'}
                source={require('../../assets/images/wa.png')}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </View>
          {/* Component Description */}
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 15, color: color.whiteColor, fontWeight: 'bold' }}>
              {this.state.detail.title}
              <Text style={{ fontSize: 12, color: color.fontColor2 }}>  -  {this.state.detail.description}</Text>
            </Text>
            <View style={{ paddingTop: 10, alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.setState({ showMorePoint: !this.state.showMorePoint })}>
                <View style={{ justifyContent: 'center', paddingRight: 5 }}>
                  <Text style={{ fontSize: 12, color: color.fontColor2 }}>{this.state.showMorePoint ? 'Less More' : 'See More'}</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingLeft: 5 }}>
                  <Icon
                    name={this.state.showMorePoint ? 'menu-up' : 'menu-down'}
                    type="MaterialCommunityIcons"
                    style={{ color: color.subThemaColor, fontSize: 30 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {this.renderPoint()}
          </View>
          {/* Component Ingredients */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{ fontSize: 15, color: color.subThemaColor, fontWeight: 'bold' }}>Ingredients</Text>
            {this.renderIngredients()}
            <View style={{ paddingTop: 10, alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.setState({ showMoreIngridient: !this.state.showMoreIngridient })}>
                <View style={{ justifyContent: 'center', paddingRight: 5 }}>
                  <Text style={{ fontSize: 12, color: color.fontColor2 }}>{this.state.showMoreIngridient ? 'Less More' : 'See More'}</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingLeft: 5 }}>
                  <Icon
                    name={this.state.showMoreIngridient ? 'menu-up' : 'menu-down'}
                    type="MaterialCommunityIcons"
                    style={{ color: color.subThemaColor, fontSize: 30 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default App