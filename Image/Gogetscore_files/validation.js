var v ;
jQuery().ready(function() {

    // validate form on keyup and submit
    v = jQuery("#basicform").validate({
      rules: {
        user_name: {
          required: true,
          minlength: 2,
          maxlength: 20
        },
        
    		user_email: {
              required: true,
              minlength: 2,
              email: true,
              maxlength: 100,
            },
		
		
    		user_dob: {
    			required:true,			
    		},
		
    		user_gender: {
    			required:true,			
    		},
    		
    		user_mobile: {
    			required:true,
    			minlength:10,
    			maxlength:10,
    			number: true
    		},	

    		user_martial_status: {
    			required:true,
    		},
    		
    		user_looking_for: {
    			user_looking_for:true,
    			
    		},

    		user_address_1: {
    			required:true,
    		},
    		
    		user_pincode: {
    			required:true,			
    			minlength:6,
    			maxlength:6,
    			number: true
    		},
    		
    		user_state: {
    			user_state:true,
    		},
		
    		user_city: {
    			user_city:true,
    		},

        user_city_name: { 
          user_city_name:true,
        },
    		
    		user_employement_status: {
    			estatus:true,
    		},
    		
    		user_company_name: {
    			required:true,
    		},
		
    		user_monthly_salary: {
    			required:true,
    			number: true
    		},
    		
      		user_pancard: {
      			user_pancard:true,
      			required : true
      		},
      		
      		user_adhaar_no: {
      			user_adhaar_no: true,
      			required : false
      		},
      		
      		user_passport_no: {
      			user_passport_no:true,
      			required : false
      		},
		
        },
	  
      errorElement: "span",
      errorClass: "help-inline-error",   
    });

    var m = jQuery("#mobile_otp_frm").validate({
      rules: {
        	otp:{
			required : true,
			minlength:4,
			maxlength:4,
			number: true
		},
      },
	  
      errorElement: "span",
      errorClass: "help-inline-error",
    });


    $(".open1").click(function() {

      if (v.form()) {

      	var mobile_no = $('#user_mobile').val();
      	$("#mobile_no").val(mobile_no);
      	send_otp();

      }
    });

    $(".open2").click(function() {

      if (v.form()) {
      	step_2();
      }
    });
	
	 $(".open3").click(function() {
      if (v.form()) {
      	step_3();
      }
    });
	

    $(".open4").click(function() {
      if (v.form()) {
      	step_4();
      }
    });

    $("#btn-verify-otp").click(function() {

    	if(m.form()) {
    		var mobile_no = $("#mobile_no").val();
    		var otp = $("#otp").val();
    		verify_otp(mobile_no, otp);
    	}
    });

    
    $(".back2").click(function() {
      $(".frm").hide("fast");
      $("#sf1").show("slow");
    });

    $(".back3").click(function() {
      $(".frm").hide("fast");
      $("#sf2").show("slow");
    });

    $(".close").click(function() {

          $("#mobile-otp-verification-modal").hide();  
          $("#login-mobile-modal").hide();   
          $("#login-mobile-otp-verification-modal").hide();    
    });

  });

  jQuery.validator.addMethod('user_looking_for', function (value, element) {

  	if(element.value == 0) {
  		return false;
  	}
  	else {
  		return true;
  	};
  }, "Please select what you are looking for");
	
  jQuery.validator.addMethod('user_state', function (value, element) {

      if(element.value == 0) {
  		return false;
  	}
  	else {
  		return true;
  	};
  }, "Please select your State");
	
  jQuery.validator.addMethod('user_city', function (value, element) {
      if(element.value == 0) {
  		return false;
  	}
  	else {
  		return true;
  	};
  }, "Please select your City");


  jQuery.validator.addMethod('estatus', function (value, element) {
      if(element.value == 0) {
  		return false;
  	}
  	else {
  		return true;
  	};
  }, "Please select your Employement Status");

  jQuery.validator.addMethod("user_pancard", function(value, element) {
  		var regexp = "^[A-Z0-9]{10}$";
          var re = new RegExp(regexp);
          return re.test(value);
      },
      "Please enter valid Pancard Number."
  );

  jQuery.validator.addMethod("user_adhaar_no", function(value, element) {
  		    var regexp = "^[0-9]{12}$";
          var re = new RegExp(regexp);
          if(value!='') {
             return re.test(value);
          }
          else {
            return true;
          }
      },
      "Please enter valid Aadhaar Number."
  );


  jQuery.validator.addMethod("user_passport_no", function(value, element) {
  		    var regexp = "^[A-PR-WY][1-9][0-9][0-9]{4}[1-9]$";
          var re = new RegExp(regexp,"gi");
          if(value!='') {
             return re.test(value);
          }
          else {
            return true;
          }
      },
      "Please enter valid Passport Number"
  );

  jQuery.validator.addMethod('user_city_name', function (value, element) {

        if(jQuery("#user_city").val() == "-1") {
          if(element.value == "") {
            return false;
          }
          return true;
        }
        else {
          return true;
        }
      }, "Please enter city name"
  );