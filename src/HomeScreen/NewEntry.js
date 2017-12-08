import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import { StyleSheet,View, Alert,TextInput,Picker } from 'react-native';
import {Actions} from "react-native-router-flux";

export default class NewEntry extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userI:this.props.user,
      text: '',
      text1: '',
      text2: '',
      text3: '',
      text4: ''

    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.stateChecker = this.stateChecker.bind(this);
    this.savestate = this.savestate.bind(this);
  }
  inputChangeHandler(event){
    this.setState({
      value: event.target.c_code
    });
  }
  stateChecker(){
    console.warn(this.state)
  }
  savestate(){
    fetch("http://165.227.123.227:4001/api/code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firebaseID: this.props.user,
        language: this.state.text3,
        code: this.state.text1,
        comment: this.state.text2,
        title: this.state.text,
        tags: this.state.text4
  })
});
this.props.navigation.navigate(Actions.addEntryPage());
  }
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.addEntryPage())}>
            <Icon name="arrow-back" />
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
        <Header>
          <Left>

          </Left>
          <Body>
            <Title>Add New Entry</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Title:</Text>
            <TextInput
              style={{height: 40, borderColor: 'blue', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          <Text>Code:</Text>
              <TextInput
                style={{height: 40, borderColor: 'blue', borderWidth: 1}}
                onChangeText={(text1) => this.setState({text1})}
                value={this.state.text1}
                multiline={true}
              />
          <Text>Comments:</Text>
              <TextInput
                style={{height: 40, borderColor: 'blue', borderWidth: 1}}
                onChangeText={(text2) => this.setState({text2})}
                value={this.state.text2}
              />
          <Text>Language:</Text>
            <Picker
              selectedValue={this.state.text3}
              onValueChange={(itemValue, itemIndex) => this.setState({text3: itemValue})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="javaScript" />
              <Picker.Item label="Python" value="python" />
              <Picker.Item label="Ruby" value="ruby" />
              <Picker.Item label="Elm" value="elm" />
              <Picker.Item label="React" value="react" />
            </Picker>
          <Text>Tags:</Text>
            <TextInput
              style={{height: 40, borderColor: 'blue', borderWidth: 1}}
              onChangeText={(text4) => this.setState({text4})}
              value={this.state.text4}
            />
            <Button
              full
              rounded
              primary
              style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'green' }}
              onPress={this.savestate}
            >
              <Text>SAVE</Text>
            </Button>
        </Content>

      </Container>
    );
  }
}
