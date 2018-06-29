import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import {Actions, ActionConst} from 'react-native-router-flux';
import SignupSection from './SignupSection';
//import FirebaseBackend from '../../backend';
import * as firebase from 'firebase';

import {
  AsyncStorage
} from 'react-native'

import Dimensions from 'Dimensions';


export default class LoginScreen extends Component {

   constructor(props) {
    super(props);
    this.state = {
      AndrewId: '',
      password: '',

    };
    firebase.initializeApp({
        apiKey: "AIzaSyBCPe7SKvGizhuDoQACUM8bvpPzm1MJ8HQ",
        authDomain: "qsiurp2018-24c40.firebaseapp.com",
        databaseURL: "https://qsiurp2018-24c40.firebaseio.com",
        projectId: "qsiurp2018-24c40",
        storageBucket: "qsiurp2018-24c40.appspot.com",
        messagingSenderId: "522755047583"
    });
  }

    data=null;
    root_val=null;

    async set_data(AndrewId,password,val){
        
        this.data=val;
        this.root_val= Object.values(this.data)[0];


        if (this.data!==null){
            if (this.root_val.password===password){
                console.log('success');
               try{
                    await AsyncStorage.setItem('user_data',JSON.stringify(this.root_val))
                }
                catch(error){
                    console.log('in set');
                    console.log(error)
                }

                //console.log('after sync');
                Actions.secondScreen();
                
            }
            else{
                console.log('wrong password');
            }
        }
        else{
            console.log('user not found');
        }
    }

  lookup(AndrewId,password){
        
        //console.log('looking up')
      firebase.database().ref('users').orderByChild('AndrewId').equalTo(AndrewId).on("value",(snapshot)=>{(this.set_data(AndrewId,password,snapshot.val()))});
  }

  login = () => {
    //console.log(this.state.AndrewId);
    //console.log(this.state.password);
    this.lookup(this.state.AndrewId,this.state.password);
  
  }


  onChangeText = (e) => {
  if (e.category==='AndrewId'){
    this.state.AndrewId=e.text;
  }
  else{
    this.state.password=e.text;
  }

  }

  render() {
    return (
      <Wallpaper>
        <Logo title= {"LoginScreen"}/>
        <Form onChangeText= {this.onChangeText} />
        <ButtonSubmit loginfn={this.login} />
                <SignupSection />

      </Wallpaper>
    );
  }
}


