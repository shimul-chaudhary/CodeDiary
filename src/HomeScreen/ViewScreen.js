import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import { StyleSheet,View, Alert } from 'react-native';
import {Actions} from "react-native-router-flux";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ocean, tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';
import { Share } from 'react-native';
import { NavigationActions } from 'react-navigation'



export default class ViewScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: this.props.data
    }
  }
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style = {{backgroundColor: '#2f2f2f'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.addEntryPage())}>
            <Icon style = {{color: '#BC3908'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style = {{color: 'white'}}>Code Details</Title>
        </Body>
        <Right></Right>
      </Header>
    )
  });
  render() {
    return (
      <Container style = {styles.bodyStyle}>
        <Content padder>

          <Text style = {{fontSize: 20, fontFamily: "Helvetica Neue", textAlign: 'center', color: 'white'}}>{this.props.data.title}</Text>
          {/* <Text>---</Text> */}
          {/* <Text style = {{fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Code:</Text> */}
          <Card style={styles.cardStyle}>
              <SyntaxHighlighter language={this.props.data.language} style={tomorrowNightEighties}>{this.props.data.codeEntry}</SyntaxHighlighter>
          </Card>
          <Text style = {{marginTop: 10, fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Comments:</Text>
          <Card
          rounded = {true}>
            <CardItem>
              <Text>{this.props.data.comment}</Text>
            </CardItem>
          </Card>
          <Text style = {{fontSize: 16, fontFamily: "Helvetica Neue", textAlign: 'left', color: 'white'}}>Language:</Text>
          <Card
          rounded = {true}>
            <CardItem>
              <Text>{this.props.data.language}</Text>
            </CardItem>
          </Card>

        <View style = {styles.logInBtnView}>
          <Button style = {styles.logInRegisterBtn}
            full
            rounded
            primary
            onPress={() => Share.share({
              message:this.props.data.codeEntry,
              title: this.props.data.title
            }, {
              // Android only:
              dialogTitle: this.props.data.title,
              // iOS only:
              excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
              ]
            })
          }
          >
            <Text>SHARE</Text>
          </Button>
          <Button style = {styles.logInLoginBtn}
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate(Actions.EditEntry1({data:this.props.data}))}
          >
            <Text>EDIT</Text>
          </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
