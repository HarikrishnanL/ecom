import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Button } from 'react-native';
import Header from './app/components/header';
import Banner from './app/components/Banner';
import Contentecom from './app/components/Contentecom';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginView from './app/components/login';
import SignUp from './app/components/signup';


class HomeScreen extends React.Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <Button
                    title="login"
                    onPress={() => this.props.navigation.navigate('login')}
                />
                <Button
                    title="Sign"
                    onPress={() => this.props.navigation.navigate('signup')}
                />

                <Header/>
                <Banner/>
                <Contentecom/>

            </ScrollView>



        );
    }
}
class DetailsScreen extends React.Component {
    render() {
        return (

            <LoginView />

        );
    }
}
class SignUpL extends React.Component {
    render() {
        return (

            <SignUp />

        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        login: DetailsScreen,
        signup:SignUpL,
    },
    {
        initialRouteName: 'Home',
    }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render(){
    return(
       <AppContainer />

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
});