// confirm button event
// document.getElementById('confirm-js').addEventListener('click',function(event){
//     event.preventDefault();
//     alert('Please Select What You Want !')
// })

// add money event
document.getElementById('add-money-js').addEventListener('click', function(event){
    // change button name
    document.getElementById('confirm-js').innerHTML = 'Confirm Add Money'

    // Confirm Add Money event
    document.getElementById('confirm-js').addEventListener('click',function(event){

    // event preventing
    event.preventDefault();

    if(document.getElementById('pin-js').value == 1234){
        // update blance event
        document.getElementById('blance-js').innerHTML = parseFloat(document.getElementById('amount-js').value) + parseFloat(document.getElementById('blance-js').innerHTML);
        // cash confirmation alert
        alert("Bdt " + parseFloat(document.getElementById('amount-js').value) + " tk successfully added from : +88" + document.getElementById('number-js').value + ", \nYour new Blance : " + document.getElementById('blance-js').innerHTML + "tk." )
    }
    else{
        alert("Wrong PIN !");
    }
})
    
})


// cash out event
document.getElementById('cash-out-money-js').addEventListener('click', function(event){
    // change button name
    document.getElementById('confirm-js').innerHTML = 'Confirm Cash Out'

    // confirm cash out event
    document.getElementById('confirm-js').addEventListener('click',function(event){
    // event preventing
    event.preventDefault();
    if(document.getElementById('pin-js').value == 1234){
        // update blance event
        document.getElementById('blance-js').innerHTML = parseFloat(document.getElementById('blance-js').innerHTML) - parseFloat(document.getElementById('amount-js').value);
        // cash out confirmation alert
        alert("Bdt " + parseFloat(document.getElementById('amount-js').value) + " tk successfully cash out to: +88" + document.getElementById('number-js').value + ", \nYour new Blance : " + document.getElementById('blance-js').innerHTML + "tk." )
    }
    else{
        alert("Wrong PIN !");
    }
})
    
})
