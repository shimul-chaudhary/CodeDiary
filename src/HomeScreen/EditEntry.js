import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import { StyleSheet,View, Alert,TextInput,Picker } from 'react-native';
import {Actions} from "react-native-router-flux";


export default class EditEntry extends React.Component {

  constructor(props){
    super(props)
    this.state={
      userI:this.props.data.firebaseOwnerID,
      text:this.props.data.title,
      text1: this.props.data.codeEntry,
      text2: this.props.data.comment,
      text3: this.props.data.language,

    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.stateChecker = this.stateChecker.bind(this);
    this.savestate = this.savestate.bind(this);
    this.deletestate = this.deletestate.bind(this);
  }

  inputChangeHandler(event){
    this.setState({
      value: event.target.c_code
    });
  }
  stateChecker(){
    var x = "http://165.227.123.227:4001/api/code/";
    var y = x + this.props.data._id;
    console.warn(y)
  }
  savestate(){
    var x = "http://165.227.123.227:4001/api/code/";
    var y = x + this.props.data._id;

    fetch(y, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        language: this.state.text3,
        code: this.state.text1,
        comment: this.state.text2,
        title: this.state.text,
  })
});
this.props.navigation.navigate(Actions.addEntryPage());
  }



  deletestate(){
    var x = "http://165.227.123.227:4001/api/code/";
    var y = x + this.props.data._id;

    fetch(y, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
  });
  this.props.navigation.navigate(Actions.addEntryPage());
  }
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style = {{backgroundColor: '#2f2f2f', borderBottomWidth: 0}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.addEntryPage())}>
            <Icon style = {{color: '#BC3908'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style = {{color: 'white'}}>Edit Entry</Title>
        </Body>
        <Right />
      </Header>
    )
  });


  render() {

    return (
      <Container style = {styles.bodyStyle}>
        <Content padder>
          <Text style = {{marginTop: 10, fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Title:</Text>
            <TextInput
              style={{height: 40, borderColor: 'white', borderWidth: 1, backgroundColor: '#EDEDF4'}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          <Text style = {{marginTop: 10, fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Code:</Text>
              <TextInput
                style={{height: 200, borderColor: '#417B5A', borderWidth: 5, backgroundColor: '#EDEDF4'}}
                onChangeText={(text1) => this.setState({text1})}
                value={this.state.text1}
                multiline={true}
              />
          <Text style = {{marginTop: 10, fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Comments:</Text>
              <TextInput
                style={{height: 40, borderColor: 'white', borderWidth: 1, backgroundColor: '#EDEDF4'}}
                onChangeText={(text2) => this.setState({text2})}
                value={this.state.text2}
              />
          <Text style = {{marginTop: 10, fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Language:</Text>
            <Picker 
              selectedValue={this.state.text3}
              onValueChange={(itemValue, itemIndex) => this.setState({text3: itemValue})}>
              <Picker.Item color = "white" label="Java" value="java" />
              <Picker.Item color = "white" label="JavaScript" value="javaScript" />
              <Picker.Item color = "white" label="Python" value="python" />
              <Picker.Item color = "white" label="Ruby" value="ruby" />
              <Picker.Item color = "white" label="Elm" value="elm" />
              <Picker.Item color = "white" label="React" value="react" />
            </Picker>
            <View style = {styles.editEntryBtnView}>
            <Button
              full
              rounded
              primary
              style = {styles.saveBtn}
              onPress={this.savestate}
            >
              <Text>SAVE</Text>
            </Button>

            <Button
              style = {styles.deleteBtn}
              full
              rounded
              primary
              onPress={this.deletestate}
            >
              <Text>DELETE</Text>
            </Button>
            </View>
        </Content>

      </Container>
    );
  }
}
