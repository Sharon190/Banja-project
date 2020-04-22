function salesRegValidation() {
    var uname = document.salesReg.fname;
    var pasid = document.salesReg.password;
    var uphone = document.salesReg.phoneNumber;
    var umail = document.salesReg.email;
    
    
  
    /**Invoking functions with arguments */
    if (firstnamevalidation(uname)) {
      if (pasidvalidation(pasid)) {
            if (phonevalidation(uphone, 10)) {
              if (mailvalidation(umail,)) {
            }
          }
      }
    }
  
    return false;
  }
  
  function firstnamevalidation(uname, mx, my) {
    //Accessing form element
    var uname_len = uname.value.length;
    if (uname_len == 0 || uname_len >= my || uname_len < mx) {
      alert(
        "First name should not be empty / length be between " + mx + " to " + my
      );
      // uname.style.border = "2px solid red";
      uname.focus();
      return false;
    } else {
      // uname.style.border = "2px solid green";
    }
    return true;
  }
  
  function pasidvalidation(pasid, mx, my) {
    var pasid_len = upid.value.length;
    if (pasid_len == 0 || pasid_len >= my || pasid_len < mx) {
      alert(
        "Password should not be empty / length be between " + mx + " to " + my
      );
      upasid.focus();
      return false;
    }
    return true;
  }
  
  
  //Defining method phonevalidation with parameter
  function phonevalidation(uphone) {
    // var numbers = /^[0-9]+$/;
    var numbers = /^\d{10}$/;
    if (uphone.value.match(numbers)) {
      return true;
    } else {
      alert("Telephone code must have 10 numeric characters only");
      uphone.style.border = "2px solid red;";
      uphone.focus();
      return false;
    }
  }
  
  function mailvalidation(umail) {
    var umailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (umail.value.match(umailformat)) {
      return true;
    } else {
      alert("You must enter a valid email address!");
      umail.focus();
      return false;
    }
  }
  
  
  
  
  
  
  