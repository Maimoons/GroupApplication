import React from 'react';
import PropTypes from 'prop-types';
import FormSignup from './FormSignup';
import Wallpaper from '../Wallpaper';
import ButtonSubmitSignup from './ButtonSubmitSignup';
import Logo from './LogoSignup';
import * as firebase from 'firebase';

import {Actions, ActionConst} from 'react-native-router-flux';
import Dimensions from 'Dimensions';



import { createStackNavigator } from 'react-navigation';



import { StyleSheet, Text, View, ImageBackground,
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity,
  AsyncStorage} from 'react-native';



export default class SIgnup extends React.Component {

   constructor(props) {
    super(props);
    this.state ={
      comp:'signup',
      Andrew_Id: '',
      First_name:'',
      Password:'',
      re_enter:'',
    }

    
  }

  data=null;
  root_val=null;

  entire_db=null;
  user_count=null;

  insert_in(First_name,Andrew_ID,password,re_enter,path){
    firebase.database().ref(path).set(
                {
                    Name: First_name,
                    password: password,
                    AndrewId: Andrew_ID,
                    email: Andrew_ID+'@andrew.cmu.edu',
                    image:'https://firebasestorage.googleapis.com/v0/b/qsiurp2018-24c40.appspot.com/o/scotty.jpg?alt=media&token=d18a50a4-0ed2-48b5-a149-e187bea17ca7',
                    phone:'88888888'

                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
  }

//+ this.user_count.toString()
  set_data_1(First_name,Andrew_ID,password,re_enter,val){
        
        this.entire_db=val;
        //console.log(this.entire_db);
        if (this.entire_db!==null){
          this.user_count=Object.keys(this.entire_db).length+1;
        }
        else{
          this.user_count=1;
        }
        //console.log('about to insert');
        this.insert_in(First_name,Andrew_ID,password,re_enter,'users/'+Andrew_ID)
        
    }

  set_data(First_name,Andrew_ID,password,re_enter, val){
        
        this.data=val;
        console.log(this.data);
        if(this.data!==null){
          alert('User already exists');
          return ("getting out of here");
        }
        else{
          firebase.database().ref('users').on("value",(snapshot)=>{(this.set_data_1(First_name,Andrew_ID,password,re_enter,snapshot.val()))}) 
        }
    }

  insert(First_name,Andrew_ID,password,re_enter){

    firebase.database().ref('users').orderByChild('AndrewId').equalTo(Andrew_ID).on("value",(snapshot)=>{(this.set_data(First_name,Andrew_ID,password,re_enter,snapshot.val()))});
  }

  signupFn = () => {
    //alert('Sign Up Successful');

    this.insert(this.state.First_name,this.state.Andrew_Id,this.state.Password,this.state.re_enter);
  }



  onChangeText = (e) => {
  
  if (e.category==='Andrew_Id'){
    this.state.Andrew_Id=e.text;
    //console.log(this.state.Andrew_Id+' andrew');
  }
  else if (e.category==='Name'){
    this.state.First_name=e.text;
    //console.log(this.state.First_name+' fname');
  }
  else if (e.category==='Password'){
    this.state.Password=e.text;
    //console.log(this.state.Password+' pass')
  }
  else {
    this.state.re_enter=e.text;
    //console.log(this.state.re_enter+' re_pass')
  }
}

  
  render() {
    return (
      <Wallpaper>
        <Logo title= {"SignupScreen"}/>

        <FormSignup onChangeText= {this.onChangeText} />
        <ButtonSubmitSignup signupFn={this.signupFn} />
      </Wallpaper>
    );
  }
}


