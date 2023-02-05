const admin = require('firebase-admin');
const serviceAccount = require('./keyFirebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ecommerce-fb-f8323.firebaseio.com'
})
const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
const queryCarritos = db.collection('carritos');
const queryProductos = db.collection('productos');

module.exports = {
    queryCarritos,
    queryProductos,
    FieldValue
};