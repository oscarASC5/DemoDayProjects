firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        firebase.database().ref(user.uid).on('value', function(data) {
            console.log(data.val());

            const settings = document.querySelector(".username");
            settings.innerText = data.val().name
            
        })
    }
})
