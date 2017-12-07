import React from "react";
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import {Main_styles as styles} from './../../Styles/App_styles';
import { StyleSheet,View, Alert } from 'react-native';
import {Actions} from "react-native-router-flux";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';
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
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate(Actions.addEntryPage())}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
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
            <Title>Code Details</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

          <Text>Title: {this.props.data.title}</Text>
          <Text>---</Text>
          <Text>Code:</Text>
          <Card style={{width: '100%', height: 200, backgroundColor: 'powderblue'}}>
              <SyntaxHighlighter language={this.props.data.language} style={ocean}>{this.props.data.codeEntry}</SyntaxHighlighter>
          </Card>
          <Text>Comments:</Text>
          <Card>
            <CardItem>
              <Text>{this.props.data.comment}</Text>
            </CardItem>
          </Card>
          <Text>Language:</Text>
          <Card>
            <CardItem>
              <Text>{this.props.data.language}</Text>
            </CardItem>
          </Card>
          <Text>Tags:</Text>
          <Card>
            <CardItem>
              <Text>{this.props.data.metaTags}</Text>
            </CardItem>
          </Card>

          {/* TODO: implement built in share instead of making a separate share component, Share button is not fully functional */}
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
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
            <Text>Share</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate(Actions.EditEntry1({data:this.props.data}))}
          >
            <Text>Edit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
