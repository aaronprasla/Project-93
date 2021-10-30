var firebaseConfig = {
    apiKey: "AIzaSyBfRW0uD04nidNYlPFhYcun5Rkh1qExSKs",
    authDomain: "bitter2-ae677.firebaseapp.com",
    databaseURL: "https://bitter2-ae677-default-rtdb.firebaseio.com",
    projectId: "bitter2-ae677",
    storageBucket: "bitter2-ae677.appspot.com",
    messagingSenderId: "118093837239",
    appId: "1:118093837239:web:abd101270489f4984d6e32"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById('room_name_display').innerHTML = '#' + room_name;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    }});});}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem('room_name');
    window.location = 'index.html'; 
}

function send() {
    msg = document.getElementById('msg').value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById('msg').value ='';
}