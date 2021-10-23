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

function addRoom() {
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
}