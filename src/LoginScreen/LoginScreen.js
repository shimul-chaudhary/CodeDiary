import React from "react";
import { StatusBar, View, Image } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Form, Item, Input, Label } from "native-base";
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
      const response = await fetch("http://165.227.123.227:4001/api/user", {
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

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style = {{backgroundColor: '#2f2f2f'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.login())}>
            <Text></Text>
          </Button>
        </Left>
        <Body>
          {/* <Title>Log In</Title> */}
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <Container style={styles.bodyStyle}>
       <Content padder>
        <View style = {styles.logImg}>
          <Image
            resizeMethod = "auto"
            resizeMode = "cover"
            source={require('./../../snippet_img.png')}
          />
        </View>
          <Form style = {{marginTop: 70}}>
            <Item
            underline = {true}
            rounded = {true}
            style = {styles.itemInput}>
              <Input 
              placeholder = "Email"
              style = {{marginLeft: 18}}
              onChangeText={(text) => this.setState({email: text})}
              value = {this.state.email}
              autoCorrect = {false}
              returnKeyType = "next"
              autoCapitalize = "none"
              keyboardAppearance = "dark"
              />
            </Item>
            <Item last
            underline = {true}
            rounded = {true}
            style = {styles.itemInput}>
              <Input 
              placeholder = "Password"
              onChangeText={(text) => this.setState({password: text})}
              value = {this.state.password}
              secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
              returnKeyType = "done"
              keyboardAppearance = "dark" 
              />
            </Item>
          </Form>
          <View style = {styles.logInBtnView}>
          <Button
            full
            rounded
            primary
            style = {styles.logInRegisterBtn}
            onPress = {this.register}
            //onPress={() => this.props.navigation.navigate("Home")}
            >
            <Text style = {{color: 'white', fontStyle: "normal", fontSize: 20, fontFamily: "Helvetica Neue"}}>REGISTER</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style = {styles.logInLoginBtn}
            onPress = {this.login}
            //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style = {{color: 'white', fontStyle: "normal", fontSize: 20, fontFamily: "Helvetica Neue"}}>LOGIN</Text>
          </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
