import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class CategoryCell extends Component {


  render() {
    return (
      <View style={styles.listItem}>
        <View style={{flexDirection: 'row'}}>
            <View style={{borderRadius: 5, marginVertical: 2, marginEnd: 15}}>
              <Image style={{width: 80, height: 70, borderRadius: 5}} source={this.props.data.image}/>
            </View>
          
            <View style={{ marginVertical: 2, width: 230}}>
              <Text style={{fontWeight: 'bold'}}>{this.props.data.title}</Text>
              <Text style={{color: "#909090", fontSize: 12, textAlign: 'justify'}}
              >{this.props.data.message}</Text>
            </View>
        </View>

        
      </View>
    );
  }
}
