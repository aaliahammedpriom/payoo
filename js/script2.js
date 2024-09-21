// add money form show
document.getElementById('add-money-js').addEventListener('click', function(event){
    // 
    document.getElementById('add-money-form-js').style.display = "block";
    document.getElementById('cash-out-form-js').style.display = ""; 
    document.getElementById('transaction-section-js').style.display = "";  
})

// cash out form show
document.getElementById('cash-out-money-js').addEventListener('click', function(event){
    //
    document.getElementById('add-money-form-js').style.display = "";
    document.getElementById('cash-out-form-js').style.display = "block";
    document.getElementById('transaction-section-js').style.display = "";
})
// transaction history show
document.getElementById('transaction-history-js').addEventListener('click', function(event){
    //
    document.getElementById('add-money-form-js').style.display = "";
    document.getElementById('cash-out-form-js').style.display = "";
    document.getElementById('transaction-section-js').style.display = "block";
})

//Add Money event
document.getElementById('add-money-confirm-js').addEventListener('click',function(event){

    // event preventing
    event.preventDefault();

    if(document.getElementById('add-money-pin-js').value == 1){
        // update blance event
        document.getElementById('blance-js').innerText = parseFloat(document.getElementById('blance-js').innerText) + parseFloat(document.getElementById('add-money-amount-js').value);  
        
        //transaction history
        // document.getElementById('transaction-section-js').innerHTML = (document.createElement('p').innerText = "Add Money: " + parseFloat(document.getElementById('add-money-amount-js').value) + " New Blance: " + document.getElementById('blance-js').innerText);
        const p = document.createElement('p');
        p.innerText = "Add Money: " + parseFloat(document.getElementById('add-money-amount-js').value) + " New Blance : " + document.getElementById('blance-js').innerText;
        document.getElementById('transaction-section-js').appendChild(p);
    }
    else{
        const p = document.createElement('p');
        p.innerText = "Transaction Fail . Wrong PIN !";
        document.getElementById('transaction-section-js').appendChild(p);
    }
    
})


// cash out event
document.getElementById('cash-out-confirm-js').addEventListener('click',function(event){
    // event preventing
    event.preventDefault();
    if(document.getElementById('cash-out-pin-js').value == 1){
        // update blance event
        document.getElementById('blance-js').innerHTML = parseFloat(document.getElementById('blance-js').innerHTML) - parseFloat(document.getElementById('cash-out-amount-js').value);

        // transaction history
        const p = document.createElement('p');
        p.innerText = "Cash Out : " + parseFloat(document.getElementById('add-money-amount-js').value) + " New Blance : " + document.getElementById('blance-js').innerText;
        document.getElementById('transaction-section-js').appendChild(p);
    }
    else{
        const p = document.createElement('p');
        p.innerText = "Transaction Fail . Wrong PIN !";
        document.getElementById('transaction-section-js').appendChild(p);
    }
})

// log out event
document.getElementById('log-out-js').addEventListener('click',function(event){
    window.location.href ='index.html'
})


