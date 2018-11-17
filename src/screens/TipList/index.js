import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import TipCell from '../TipCell'

export default class TipList extends Component {
   

        state = {

        tipList: [
            {
              key: 1, 
              title: "Cuidado com as contas",
              message: "Pagar contas antecipadamente ajudam a melhorar seu score",   
              image: require('../../images/image1.jpg'),
            },
            {
              key: 2, 
              title: "De olho nas dívidas",
              message: "Não faça dívidas maiores do que você pode pagar",   
              image: require('../../images/image2.jpg'),
            },
            {
              key: 3, 
              title: "Negociar é uma ótima saída",
              message: "Caso esteja pendente com alguma empresa, busque uma negociação e cumpra todo o acordo.",   
              image: require('../../images/image3.jpg'),
            },
            {
              key: 4, 
              title: "Atualize suas informações",
              message: "Mantenha seus dados cadastrais atualizados",   
              image: require('../../images/image4.jpg'),
            },
        ]

        };

    
  

  render() {
    return (

    <View style={{ flex: 1 }}> 
         <ScrollView contentContainerStyle={styles.listSyle} style={{backgroundColor: "#e8e8e8"}}>
          {this.state.tipList.map(tip => 
            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate('DetalhesProfessorScreen', { professorInfo: professor})}
            > 
                  <TipCell key={tip.key}  data={tip}/>
            </TouchableOpacity>) }
         
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
});
