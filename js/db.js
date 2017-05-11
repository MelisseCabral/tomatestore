class Sell {

}

class Storage {

}

class User {}


document.getElementById("buttonL").addEventListener("click", dbTomateStore);


function writeUserData(name, govId, userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        cpf: govId,
        email: email,
    });
}

function dbTomateStore() {

    //Create references
    const dbRefObject = firebase.database().ref().child('product');

    //Sync object changes
    dbRefObject.push({
        teclado: {
            codeproduct: "2",
            quantity: "3232"
        }
    });
}
