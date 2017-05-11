(function dbTomateStore() {

    //Get elements
    const preObject = document.getElementById('object');

    //Create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefObject = firebase.database().ref().child('hobbies')

    //Sync object changes
    dbRefObject.on('value', snap => {
       preObject.innerHTML = JSON.stringify(snap.val(), null, 3);
    });

    bdRefList.on('child_added', snap => console.log(snap.val()));
}())
