import React from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground } from 'react-native';
import ImageOverlay from './ImageOverlay';




export default class Banner extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <ImageBackground source={require('../img/2.jpg')}
                       style={styles.banner}>
                <ImageOverlay
                    header='Mobile online shop'
                    paragraph='All mobile available in shop'
                    />

                </ImageBackground>
                {/*<Text style={styles.logo}>Mobile E-commerce*/}

                {/*</Text>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
   banner:{
       width:'100%',
       height:200,
       alignItems:'center',
       justifyContent:'center',

   }
});