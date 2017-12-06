import React from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Form, Item, Input } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import {fireVar} from './../Firebase/FirebaseConfig';
import {Actions} from "react-native-router-flux";


export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {email: '', password: '', status: ''}
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  login(){
    fireVar.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(firebaseUser) {
      Actions.addEntryPage()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = (error.code);
      var errorMessage = (error.message);
      if(error){
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        }
        else {
          alert(errorMessage);
        }
      }
    });
  }

  register(){
    fireVar.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(async function(firebaseUser) {
      var user = fireVar.auth().currentUser;
      //console.warn('here')
      const response = await fetch("http://localhost:4000/api/user", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firebaseID: user.uid,
          email: user.email
        })
      });
      Actions.addEntryPage()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = (error.code);
      var errorMessage = (error.message);
      if(error){
        alert(errorMessage);
      }
    });
  }

  render() {
    return (
      <Container style={styles.bodyStyle}>
        <Header>
          <Body>
            <Title>Code Diary</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item>
              <Input placeholder = "Username"
              onChangeText={(text) => this.setState({email: text})}
              value = {this.state.email}
              autoCorrect = {false}
              returnKeyType = "next"
              autoCapitalize = "none"
              keyboardAppearance = "dark"

              />
            </Item>
            <Item last>
              <Input placeholder="Password"
              onChangeText={(text) => this.setState({password: text})}
              value = {this.state.password}
              secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
              returnKeyType = "done"
              keyboardAppearance = "dark" />
            </Item>
          </Form>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress = {this.login}
            //onPress={() => this.props.navigation.navigate("Home")}
            >
            <Text>Login</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress = {this.register}
            //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
