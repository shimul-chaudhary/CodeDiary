import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import { StyleSheet,View, Alert,TextInput } from 'react-native';

export default class EditEntry extends React.Component {

  constructor(props){
    super(props)
    this.state={
      userI:this.props.data.firebaseOwnerID,
      text:this.props.data.title,
      text1: this.props.data.codeEntry,
      text2: this.props.data.comment,
      text3: this.props.data.language,
      //text4: [this.props.data.metaTags]

    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.stateChecker = this.stateChecker.bind(this);
    this.savestate = this.savestate.bind(this);
  }
  componentWillReceiveProps(nextProps) {
  if(this.props != nextProps) {
    this.setState({
      text4: nextProps.data.metaTags
    });
  }
}
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Code Details</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  inputChangeHandler(event){
    this.setState({
      value: event.target.c_code
    });
  }
  stateChecker(){
    var x = "http://localhost:4000/api/code/";
    var y = x + this.props.data._id;
    console.warn(y)
  }
  savestate(){
    var x = "http://localhost:4000/api/code/";
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
        tags: this.state.text4
  })
});
this.props.navigation.goBack();
  }
  render() {

    return (
      <Container>

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
              />
          <Text>Comments:</Text>
              <TextInput
                style={{height: 40, borderColor: 'blue', borderWidth: 1}}
                onChangeText={(text2) => this.setState({text2})}
                value={this.state.text2}
              />
          <Text>Language:</Text>
            <TextInput
              style={{height: 40, borderColor: 'blue', borderWidth: 1}}
              onChangeText={(text3) => this.setState({text3})}
              value={this.state.text3}
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
