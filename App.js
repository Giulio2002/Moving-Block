import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


STYLE_OBJECT = function(){
  return({
  RightButton: {

    top : 530,

    left : 180,

    width : 200

  },
  LeftButton: {

    top : 495,

    left : -30,

    width : 200


  },
  Player :{

    height: 50,

    width: 50,

    backgroundColor : 'blue'

  }


  })
}
var styles = StyleSheet.create(STYLE_OBJECT());



export default class App extends React.Component {

  state  = {
    x : 0,
    y : 0
  };
  render = function(){
    return (
      <View>
        <View style = { styles.RightButton }>
          <Button title = "Go Right" onPress = {this.goRight}></Button>
        </View>
        <View style = { styles.LeftButton }>
          <Button title = "Go Left" onPress = {this.goLeft}></Button>
        </View>
        <View style = {[styles.Player,{left : this.state.x,top : this.state.y}]}>
        </View>
      </View>
    );
  };

  goRight = () => {

    styles = StyleSheet.create(STYLE_OBJECT());

    if(this.state.x != 300){
      LayoutAnimation.spring();
      this.setState({x: this.state.x + 50, y: this.state.y});
    }else {
          Alert.alert('Info', 'Limit Reached');
    }

  };

  goLeft = () =>{

    styles = StyleSheet.create(STYLE_OBJECT());
    if(this.state.x != 0){
      LayoutAnimation.spring();

      this.setState({x: this.state.x - 50, y: this.state.y});
    }else {
        Alert.alert('Info', 'Limit Reached');
    }

  }
}
