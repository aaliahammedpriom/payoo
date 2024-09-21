 // get login button
 document.getElementById("login-js").addEventListener('click',function(event){
    // console.log('Button Clicked');
    // preventing from reloding
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number-js');
    const pinNumber =document.getElementById('pin-js').value;
    // console.log(phoneNumber.value);
    // console.log(phoneNumber);
    if(phoneNumber.value.length == 1 && phoneNumber.value == 1 && pinNumber == 1 ){
      console.log(true);
      window.alert(' Correct ! \nPress Ok for Dashboard')
      window.location.href ="home.html";
    }
    else{
      console.log(false);
      window.alert( "Wrong Pin ! \nPleaase Try Again.")
    }

  })

