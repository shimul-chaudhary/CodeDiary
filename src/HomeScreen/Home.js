import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Item, Input, Left, Right, Icon, Title, Button,List,ListItem } from "native-base";
import { StyleSheet,View, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator,NavigationActions } from "react-navigation";
import {Main_styles as styles} from './../../Styles/App_styles';
import {fireVar} from './../Firebase/FirebaseConfig';
import axios from 'axios'
import _ from 'lodash'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ocean,tomorrowNightBlue,tomorrowNightEighties,atelierLakesideLight} from 'react-syntax-highlighter/dist/styles';


import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['language','title', 'comment'];


import {Actions} from "react-native-router-flux";


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
        userId: fireVar.auth().currentUser.uid,
        search_value : '',
        data: [],
        searchTerm: ''
      }

  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
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
    const response = await fetch("http://165.227.123.227:4001/api/entries", {
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
      <Header style = {{backgroundColor: '#2f2f2f'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.login())}>
            <Text style = {{color: '#BC3908'}}>Log Off</Text>
          </Button>
        </Left>
        <Body>
          <Title style = {{color: 'white'}}> Home</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    const code_filter = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <Container style = {styles.bodyStyle}> 
          <Item rounded = {true}
          style = {styles.itemInput}>
            <Icon style = {{marginLeft: 10, marginRight: 10}} name="ios-search" />
            <Input placeholder="Search" onChangeText={(term) => { this.searchUpdated(term) }}/>
          </Item>
        <Content padder>
        <View style = {styles.newEntryBtnView}> 
          <Button
            full
            rounded
            primary
            //style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'green' }}
            style = {styles.newEntryBtn}
            onPress={() => this.props.navigation.navigate(Actions.addscreen1({user:this.state.userId}))}
          >
            <Text>ADD ENTRY</Text>

          </Button>
          </View>
          <View style = {styles.bigListStyle}>
          <List
          rounded = {true}>
          {code_filter.map(v => {
            // return <ListItem full
            //   style = {styles.homeListStyle}
            //   button = {true}

            //   onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )}
            //   >

              return <Card transparent = {true} 
                      bordered = {false} 
                      style = {styles.cardStyle} 
                      onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )} >
                  <Text style={{fontSize: 18, fontFamily: "Helvetica Neue", textAlign: 'center', color: 'white'}} >{v.title} - {v.language}</Text>
                  <SyntaxHighlighter language={v.language} style={tomorrowNightEighties} onPress={() => this.props.navigation.navigate(Actions.viewscreen1({ data : v }) )}>{v.codeEntry}</SyntaxHighlighter>
                  <View style = {{backgroundColor: "red"}}>
                  {/* <Text style={{fontSize: 15, fontFamily: "Helvetica Neue", color: 'white'}} >{v.language}</Text> */}
                  </View>
                </Card>

              // </ListItem>
            })}
          </List>
          </View>
          </Content>
      </Container>
    );

  }
}
