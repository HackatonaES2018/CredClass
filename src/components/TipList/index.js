import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Modal, TouchableHighlight } from 'react-native';
// import { Button } from 'native-base';

import TipCell from '../TipCell'

export default class TipList extends Component {
   

        state = {

        tipList: [
            {
              key: 1, 
              title: "Cuidado com as contas",
              message: "Pagar suas contas antecipadamente...",
              texto: "Pagar suas contas antecipadamente demostram responsabilidade e ajudam a melhorar seu score, mantendo uma reputação favorável de bom pagador. Sempre que possível, antecipe seus pagamentos.",   
              image: require('../../images/image1.jpg'),
            },
            {
              key: 2, 
              title: "De olho nas dívidas",
              message: "Não faça dívidas maiores...",
              texto: "Não faça dívidas maiores do ",   
              image: require('../../images/image2.jpg'),
            },
            {
              key: 3, 
              title: "Negociar é uma ótima saída",
              message: "Caso esteja pendente com alguma empresa...",
              texto: "Caso esteja pendente com alguma empresa, busque uma negociação e cumpra todo o acordo.",   
              image: require('../../images/image3.jpg'),
            },
            {
              key: 4,  
              title: "Atualize suas informações",
              message: "Atualize suas inform...",
              texto: "Mantenha seus dados cadastrais atualizados",   
              image: require('../../images/image4.jpg'),
            },
        ],

        modalVisible: false,
        val: "",
        tip: {},
        };   
        toggleModal = async (visible, key) => {
          const tip = key ? this.state.tipList.find(t => t.key === key) : {}
          await this.setState({ tip, modalVisible: visible });
         } 
  
  render() {
    
    return (

    <View style={{ flex: 1 }}> 
 
      <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { } }>
               
               <View style = {styles.modal}>                
                <View style = {styles.containerModal}>

                <View >
                <Image style = {styles.img} source={this.state.tip.image} />
                </View> 
                    <Text style = {styles.text}>{this.state.tip.texto}</Text>
                                        
                    <TouchableHighlight style = {styles.btn} onPress = {() => {
                      this.toggleModal(!this.state.modalVisible)}}>                      
                      <Text style = {styles.text}>Ok!</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>
    
         <ScrollView contentContainerStyle={styles.listSyle} style={{backgroundColor: "#e8e8e8"}}>
          {this.state.tipList.map(tip =>
                        <TouchableHighlight onPress = {() => {this.toggleModal(true, tip.key)}}>                        
                  <TipCell key={tip.key}  data={tip}/>
            </TouchableHighlight>) }
         
        </ScrollView> 

    </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0981d',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    header: {
      height: 50,
      paddingTop: 0,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    listSyle: {
      padding: 10,
    },
    listItem:{
      padding: 20,
      backgroundColor: "#00ff",
      height: 85,
      marginBottom: 10,
      borderRadius: 5,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',   
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },
    containerModal:{
      padding:25,
      borderRadius:10,
      alignItems: 'center',
      textAlign: 'center',
      height: 350,
      width:250,
      backgroundColor: "#FFF", 
    },
    img:{
      height: 50,
      width:50,
      borderRadius:10,
      marginBottom:30,
    },
    btn:{
      height: 30,
      width:50,
      borderRadius:5,
      marginTop:30,
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#390',      
    },


});
