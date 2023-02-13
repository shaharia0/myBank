// button js add click event handler with submit button using addeventlistener 
document.getElementById('btn-submit').addEventListener('click', function(){
  //step 2: get the email address using email inside input field 
  // always remembe rto use .value to get text from user input field 
  const emailField = document.getElementById('email');
  const emailValue = emailField.value;
  //step 3: get password 
  //step 3.a : set id on the html element 
  //step: 3.b: get the element 
  // step 3.c: get the value from the element 
  const passwordField = document.getElementById('password');
  const passwordValue = passwordField.value;

  // for practice purpose , dont use in future 
  if(emailValue === 'shaharia@gmail.com' && passwordValue=== 'chowdhury'){
    window.location.href='bank.html';
  }else{
    alert('Provide Valid Email and Password ');
  }

  emailField.value ='';
  passwordField.value='';
})