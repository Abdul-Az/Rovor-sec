// import * as admin from 'firebase-admin';

// var serviceAccount = require("../../../sense-54d59-firebase-adminsdk-it4tx-c7aa8ff248.json");
// var serviceAccount = require("./sense-54d59-firebase-adminsdk-it4tx-c7aa8ff248.json")
// import * as serviceAccount from "./sense-54d59-firebase-adminsdk-it4tx-c7aa8ff248.json";

const  fcm =  
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sense-54d59.firebaseio.com"
  });

  var registrationToken = "fxpDKzeMhoU:APA91bHnDcS1AlQ7U3dYmcCqA6VAH9-jA__B30m6Be3XxDUj2IxWV4REs-i54Uu-9kWBuF8fYT3OK9tz7PYQFPUxisqTLH5Zb7o-01dLJ45pSoPk_wHEpjrKq9Snf3_AbGJ4Q-8FiIxj";

  var payload = {
      data: {
          MyKey1: "Hello User4"
      }
  };
   var options = {
       priority: "high",
       timeToLive: 60*60*24
   };

   admin.messaging().sendToDevice(registrationToken, payload, options)
   .then(function(response) {
       console.log("successfully sent message:", response);
   })
   .catch(function(error){
       console.log("Error sending message:", error);
   })


export fcm;