var firebaseConfig = {
    apiKey: "AIzaSyAuJ2ZVP9iN6GrZnAvdtVE_iW_LJCFJxx8",
    authDomain: "let-s-chat-aa4b4.firebaseapp.com",
    projectId: "let-s-chat-aa4b4",
    storageBucket: "let-s-chat-aa4b4.appspot.com",
    messagingSenderId: "293069127668",
    appId: "1:293069127668:web:815409ad2d3ebc63e383a1",
    measurementId: "G-N56L1EFKJ1"
  };
  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});});}
getData();
