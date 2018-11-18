import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Image} from "react-native";

import CategoryCell from '../../components/catergoryCell'

export default class Info extends Component {
  
  state = {

    categoryList: [
        {
          key: 1, 
          title: "Contas da casa",
          message: "Pagar contas antecipadamente ajudam a melhorar seu score",   
          image: require('../../images/image1.jpg'),
        },
        {
          key: 2, 
          title: "Contas Extras",
          message: "Não faça dívidas maiores do que você pode pagar",   
          image: require('../../images/image2.jpg'),
        },
        {
          key: 3, 
          title: "Contas Temporárias",
          message: "Caso esteja pendente com alguma empresa, busque uma negociação e cumpra todo o acordo.",   
          image: require('../../images/image3.jpg'),
        },
        {
          key: 4, 
          title: "Outras contas",
          message: "Mantenha seus dados cadastrais atualizados",   
          image: require('../../images/image4.jpg'),
        },
    ]

    };

  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1 }}> 
      <View style={{height: 350, padding: 10, marginTop: 20, 
      marginBottom: 10, marginHorizontal: 10, backgroundColor: '#e8e8e8',
      borderRadius: 5, elevation: 2}}>


          <Text style={{fontSize: 17, marginBottom: 10, fontWeight: 'bold', 
          alignSelf: 'center', textAlign: 'center'}}>Infelizmente você não esta apto no momento...</Text>
          
          <Image style={{height: 150, alignSelf: 'center', marginBottom: 10}} source={require('../../images/image_nao_2.jpg')}/>

          

          <Text style={{alignSelf: 'center', color: '#909090',marginHorizontal: 10, 
          marginTop: 10, textAlign: 'center'}}>Segundo seu dados você não esta apto a receber crédito. Mas não fique triste, pois 
            podemos te ajudar a conseguir crédito. Para isso insira alguma informações escolhendo alguma categoria 
            abaixo:
          </Text>
        </View>

      <Text style={{fontSize: 17, marginTop: 10, fontWeight: 'bold', alignSelf: 'center'}}>Selecione uma categoria</Text>
      
      <View
          style={{
          backgroundColor: '#e8e8e8',
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 20,
          borderRadius: 5,
          padding: 5,
          marginHorizontal: 10,
          elevation: 2
          }}>
              <FlatList
                horizontal
                data={this.state.categoryList}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{padding: 5, borderRadius: 5, 
                    backgroundColor: "#f1f1f1", marginEnd: 10, elevation: 2, marginVertical: 5,
                    width: 200}}>
                      <TouchableOpacity
                        style={{
                          borderRadius: 5,
                          alignItems: "center",
                        }}
                          onPress={() => this.props.navigation.navigate("slideScreen")}
                      >
                        <View>
                          <Image style={{height: 120, width:180, alignSelf: 'center', borderRadius: 5, marginTop: 5}} source={item.image}/> 
                          <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 10, marginHorizontal: 10}}>{item.title}</Text>
                          <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 5, marginHorizontal: 10
                        ,color: "#909090", textAlign: 'center'}}> {item.message}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    );
                  }}
                  keyExtractor={(item, index) => index}
              />
          </View>
      </View>
      </ScrollView>
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

