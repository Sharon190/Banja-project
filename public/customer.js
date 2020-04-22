function customervalidation() {
    var uvehicle = document.customer.kindofvehicle;
    var uloans = document.customer.loans;
    // var upayment = document.customer.downpayment;

  
    /**Invoking functions with arguments */
    if (vehiclevalidation(uvehicle)) {
      if (loansvalidation(uloans)) {
          // if (paymentvalidation(upayment)) {
            
        // }
      }
    }
  
    return false;
  }
  
  
  
  
  
  
  //Defining method nationvalidation with parameter
  function vehiclevalidation(uvehicle) {
    if (uvehicle.value == "Default") {
      alert("Please select the type of vehice");
      uvehicle.focus();
      return false;
    } else {
      return true;
    }
  }

  function loanvalidation(uloan) {
    if (uloan.value == "Default") {
      alert("Please select the type of loan ever taken");
      uloan.focus();
      return false;
    } else {
      return true;
    }
  }
  
  
  
  
  