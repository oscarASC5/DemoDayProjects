const name = document.querySelector("#name")
console.log(name.value)
 //prescribed medication 
const title = document.querySelector("#sport")
console.log(title.value)
const btn = document.querySelector("#Save")
btn.addEventListener("click", function() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            firebase.database().ref(user.uid).set({
                name: name.value,
                meds: sport.value
            });
        }
    })
    console.log(name.value, sport.value)
})
