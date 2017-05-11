(function dbTomateStore() {


    console.log("initing");

    //Get elements
    const preObject = document.getElementById('object');


    //Create references
    const dbRefObject = firebase.database().ref().child('Object');

    //Sync object changes
    dbRefObject.on('value', snap => console.log(snap.val()));

}());
