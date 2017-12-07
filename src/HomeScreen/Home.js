import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Item, Input, Left, Right, Icon, Title, Button,List,ListItem } from "native-base";
import { StyleSheet,View, Alert, FlatList } from 'react-native';
import { StackNavigator,NavigationActions } from "react-navigation";
import {Main_styles as styles} from './../../Styles/App_styles';
import {fireVar} from './../Firebase/FirebaseConfig';
import axios from 'axios'
import _ from 'lodash'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ocean,tomorrowNightBlue } from 'react-syntax-highlighter/dist/styles';


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

  componentWillMount() {
    //console.warn("here");
    this.getData()
      .then((data1) => {
        this.setState({
          data:data1
        })
      });
    //  console.warn();
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
        firebaseID: this.state.userId
      })
    });
    const json = await response.json();
    return json;
  }
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.login())}>
            <Text>Log Off</Text>
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
    )
  });

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
            onPress={() => this.props.navigation.navigate(Actions.addscreen1({user:this.state.userId}))}
          >
            <Text>Add New Entry</Text>

          </Button>

          <List>
          {this.state.data.map((v,index)=>{
              return <ListItem key={index} full
               rounded
               primary
               style={{ marginTop: 10 },{padding: 10 }}
               button = {true}

               onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )}
               >

               <Card onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )} style={{width: '100%', height: 100}} >
                    <Text style={{textAlign: 'Left'}} >{v.title}</Text>
                    <SyntaxHighlighter language={v.language} style={tomorrowNightBlue} onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )}>{v.codeEntry}</SyntaxHighlighter>
                    <Text style={{fontSize: 15},{color: 'blue'}} >{v.language}</Text>
                 </Card>

               </ListItem>
          })}
          </List>
                </Content>
      </Container>
    );

  }
}
