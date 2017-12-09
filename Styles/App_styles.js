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
      //marginLeft: 110
    },
    newEntryBtnView:{
      flexDirection: "row",
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
      backgroundColor: '#2f2f2f',
      borderBottomWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 0,
    },
    bigListStyle:{
      backgroundColor: '#2f2f2f',
      borderBottomWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardBtnView:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    cardStyle:{
      backgroundColor: '#417B5A',
      width: '100%', 
      marginLeft: 0,
      marginRight: 0,
      height: 200,
      borderColor: '#417B5A',
      borderBottomWidth: 5,
      borderRightWidth: 5,
      borderLeftWidth: 5,
      borderBottomColor: '#417B5A',
      borderTopWidth: 5,
    },
    deleteBtn:{
      backgroundColor: '#BC3908',
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    },
    saveBtn:{
      backgroundColor: '#417B5A',
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10
    },
    editEntryBtnView:{
      //marginTop: 50,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 80
    },
}
