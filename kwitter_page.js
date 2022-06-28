// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAn9O5uFZsXz0bRbh1sGp2frq4eE8wb2nI",
      authDomain: "classtest-d0d97.firebaseapp.com",
      projectId: "classtest-d0d97",
      storageBucket: "classtest-d0d97.appspot.com",
      messagingSenderId: "162493727525",
      appId: "1:162493727525:web:26a108acc8d5a089c550cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

            function send()
          {  
                  msg = document.getElementById("msg").value;
                  firebase.database().ref(room_name).push({
                        name:user_name,
                        message:msg,
                        like:0
                  })

                  document.getElementById("msg").value = "";
            }




      } });  }); }
getData();


