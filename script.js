const div = document.getElementById('toogle-portion');
const button = document.getElementById('btn-focus');

div.addEventListener('click', () => {
   button.focus();
   

});
div.addEventListener('mouseenter', () => {
   button.focus();

});
div.addEventListener('mouseleave', () => {
   button.blur();

});
// changing input field-----------------
const mail = document.getElementById('email');
const phno = document.getElementById('phno');
const phondiv = document.getElementById('phonediv');
const maildiv = document.getElementById('maildiv');
phondiv.classList.add('phoninput');
maildiv.classList.remove('emailinput');
phno.addEventListener('click', function () {

   if (phno.checked) {

      phondiv.classList.remove('phoninput');
      maildiv.classList.add('emailinput');
      phondiv.style.margin = '-20px'
   }

})
mail.addEventListener('click', function () {

   if (mail.checked) {
      phondiv.classList.add('phoninput');
      maildiv.classList.remove('emailinput');

   }

})

// mail validatiion------------------------------
const email = document.getElementById('EMail');
const errorshower = document.getElementById('errorshower');
errorshower.classList.remove('eror')
errorshower.innerHTML = "Enter a valid Email";
errorshower.style.color = 'red'
function validatemail() {
   const maill = email.value.trim();
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if (emailPattern.test(maill)) {
      email.style.color = 'green';
      errorshower.innerHTML = "";
   
   }
   else {
      email.style.color = 'red';
      errorshower.innerHTML = "Enter a valid Email";
      errorshower.style.color = 'red'
    
   }

};
// phno validation-------------------------------------
// const phono = document.getElementById('phonenum').value
// const errortwo = document.getElementById('errortwoshow');
// function validphone() {

//    if (phono.length != 10) {
   
//       errortwo.innerHTML = "Enter valid Phone Number";
//       errortwo.style.fontSize = '9';
//       errortwo.style.color = 'red';


//    }

// }