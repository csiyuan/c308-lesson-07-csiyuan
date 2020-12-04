import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const MainPage: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'yellow',
            textAlign: 'center',
          }}>
          Welcome to the Club!
        </Text>
      </View>
      <View style={styles.squarePic}>
        <ImageBackground
          source={require('./img/bernie.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.name}>
        <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
          Bernie Quak
        </Text>
      </View>

      <View style={(styles.parent, {flexDirection: 'row'})}>
        <View
          style={[styles.child, {color: 'white', backgroundColor: '#ba7d71'}]}>
          <Text style={{color: 'white'}}>Explore</Text>
        </View>
        <View
          style={[styles.child, {color: 'white', backgroundColor: '#509bc7'}]}>
          <Text style={{color: 'white'}}>Follow</Text>
        </View>
      </View>

      <View style={styles.header2}>
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
            color: 'white',
          }}>
          Other Characters:
        </Text>
      </View>
      <View style={styles.bottomHalf}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/doctor.jpg')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Doctor Guinn
            </Text>
          </View>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/ninja.jpg')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Black Ninja
            </Text>
          </View>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/scarfboy.png')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Xiao Boy Boy
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/sensei.png')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Ah Gong
            </Text>
          </View>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/stoneninja.png')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Stone Ninja
            </Text>
          </View>
          <View style={[styles.imageChild]}>
            <ImageBackground
              source={require('./img/shopManager.png')}
              style={{width: '100%', height: '100%'}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              E-boy
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.footer]}>
        <Text
          style={{textAlign: 'center', fontStyle: 'italic', color: 'white'}}>
          Sign up @clubpenguin.com now to join our family
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 25,
    width: '100%',
    backgroundColor: '#15576b',
  },
  squarePic: {
    width: 100,
    height: 100,
    backgroundColor: '#ae8234',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 25,
    borderWidth: 2,
  },
  name: {
    width: 120,
    height: 25,
    // backgroundColor: '#ae8234',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: 78,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header2: {
    height: 20,
    width: '100%',
    backgroundColor: '#15576b',
  },
  bottomHalf: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageChild: {
    marginRight: 8,
    marginLeft: 8,
    // backgroundColor: '#ae8234',
    width: 100,
    height: 100,
    borderWidth: 2,
  },
  footer: {
    height: 30,
    width: '100%',
    backgroundColor: '#509bc7',
  },
});

export default MainPage;
