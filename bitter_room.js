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
document.getElementById('user_name').innerHTML = "Hello " + user_name + '!';

function getData() {firebase.database().ref("/").on('value',function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
  childKey = childSnapshot.key;
  Room_names = childKey;
  console.log('Room Name - ' + Room_names);
  row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById('output').innerHTML += row;
  });});}
  getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref('/').child(room_name).update({purpose: 'adding room name'});

  localStorage.setItem("room_name", room_name);

  window.location = 'bitter_page.html';
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem('room_name', name);
  window.location = "bitter_page.html";
}