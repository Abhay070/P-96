// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtX69rbUebTkdFfMqVhz2CaiIgAt2VZdk",
    authDomain: "letschat-web-app---1-2124e.firebaseapp.com",
    databaseURL: "https://letschat-web-app---1-2124e-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---1-2124e",
    storageBucket: "letschat-web-app---1-2124e.appspot.com",
    messagingSenderId: "969487261528",
    appId: "1:969487261528:web:ded6213a94b5f99c318f2d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();