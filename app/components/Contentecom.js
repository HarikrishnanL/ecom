import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import CustomImage from './CustomImage';




export default class Contentecom extends React.Component {
    render(){
        return(
            <View style={styles.content}>
                <View style={styles.column2}>
                    <CustomImage imageSource={require('../img/5.jpg')}
                    header='VIVO Mobiles'
                                 paragraph='Vivo mobiles new sale offer'
                    />

                </View>
                <View style={styles.column1}>
                    <CustomImage imageSource={require('../img/6.jpg')}
                                 header='OPPO'

                    />

                </View>

                <View style={styles.contentBanner}>
                    <CustomImage imageSource={require('../img/7.jpg')}

                                 header='All Mobiles'

                    />

                </View>

                <View style={styles.column2}>
                    <CustomImage imageSource={require('../img/8.jpg')}

                    />

                </View>
                <View style={styles.column1}>
                    <CustomImage imageSource={require('../img/10.png')}

                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  content:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      padding:5,
  },
  column1:{
      flex: 1,
      padding: 5,
  },
  column2:{
      flex:2,
      padding:5,
  },

    contentBanner:{
      width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    }
});