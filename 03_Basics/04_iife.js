// Immediatly invoked function expression

(function chai () {
    console.log(`DB Connected Successfully`);
})();

(function chai () {
    console.log(`DB Two Connected Successfully`);
})();


(  (name) =>{
    console.log(`Hi ${name}, DB Three Connected successfully`);
}) ("Shubham")