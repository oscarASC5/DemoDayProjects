// document.getElementById('a').onclick = function() {
//     window.location.href = 'homepage.html';
    
//     return false;
// }
const btn = document.querySelector('#home');
btn.addEventListener('click', function(){
    window.location.href = 'homepage.html';
    
    return false; 
})
let usr;
firebase.auth().onAuthStateChanged(function(user){
    usr= user;
    if (user){
        console.log(user.uid);
    }
})


//   firebase.auth().onAuthStateChanged(function(user){
//     // if user is logged in
// ​
//   if (user){
//       console.log(user.uid);
// ​
//       firebase.database().ref(user.uid).on('value', function(data){
//       console.log(data.val());
//       document.getElementById('name').value = data.val().Name
//       document.getElementById('age').value = data.val().Age
//       document.getElementById('location').value = data.val().Location
//       document.getElementById('sport').value = data.val().Sport
//       document.getElementById('level').value = data.val().SkillLevel
      
// ​
//     })
//   }
// })
// ​
//   function writeData(event){
//       console.log(event)
//     event.preventDefault();
//   if (usr){
//     firebase.database().ref(usr.uid).set({
//         Name: document.getElementById("name").value,
//         Age: document.getElementById("age").value,
//         Location: document.getElementById("location").value,
//         Sport: document.getElementById("sport").value,
//         SkillLevel: document.getElementById("level").value
        
        
//     });
    
//       }}