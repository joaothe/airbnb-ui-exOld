import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBars } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


class Explore extends React.Component {

  componentDidMount() {
    this.startHeaderHeight = 80
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{flex: 1}}>
          <View style={{height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1
          }}>
              <Icon name="ios-search" size={20} style={{marginRight: 10}} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try new "
                placeholderTextColor="grey"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
