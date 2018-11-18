import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Accordion
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import PortoCredAPI from "../../services/PortoCredAPI";
import { Colors } from "../../constants";

import styles from './styles';

import proposes from "../../data/proposes";

import offers from '../../data/offers';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposeId: "",
      propose: {}
    };
  }

  static navigationOptions = {
    tabBarLabel: "Chat",
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name={focused ? "ios-chatboxes" : "ios-chatboxes-outline"}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    )
  };

  async componentDidMount() {
    await this.switchPropose();
  }

  switchPropose = async () => {
    const proposeId = this.state.proposeId === "99999" ? "99998" : "99999";

    const res = await PortoCredAPI.getPropose(proposeId);

    const propose = proposes.find(p => p.situacao === res.situacao);

    await this.setState({ propose, proposeId });
  };

  render() {
    return (
      <Container>
        <Header>
          <Right>
            <TouchableOpacity onPress={this.switchPropose}>
              <Ionicons name="ios-sync" size={26} color={Colors.white} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>Resumo da sua última proposta</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.cardContainer}>
                <View style={styles.cellContainer}>
                  <Text style={styles.titleText}>Valor solicitado</Text>
                  <Text style={styles.amountText}>{this.state.propose.value}</Text>
                </View>
                <View style={styles.cellContainer}>
                  <Text style={styles.titleText}>Parcelas</Text>
                  <Text>{this.state.propose.plots}</Text>
                </View>
                <View style={styles.cellContainer}>
                  <Text style={styles.titleText}>Status</Text>
                  <Text>{this.state.propose.status}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          {this.state.propose.possibleClient && (
            <View style={styles.offersContainer}>
              <Text>Ofertas</Text>

              {
                offers.map(o => 
                  <Card>
                  <CardItem>
                    <Body style={styles.cardContainer}>
                      <View style={styles.cellContainer}>
                        <Text style={styles.titleText}>Valor ofertado</Text>
                        <Text style={styles.amountText}>{o.value}</Text>
                      </View>
                      <View style={styles.cellContainer}>
                        <Text style={styles.titleText}>Parcelas</Text>
                        <Text>{o.plots}</Text>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
                  )
              }
            </View>
          )}
        </Content>
      </Container>
    );
  }
}
