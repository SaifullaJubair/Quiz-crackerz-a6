document.getElementById('btn-submit').addEventListener('click',function(){
      const emailField = document.getElementById('email-Field')
      const emailFieldValue = emailField.value;
      const passwordField = document.getElementById('password-Field')
      const passwordFieldValue = passwordField.value;
      if( emailFieldValue === 'saifullajubair@gmail.com' && passwordFieldValue === 'Saifulla'){
            window.location.href = 'bank.html'
      }
      else{
            alert('Check email and password')
      }
})