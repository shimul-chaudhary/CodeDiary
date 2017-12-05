import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Item, Input, Left, Right, Icon, Title, Button } from "native-base";
import { StyleSheet,View, Alert } from 'react-native';
import { StackNavigator } from "react-navigation";
import {Main_styles as styles} from './../../Styles/App_styles';
import {fireVar} from './../Firebase/FirebaseConfig';
import axios from 'axios'
import _ from 'lodash'


import {Actions} from "react-native-router-flux";


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
        userId: fireVar.auth().currentUser.uid,
        search_value : '',
        data: []
      }
  }


  componentDidMount() {
   this.getData()
     .then((data1) => {
       this.setState({
         data:data1
       })
     });
 }

  async getData() {
    const response = await fetch("http://localhost:4000/api/entries", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        firebaseID: "1234"
      })
    });
    const json = await response.json();
    return json;
  }


  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-mic" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'green' }}
            onPress={() => this.props.navigation.navigate("NewEntry")}
          >
            <Text>Add New Entry</Text>

          </Button>
                <View>
                {this.state.data.map((v,index)=>{
                     return <Button key={index} full
                     rounded
                     primary
                     style={{ marginTop: 10 }}
                     onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )}
                     >
                     <Text style={{textAlign: 'center'}}>{v.title}</Text>
                     </Button>
                })}
                </View>
                </Content>
      </Container>
    );

  }
}
