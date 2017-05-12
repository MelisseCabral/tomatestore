document.getElementById("buttonL").addEventListener("click", dbTomateStore);

function receiveNewSell(username, clientaddress, details, cid, productData, value) {
    // A generic sell entry.
    var genericData = {
        client: clientname,
        address: clientaddress,
        description: details,
        cpf: cid,
        product: productData,
        total: value

    };

    return genericData;
}

function receiveProductSell(pid, productname, price, units) {

    // A product sell entry.
    var productData = {
        key: pid,
        name: productname,
        price: price,
        qnt: units
    };
    return productData;
}

function processProductSell(pid, productname, price, units) {

    // For each row at table of products create an array of products.
    var table = document.getElementById("mytab1");
    var productData = {};
    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        productData = receiveProductSell("121", "121", "121", "121");
    }
}

function writeNewSell() {

    // Get a key for a new Post.
    var newSelltKey = firebase.database().ref().child('sells').push().key;

    // Write the whole new sell.
    var updates['/sells/' + newSelltKey] = receiveNewSell(processProductSell);

    return firebase.database().ref().update(updates);
}
