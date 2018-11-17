import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import PortoCredAPI from '../../services/PortoCredAPI'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      client: ''
    }
  }

  async componentDidMount(){
    const client = await PortoCredAPI.getClientes(); 

    this.setState({client})
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   {JSON.stringify(this.state.client)}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}