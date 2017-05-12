document.getElementById("buttonL").addEventListener("click", dbTomateStore);

function dbTomateStore() {

    //Create references
    const dbRefObject = firebase.database().ref().child('sells');

    //Sync object changes
    dbRefObject.push({
        name:
        codeproduct: "2",
        quantity: "3232"
    });

    console.log("passou");
}
