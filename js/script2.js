// confirm button event
// document.getElementById('confirm-js').addEventListener('click',function(event){
//     event.preventDefault();
//     alert('Please Select What You Want !')
// })

// add money event
document.getElementById('add-money-js').addEventListener('click', function(event){
    // 
    document.getElementById('add-money-form-js').style.display = "block";
    document.getElementById('cash-out-form-js').style.display = "";

    // Confirm Add Money event
    document.getElementById('add-money-confirm-js').addEventListener('click',function(event){

    // event preventing
    event.preventDefault();

    if(document.getElementById('add-money-pin-js').value == 1234){
        // update blance event
        document.getElementById('blance-js').innerHTML = parseFloat(document.getElementById('add-money-amount-js').value) + parseFloat(document.getElementById('blance-js').innerHTML); 
        
    }
    else{
        alert("Wrong PIN !");
    }
    
})
    
})


// cash out event
document.getElementById('cash-out-money-js').addEventListener('click', function(event){
    
    document.getElementById('cash-out-form-js').style.display = "block";
    document.getElementById('add-money-form-js').style.display = "";
    // confirm cash out event
    document.getElementById('cash-out-confirm-js').addEventListener('click',function(event){
    // event preventing
    event.preventDefault();
    if(document.getElementById('cash-out-pin-js').value == 1234){
        // update blance event
        document.getElementById('blance-js').innerHTML = parseFloat(document.getElementById('blance-js').innerHTML) - parseFloat(document.getElementById('cash-out-amount-js').value);
     
        
    }
    else{
        alert("Wrong PIN !");
    }
})
    
})
