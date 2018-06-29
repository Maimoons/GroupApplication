import * as firebase from 'firebase';

class FirebaseBackend{

    // initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
        apiKey: "AIzaSyBCPe7SKvGizhuDoQACUM8bvpPzm1MJ8HQ",
        authDomain: "qsiurp2018-24c40.firebaseapp.com",
        databaseURL: "https://qsiurp2018-24c40.firebaseio.com",
        projectId: "qsiurp2018-24c40",
        storageBucket: "",
        messagingSenderId: "522755047583"
    });

    
    
  }

    data=null;
    root_val=null;

    set_data(password,val){
        
        this.data=val;
        console.log(this.data);
        this.root_val= Object.values(this.data)[0];

        if (this.data!==null){
            if (this.root_val.password===password){
                console.log('success');
                return ('success');
            }
            else{
                console.log('wrong password');
                return ('wron password');
            }
        }
        else{
            console.log('user not found');
            return('user not found');
        }
    }

    insert(username,password,Andrew_ID){
            console.log('Inserting!!!')
            firebase.database().ref('users/001').set(
                {
                    username: username,
                    password: password,
                    andrew_id: Andrew_ID
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }

    lookup(username,password){
        
        console.log('looking up')
        console.log(firebase.database().ref('users').orderByChild('username').equalTo(username).on("value",(snapshot)=>{ return(this.set_data(password,snapshot.val()))}) );
        

        //this.database = firebase.database();
        //const userId = firebase.auth().currentUser.uid;          
        //firebase.database().ref('users').on("value", snapshot => { console.log(snapshot.val());});

   

}

}

export default new FirebaseBackend();