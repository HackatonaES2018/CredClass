import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Image,
  Button,
  TouchableOpacity
} from "react-native";


const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
  this.state ={
    language: "",
  }
  

  return (
    <View style={styles.scrollPage}>
        <ScrollView>
        <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>  
          
          
        {props.image != "" && ( <Image style ={{ marginTop: 20, borderRadius: 5, marginHorizontal: 10, height: 180,
          width: 280, alignSelf: 'center'}} source={props.image}/>)}

          <Text style ={{marginStart: 10, marginTop: 20, fontSize: 16}}>{props.text}</Text>
          
            {props.campoPicker && ( <Text style ={{marginStart: 10, marginTop: 20}}>Qual conta da casa você quer 
            registrar gastos?</Text>)}

          {!props.campoPicker && props.image != "" &&  ( <View>
            <TextInput style={{borderWidth:1, borderColor: 'black', 
            borderRadius: 5, marginHorizontal: 10, marginTop: 5}}></TextInput>
          </View> ) }


          {props.campoPicker && (
          <View style={{borderWidth: 1, borderRadius: 5, borderColor: 'black', marginTop: 10, marginHorizontal: 10}}>
            <Picker 
            style={{alignSelf: 'center', width: 250}}
              selectedValue={this.state.language}>
              <Picker.Item label="Luz" value="java" />
              <Picker.Item label="Telefone" value="js" />
              <Picker.Item label="Aluguel" value="js" />
              <Picker.Item label="TV" value="js" />
            </Picker>
          </View>)}

          {!props.image != "" && ( <View style={{width: 150, height: 150, alignSelf: 'center',
        marginTop: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5}}>
            <Image style ={{height: 150, width: 150, alignSelf: 'center',
             borderRadius: 5}} />
          
            <TouchableOpacity
                style={{
                backgroundColor: "#909090",
                borderRadius: 5,
                width: 200,
                height: 60,
                marginTop: 30,
                alignSelf: "center"
              }}
              onPress={this.valida}
            >
              <Text
                style={
                  { alignSelf: "center", paddingVertical: 20, color: 'white', fontSize: 18 }
                }
              >
                {" "}
                Tirar Foto
              </Text>

            </TouchableOpacity>
          </View>)}


        </Animated.View>
      </ScrollView>
    </View>
  );

  

};

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

export default class App extends Component {

  render() {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollView}
      >
        <Screen text="Você pode usar as contas de sua casa, por exemplo, luz, água, telefone fixo, aluguel, para provar que é um bom pagador." index={0} campoPicker={true} image={require("../../images/image1.jpg")} />
        <Screen text="Agora precisamos de algumas informações sobre suas contas. Por favor tennha em mãos alguma conta que você queira nos enviar. 
         Forneça o identificador da conta" index={1} campoPicker={false} image={require("../../images/image2.jpg")}/>
        <Screen text="Para sua comodidade você também pode nos enviar uma foto de sua conta de luz como forma de comprovação" index={2} campoPicker={false} image={""}/>
      </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  screen: {
    height: 470,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 2,
    margin: 2,
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
});