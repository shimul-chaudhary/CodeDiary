/* eslint no-unused-vars: 0 */

import {StyleSheet, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export const Main_styles = {
    bodyStyle: {
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#2f2f2f'
    },
    logImg:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemInput:{
      marginTop: 20,
      backgroundColor: '#EDEDF4'
    },
    logInRegisterBtn:{
      backgroundColor: '#BC3908',
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10
    },
    logInLoginBtn:{
      backgroundColor: '#417B5A',
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    },
    logInBtnView:{
      marginTop: 50,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 32,
      fontWeight: '500',
      textAlign: 'center',
      color: '#f5f5f1'
    },
    newEntryBtn:{
      backgroundColor: '#417B5A',
      width: 150,
      height: 40,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 110
    },
    newEntryBtnView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    inputBoxStyle: {
      height: 40,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    imageStyle: {
      height: 120,
      width: 120
    },
    itemStyle: {
      color: 'white'
    },
    homeListStyle:{
      marginTop: 10,
      backgroundColor: '#417B5A',
      padding: 10,
    },
    bigListStyle:{
      
    },
    cardStyle:{
      backgroundColor: '#417B5A',
      width: '100%', 
      height: 100,
      marginTop: 20,
      borderColor: '#417B5A',
      borderBottomWidth: 5,
      borderRightWidth: 5,
      borderLeftWidth: 5,
      borderBottomColor: '#417B5A',
      borderTopWidth: 0
    },
}
