function verify_otp(mobile_no, otp) {

	$("#btn-verify-otp").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	$("#btn-verify-otp").attr('disabled', true);
	mobile_no = $.trim(mobile_no);
	otp = $.trim(otp);

	$.ajax({
			url:"/user_registration/verify_otp",
			type:'post',
			dataType:"json",
			data:{"mobile_no":mobile_no,"otp": otp},
			success:function(response) {
				if(response.status == "1") {
					$("#btn-verify-otp").html('Verify OTP').attr('disabled', false);
					step_1();
				}
				else {
					 $("#btn-verify-otp").html('Verify OTP').attr('disabled', false);
					 alert("Invalid OTP . please try again")
				}
			},
			error: function() {
			}
		 });
}

function step_1() {

	 var user_name = $.trim($("#user_name").val());
	 var user_email = $.trim($("#user_email").val());
	 var user_gender = $.trim($("#user_gender").val());
	 var user_dob = $.trim($("#user_dob").val());

	 var user_mobile = $.trim($("#user_mobile").val());
	 var user_martial_status = $.trim($("#user_martial_status").val());
	 var user_looking_for = $.trim($("#user_looking_for").val());
	 $("#btn-verify-otp").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	 $("#btn-verify-otp").attr('disabled', true);
	 user_utm_url =  $(location).attr('href');
	 $.ajax({
			url:"/user_registration/step_1",
			type:'post',
			dataType:"json",
			data:{"user_name":user_name,"user_email": user_email,"user_gender":user_gender,"user_dob":user_dob,"user_mobile":user_mobile,"user_martial_status":user_martial_status,"user_looking_for":user_looking_for, 'user_utm_url': user_utm_url},
			success:function(response) {
				
				if(response.status == '1') {	
					$("#btn-verify-otp").html('Verify OTP').attr('disabled', false);
					$("#mobile-otp-verification-modal").hide();
					$(".frm").hide("fast");
        			$("#sf2").show("slow");
				}
				else {
					$("#btn-verify-otp").html('Verify OTP').attr('disabled', false);
				}
			},
			error: function() {
				$("#btn-verify-otp").html('Verify OTP').attr('disabled', false);
				alert("Error : Please try again");
			}
		 });
}

function step_2() {

	 var user_address_1 = $.trim($("#user_address_1").val());
	 var user_address_2 = $.trim($("#user_address_2").val());
	 var user_pincode = $.trim($("#user_pincode").val());
	 var user_state = $.trim($("#user_state").val());

	 var user_city = $.trim($("#user_city").val());
	 var user_city_name = $.trim($("#user_city_name").val());
	 $("#step-2-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	 $("#step-2-btn").attr('disabled', true);

	 $.ajax({
			url:"/user_registration/step_2",
			type:'post',
			dataType:"json",
			data:{"user_address_1":user_address_1,"user_address_2": user_address_2,"user_pincode":user_pincode,"user_state":user_state,"user_city":user_city,"user_city_name":user_city_name},
			success:function(response) {
				if(response.status == '1') {	

					$("#step-2-btn").html('Save & Continue').attr('disabled', false);

					$(".frm").hide("fast");
        			$("#sf3").show("slow");
				}
				else {
					$("#step-2-btn").html('Save & Continue').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-2-btn").html('Save & Continue').attr('disabled', false);
			}
		 });
}

function step_3() {

	 var user_employement_status = $.trim($("#user_employement_status").val());
	 var user_company_name = $.trim($("#user_company_name").val());
	 var user_monthly_salary = $.trim($("#user_monthly_salary").val());
	 $("#step-3-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	 $("#step-3-btn").attr('disabled', true);

	 $.ajax({
			url:"/user_registration/step_3",
			type:'post',
			dataType:"json",
			data:{"user_employement_status":user_employement_status,"user_company_name": user_company_name,"user_monthly_salary":user_monthly_salary},
			success:function(response) {
				if(response.status == '1') {	

					$(".frm").hide("fast");
        			$("#sf4").show("slow");
        			$("#step-3-btn").html('Save & Continue').attr('disabled', false);
				}
				else {
					$("#step-3-btn").html('Save & Continue').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-3-btn").html('Save & Continue').attr('disabled', false);
			}
		 });
}

function step_4() {

	 var user_pancard = $.trim($("#user_pancard").val());
	 var user_adhaar_no = $.trim($("#user_adhaar_no").val());
	 var user_passport_no = $.trim($("#user_passport_no").val());
	 $("#step-4-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, generating you credit score ...');
	 $("#step-4-btn").attr('disabled', true);
	 $("#error-message").html('');

	 $.ajax({
			url:"/user_registration/step_4",
			type:'post',
			dataType:"json",
			data:{"user_pancard":user_pancard,"user_adhaar_no": user_adhaar_no,"user_passport_no":user_passport_no},
			success:function(response) {
				if(response.status == '1') {	

					//$("#basicform").html('<h2>Thanks for submitting your information.Your credit score will be generated in sometime.Please login to check credit card status</h2>');
				    location.href = "/report"

				}
				else {
					msg = response.message.split(",");
					msg_str = msg.join("<br/>");
					$("#error-message").html(msg_str);
					$('#error-message').show().delay(8000).fadeOut(400);

					$("#step-4-btn").html('Submit').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-4-btn").html('Submit').attr('disabled', false);
			}
		 });
}

function send_otp(mobile_no) {

	$("#step-1-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	$("#step-1-btn").attr('disabled', true);
	$("#error-message").hide();
	$("#error-message").html('');

	 var user_name = $.trim($("#user_name").val());
	 var user_email = $.trim($("#user_email").val());
	 var user_gender = $.trim($("#user_gender").val());
	 var user_dob = $.trim($("#user_dob").val());

	 var user_mobile = $.trim($("#user_mobile").val());
	 var user_martial_status = $.trim($("#user_martial_status").val());
	 var user_looking_for = $.trim($("#user_looking_for").val());

	$.ajax({
			url:"/user_registration/send_otp",
			type:'post',
			dataType:"json",
			data:{"user_name":user_name,"user_email": user_email,"user_gender":user_gender,"user_dob":user_dob,"user_mobile":user_mobile,"user_martial_status":user_martial_status,"user_looking_for":user_looking_for},
			success:function(response) {

				if(response.status == 1 ) {
					$("#step-1-btn").html('Submit').attr('disabled', false);
					$("#mobile-otp-verification-modal").show();
				}
				else {
					msg = response.message.split(",");
					msg_str = msg.join("<br/>");
					$("#error-message").html(msg_str);
					$('#error-message').show().delay(10000).fadeOut(400);
					$("#step-1-btn").html('Submit').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-1-btn").html('Submit').attr('disabled', false);
			}
		 });
}

function resend_otp() {

	var user_mobile = $.trim($("#user_mobile").val());
	console.log("user_mobile ::::"+user_mobile);

	$("#otp-resend-href").removeAttr("href");
	$("#otp-resend-href").removeAttr("onclick");

	$.ajax({
			url:"/user_registration/resend_otp",
			type:'post',
			dataType:"json",
			data:{"mobile_no":user_mobile},
			success:function(response) {

				if(response.status == 1 ) {

					setTimeout(function() {

					  $("#otp-resend-href").attr("href", "javascript:void(0);");
					  $("#otp-resend-href").attr("onclick","javascript:resend_otp()");

					}, 5000);
				}
				else {
					$("#otp-resend-href").attr("href", "javascript:void(0);");
					$("#otp-resend-href").attr("onclick","javascript:resend_otp()");
				}
			},
			error: function() {
				$("#otp-resend-href").attr("href", "javascript:void(0);");
				$("#otp-resend-href").attr("onclick","javascript:resend_otp()");
			}
		 });
}

jQuery().ready(function() {

	var state_json = '[{"id":"1","name":"Andaman & Nicobar Islands"},{"id":"2","name":"Andhra Pradesh"},{"id":"3","name":"Arunachal Pradesh"},{"id":"4","name":"Assam"},{"id":"5","name":"Bihar"},{"id":"6","name":"Chandigarh"},{"id":"7","name":"Chhattisgarh"},{"id":"8","name":"Dadra & Nagar Haveli"},{"id":"9","name":"Daman & Diu"},{"id":"10","name":"Delhi"},{"id":"11","name":"Goa"},{"id":"12","name":"Gujarat"},{"id":"13","name":"Haryana"},{"id":"14","name":"Himachal Pradesh"},{"id":"15","name":"Jammu & Kashmir"},{"id":"16","name":"Jharkhand"},{"id":"17","name":"Karnataka"},{"id":"18","name":"Kerala"},{"id":"19","name":"Lakshadweep"},{"id":"20","name":"Madhya Pradesh"},{"id":"21","name":"Maharashtra"},{"id":"22","name":"Manipur"},{"id":"23","name":"Meghalaya"},{"id":"24","name":"Mizoram"},{"id":"25","name":"Nagaland"},{"id":"26","name":"Odisha"},{"id":"27","name":"Puducherry"},{"id":"28","name":"Punjab"},{"id":"29","name":"Rajasthan"},{"id":"30","name":"Sikkim"},{"id":"31","name":"Tamil Nadu"},{"id":"32","name":"Telangana"},{"id":"33","name":"Tripura"},{"id":"34","name":"Uttar Pradesh"},{"id":"35","name":"Uttarakhand"},{"id":"36","name":"West Bengal"}]';

	var state_json = JSON.parse(state_json);
	var state_html = `<select class="form-input" id="user_state" name="user_state" onchange="get_city();">
					<option value="0" disabled selected>State</option>`;
	$.each(state_json, function(index, element) {

		state_html += `<option value="${element.id}">${element.name}</option>`;
	 });

	 state_html += '</select>';
	 $("#other-city").hide();

	 $("#state-data").html(state_html);



});

function get_city() {

	var city_json = '{"21":[{"id":"1","name":"Kolhapur"},{"id":"783","name":"Ahmednagar"},{"id":"784","name":"Akola"},{"id":"785","name":"Amravati"},{"id":"786","name":"Aurangabad"},{"id":"787","name":"Baramati"},{"id":"788","name":"Chalisgaon"},{"id":"789","name":"Chinchani"},{"id":"790","name":"Devgarh"},{"id":"791","name":"Dhule"},{"id":"792","name":"Dombivli"},{"id":"793","name":"Durgapur"},{"id":"794","name":"Ichalkaranji"},{"id":"795","name":"Jalna"},{"id":"796","name":"Kalyan"},{"id":"797","name":"Latur"},{"id":"798","name":"Loha"},{"id":"799","name":"Lonar"},{"id":"800","name":"Lonavla"},{"id":"801","name":"Mahad"},{"id":"802","name":"Mahuli"},{"id":"803","name":"Malegaon"},{"id":"804","name":"Malkapur"},{"id":"805","name":"Manchar"},{"id":"806","name":"Mangalvedhe"},{"id":"807","name":"Mangrulpir"},{"id":"808","name":"Manjlegaon"},{"id":"809","name":"Manmad"},{"id":"810","name":"Manwath"},{"id":"811","name":"Mehkar"},{"id":"812","name":"Mhaswad"},{"id":"813","name":"Miraj"},{"id":"814","name":"Morshi"},{"id":"815","name":"Mukhed"},{"id":"816","name":"Mul"},{"id":"817","name":"Mumbai"},{"id":"818","name":"Murtijapur"},{"id":"819","name":"Nagpur"},{"id":"820","name":"Nalasopara"},{"id":"821","name":"Nanded-Waghala"},{"id":"822","name":"Nandgaon"},{"id":"823","name":"Nandura"},{"id":"824","name":"Nandurbar"},{"id":"825","name":"Narkhed"},{"id":"826","name":"Nashik"},{"id":"827","name":"Navi Mumbai"},{"id":"828","name":"Nawapur"},{"id":"829","name":"Nilanga"},{"id":"830","name":"Osmanabad"},{"id":"831","name":"Ozar"},{"id":"832","name":"Pachora"},{"id":"833","name":"Paithan"},{"id":"834","name":"Palghar"},{"id":"835","name":"Pandharkaoda"},{"id":"836","name":"Pandharpur"},{"id":"837","name":"Panvel"},{"id":"838","name":"Parbhani"},{"id":"839","name":"Parli"},{"id":"840","name":"Parola"},{"id":"841","name":"Partur"},{"id":"842","name":"Pathardi"},{"id":"843","name":"Pathri"},{"id":"844","name":"Patur"},{"id":"845","name":"Pauni"},{"id":"846","name":"Pen"},{"id":"847","name":"Phaltan"},{"id":"848","name":"Pulgaon"},{"id":"849","name":"Pune"},{"id":"850","name":"Purna"},{"id":"851","name":"Pusad"},{"id":"852","name":"Rahuri"},{"id":"853","name":"Rajura"},{"id":"854","name":"Ramtek"},{"id":"855","name":"Ratnagiri"},{"id":"856","name":"Raver"},{"id":"857","name":"Risod"},{"id":"858","name":"Sailu"},{"id":"859","name":"Sangamner"},{"id":"860","name":"Sangli"},{"id":"861","name":"Sangole"},{"id":"862","name":"Sasvad"},{"id":"863","name":"Satana"},{"id":"864","name":"Satara"},{"id":"865","name":"Savner"},{"id":"866","name":"Sawantwadi"},{"id":"867","name":"Shahade"},{"id":"868","name":"Shegaon"},{"id":"869","name":"Shendurjana"},{"id":"870","name":"Shirdi"},{"id":"871","name":"Shirpur-Warwade"},{"id":"872","name":"Shirur"},{"id":"873","name":"Shrigonda"},{"id":"874","name":"Shrirampur"},{"id":"875","name":"Sillod"},{"id":"876","name":"Sinnar"},{"id":"877","name":"Solapur"},{"id":"878","name":"Soyagaon"},{"id":"879","name":"Talegaon Dabhade"},{"id":"880","name":"Talode"},{"id":"881","name":"Tasgaon"},{"id":"882","name":"Tirora"},{"id":"883","name":"Tuljapur"},{"id":"884","name":"Tumsar"},{"id":"885","name":"Uran"},{"id":"886","name":"Uran Islampur"},{"id":"887","name":"Wadgaon Road"},{"id":"888","name":"Wai"},{"id":"889","name":"Wani"},{"id":"890","name":"Wardha"},{"id":"891","name":"Warora"},{"id":"892","name":"Warud"},{"id":"893","name":"Washim"},{"id":"894","name":"Yevla"},{"id":"895","name":"Uchgaon"},{"id":"896","name":"Udgir"},{"id":"897","name":"Umarga"},{"id":"898","name":"Umarkhed"},{"id":"899","name":"Umred"},{"id":"900","name":"Vadgaon Kasba"},{"id":"901","name":"Vaijapur"},{"id":"902","name":"Vasai"},{"id":"903","name":"Virar"},{"id":"904","name":"Vita"},{"id":"905","name":"Yavatmal"},{"id":"906","name":"Yawal"}],"1":[{"id":"2","name":"Port Blair"}],"2":[{"id":"3","name":"Adilabad"},{"id":"4","name":"Adoni"},{"id":"5","name":"Amadalavalasa"},{"id":"6","name":"Amalapuram"},{"id":"7","name":"Anakapalle"},{"id":"8","name":"Anantapur"},{"id":"9","name":"Badepalle"},{"id":"10","name":"Banganapalle"},{"id":"11","name":"Bapatla"},{"id":"12","name":"Bellampalle"},{"id":"13","name":"Bethamcherla"},{"id":"14","name":"Bhadrachalam"},{"id":"15","name":"Bhainsa"},{"id":"16","name":"Bheemunipatnam"},{"id":"17","name":"Bhimavaram"},{"id":"18","name":"Bhongir"},{"id":"19","name":"Bobbili"},{"id":"20","name":"Bodhan"},{"id":"21","name":"Chilakaluripet"},{"id":"22","name":"Chirala"},{"id":"23","name":"Chittoor"},{"id":"24","name":"Cuddapah"},{"id":"25","name":"Devarakonda"},{"id":"26","name":"Dharmavaram"},{"id":"27","name":"Eluru"},{"id":"28","name":"Farooqnagar"},{"id":"29","name":"Gadwal"},{"id":"30","name":"Gooty"},{"id":"31","name":"Gudivada"},{"id":"32","name":"Gudur"},{"id":"33","name":"Guntakal"},{"id":"34","name":"Guntur"},{"id":"35","name":"Hanuman Junction"},{"id":"36","name":"Hindupur"},{"id":"37","name":"Hyderabad"},{"id":"38","name":"Ichchapuram"},{"id":"39","name":"Jaggaiahpet"},{"id":"40","name":"Jagtial"},{"id":"41","name":"Jammalamadugu"},{"id":"42","name":"Jangaon"},{"id":"43","name":"Kadapa"},{"id":"44","name":"Kadiri"},{"id":"45","name":"Kagaznagar"},{"id":"46","name":"Kakinada"},{"id":"47","name":"Kalyandurg"},{"id":"48","name":"Kamareddy"},{"id":"49","name":"Kandukur"},{"id":"50","name":"Karimnagar"},{"id":"51","name":"Kavali"},{"id":"52","name":"Khammam"},{"id":"53","name":"Koratla"},{"id":"54","name":"Kothagudem"},{"id":"55","name":"Kothapeta"},{"id":"56","name":"Kovvur"},{"id":"57","name":"Kurnool"},{"id":"58","name":"Kyathampalle"},{"id":"59","name":"Macherla"},{"id":"60","name":"Machilipatnam"},{"id":"61","name":"Madanapalle"},{"id":"62","name":"Mahbubnagar"},{"id":"63","name":"Mancherial"},{"id":"64","name":"Mandamarri"},{"id":"65","name":"Mandapeta"},{"id":"66","name":"Manuguru"},{"id":"67","name":"Markapur"},{"id":"68","name":"Medak"},{"id":"69","name":"Miryalaguda"},{"id":"70","name":"Mogalthur"},{"id":"71","name":"Nagari"},{"id":"72","name":"Nagarkurnool"},{"id":"73","name":"Nandyal"},{"id":"74","name":"Narasapur"},{"id":"75","name":"Narasaraopet"},{"id":"76","name":"Narayanpet"},{"id":"77","name":"Narsipatnam"},{"id":"78","name":"Nellore"},{"id":"79","name":"Nidadavole"},{"id":"80","name":"Nirmal"},{"id":"81","name":"Nizamabad"},{"id":"82","name":"Nuzvid"},{"id":"83","name":"Ongole"},{"id":"84","name":"Palacole"},{"id":"85","name":"Palasa Kasibugga"},{"id":"86","name":"Palwancha"},{"id":"87","name":"Parvathipuram"},{"id":"88","name":"Pedana"},{"id":"89","name":"Peddapuram"},{"id":"90","name":"Pithapuram"},{"id":"91","name":"Pondur"},{"id":"92","name":"Ponnur"},{"id":"93","name":"Proddatur"},{"id":"94","name":"Punganur"},{"id":"95","name":"Puttur"},{"id":"96","name":"Rajahmundry"},{"id":"97","name":"Rajam"},{"id":"98","name":"Ramachandrapuram"},{"id":"99","name":"Ramagundam"},{"id":"100","name":"Rayachoti"},{"id":"101","name":"Rayadurg"},{"id":"102","name":"Renigunta"},{"id":"103","name":"Repalle"},{"id":"104","name":"Sadasivpet"},{"id":"105","name":"Salur"},{"id":"106","name":"Samalkot"},{"id":"107","name":"Sangareddy"},{"id":"108","name":"Sattenapalle"},{"id":"109","name":"Siddipet"},{"id":"110","name":"Singapur"},{"id":"111","name":"Sircilla"},{"id":"112","name":"Srikakulam"},{"id":"113","name":"Srikalahasti"},{"id":"115","name":"Suryapet"},{"id":"116","name":"Tadepalligudem"},{"id":"117","name":"Tadpatri"},{"id":"118","name":"Tandur"},{"id":"119","name":"Tanuku"},{"id":"120","name":"Tenali"},{"id":"121","name":"Tirupati"},{"id":"122","name":"Tuni"},{"id":"123","name":"Uravakonda"},{"id":"124","name":"Venkatagiri"},{"id":"125","name":"Vicarabad"},{"id":"126","name":"Vijayawada"},{"id":"127","name":"Vinukonda"},{"id":"128","name":"Visakhapatnam"},{"id":"129","name":"Vizianagaram"},{"id":"130","name":"Wanaparthy"},{"id":"131","name":"Warangal"},{"id":"132","name":"Yellandu"},{"id":"133","name":"Yemmiganur"},{"id":"134","name":"Yerraguntla"},{"id":"135","name":"Zahirabad"},{"id":"136","name":"Rajampet"}],"3":[{"id":"137","name":"Along"},{"id":"138","name":"Bomdila"},{"id":"139","name":"Itanagar"},{"id":"140","name":"Naharlagun"},{"id":"141","name":"Pasighat"}],"4":[{"id":"142","name":"Abhayapuri"},{"id":"143","name":"Amguri"},{"id":"144","name":"Anandnagaar"},{"id":"145","name":"Barpeta"},{"id":"146","name":"Barpeta Road"},{"id":"147","name":"Bilasipara"},{"id":"148","name":"Bongaigaon"},{"id":"149","name":"Dhekiajuli"},{"id":"150","name":"Dhubri"},{"id":"151","name":"Dibrugarh"},{"id":"152","name":"Digboi"},{"id":"153","name":"Diphu"},{"id":"154","name":"Dispur"},{"id":"156","name":"Gauripur"},{"id":"157","name":"Goalpara"},{"id":"158","name":"Golaghat"},{"id":"159","name":"Guwahati"},{"id":"160","name":"Haflong"},{"id":"161","name":"Hailakandi"},{"id":"162","name":"Hojai"},{"id":"163","name":"Jorhat"},{"id":"164","name":"Karimganj"},{"id":"165","name":"Kokrajhar"},{"id":"166","name":"Lanka"},{"id":"167","name":"Lumding"},{"id":"168","name":"Mangaldoi"},{"id":"169","name":"Mankachar"},{"id":"170","name":"Margherita"},{"id":"171","name":"Mariani"},{"id":"172","name":"Marigaon"},{"id":"173","name":"Nagaon"},{"id":"174","name":"Nalbari"},{"id":"175","name":"North Lakhimpur"},{"id":"176","name":"Rangia"},{"id":"177","name":"Sibsagar"},{"id":"178","name":"Silapathar"},{"id":"179","name":"Silchar"},{"id":"180","name":"Tezpur"},{"id":"181","name":"Tinsukia"}],"5":[{"id":"182","name":"Amarpur"},{"id":"183","name":"Araria"},{"id":"184","name":"Areraj"},{"id":"185","name":"Arrah"},{"id":"186","name":"Asarganj"},{"id":"187","name":"Aurangabad"},{"id":"188","name":"Bagaha"},{"id":"189","name":"Bahadurganj"},{"id":"190","name":"Bairgania"},{"id":"191","name":"Bakhtiarpur"},{"id":"192","name":"Banka"},{"id":"193","name":"Banmankhi Bazar"},{"id":"194","name":"Barahiya"},{"id":"195","name":"Barauli"},{"id":"196","name":"Barbigha"},{"id":"197","name":"Barh"},{"id":"198","name":"Begusarai"},{"id":"199","name":"Behea"},{"id":"200","name":"Bettiah"},{"id":"201","name":"Bhabua"},{"id":"202","name":"Bhagalpur"},{"id":"203","name":"Bihar Sharif"},{"id":"204","name":"Bikramganj"},{"id":"205","name":"Bodh Gaya"},{"id":"206","name":"Buxar"},{"id":"207","name":"Chandan Bara"},{"id":"208","name":"Chanpatia"},{"id":"209","name":"Chhapra"},{"id":"210","name":"Colgong"},{"id":"211","name":"Dalsinghsarai"},{"id":"212","name":"Darbhanga"},{"id":"213","name":"Daudnagar"},{"id":"214","name":"Dehri-on-Sone"},{"id":"215","name":"Dhaka"},{"id":"216","name":"Dighwara"},{"id":"217","name":"Dumraon"},{"id":"218","name":"Fatwah"},{"id":"219","name":"Forbesganj"},{"id":"220","name":"Gaya"},{"id":"221","name":"Gogri Jamalpur"},{"id":"222","name":"Gopalganj"},{"id":"223","name":"Hajipur"},{"id":"224","name":"Hilsa"},{"id":"225","name":"Hisua"},{"id":"226","name":"Islampur"},{"id":"227","name":"Jagdispur"},{"id":"228","name":"Jamalpur"},{"id":"229","name":"Jamui"},{"id":"230","name":"Jehanabad"},{"id":"231","name":"Jhajha"},{"id":"232","name":"Jhanjharpur"},{"id":"233","name":"Jogabani"},{"id":"234","name":"Kanti"},{"id":"235","name":"Katihar"},{"id":"236","name":"Khagaria"},{"id":"237","name":"Kharagpur"},{"id":"238","name":"Kishanganj"},{"id":"239","name":"Lakhisarai"},{"id":"240","name":"Lalganj"},{"id":"241","name":"Madhepura"},{"id":"242","name":"Madhubani"},{"id":"243","name":"Maharajganj"},{"id":"244","name":"Mahnar Bazar"},{"id":"245","name":"Makhdumpur"},{"id":"246","name":"Maner"},{"id":"247","name":"Manihari"},{"id":"248","name":"Marhaura"},{"id":"249","name":"Masaurhi"},{"id":"250","name":"Mirganj"},{"id":"251","name":"Mokameh"},{"id":"252","name":"Motihari"},{"id":"253","name":"Motipur"},{"id":"254","name":"Munger"},{"id":"255","name":"Murliganj"},{"id":"256","name":"Muzaffarpur"},{"id":"257","name":"Narkatiaganj"},{"id":"258","name":"Naugachhia"},{"id":"259","name":"Nawada"},{"id":"260","name":"Nokha"},{"id":"261","name":"Patna"},{"id":"262","name":"Piro"},{"id":"263","name":"Purnia"},{"id":"264","name":"Rafiganj"},{"id":"265","name":"Rajgir"},{"id":"266","name":"Ramnagar"},{"id":"267","name":"Raxaul Bazar"},{"id":"268","name":"Revelganj"},{"id":"269","name":"Rosera"},{"id":"270","name":"Saharsa"},{"id":"271","name":"Samastipur"},{"id":"272","name":"Sasaram"},{"id":"273","name":"Sheikhpura"},{"id":"274","name":"Sheohar"},{"id":"275","name":"Sherghati"},{"id":"276","name":"Silao"},{"id":"277","name":"Sitamarhi"},{"id":"278","name":"Siwan"},{"id":"279","name":"Sonepur"},{"id":"280","name":"Sugauli"},{"id":"281","name":"Sultanganj"},{"id":"282","name":"Supaul"},{"id":"283","name":"Warisaliganj"}],"7":[{"id":"284","name":"Ahiwara"},{"id":"285","name":"Akaltara"},{"id":"286","name":"Ambagarh Chowki"},{"id":"287","name":"Ambikapur"},{"id":"288","name":"Arang"},{"id":"289","name":"Bade Bacheli"},{"id":"290","name":"Balod"},{"id":"291","name":"Baloda Bazar"},{"id":"292","name":"Bemetra"},{"id":"293","name":"Bhatapara"},{"id":"294","name":"Bilaspur"},{"id":"295","name":"Birgaon"},{"id":"296","name":"Champa"},{"id":"297","name":"Chirmiri"},{"id":"298","name":"Dalli-Rajhara"},{"id":"299","name":"Dhamtari"},{"id":"300","name":"Dipka"},{"id":"301","name":"Dongargarh"},{"id":"302","name":"Durg-Bhilai Nagar"},{"id":"303","name":"Gobranawapara"},{"id":"304","name":"Jagdalpur"},{"id":"305","name":"Janjgir"},{"id":"306","name":"Jashpurnagar"},{"id":"307","name":"Kanker"},{"id":"308","name":"Kawardha"},{"id":"309","name":"Kondagaon"},{"id":"310","name":"Korba"},{"id":"311","name":"Mahasamund"},{"id":"312","name":"Mahendragarh"},{"id":"313","name":"Mungeli"},{"id":"314","name":"Naila Janjgir"},{"id":"315","name":"Raigarh"},{"id":"316","name":"Raipur"},{"id":"317","name":"Rajnandgaon"},{"id":"318","name":"Sakti"},{"id":"319","name":"Tilda Newra"}],"8":[{"id":"320","name":"Amli"},{"id":"321","name":"Silvassa"}],"9":[{"id":"322","name":"Daman and Diu"},{"id":"323","name":"Daman and Diu"}],"10":[{"id":"324","name":"Asola"},{"id":"325","name":"Delhi"}],"11":[{"id":"326","name":"Aldona"},{"id":"327","name":"Curchorem Cacora"},{"id":"328","name":"Madgaon"},{"id":"329","name":"Mapusa"},{"id":"330","name":"Margao"},{"id":"331","name":"Marmagao"},{"id":"332","name":"Panaji"}],"12":[{"id":"333","name":"Ahmedabad"},{"id":"334","name":"Amreli"},{"id":"335","name":"Anand"},{"id":"336","name":"Ankleshwar"},{"id":"337","name":"Bharuch"},{"id":"338","name":"Bhavnagar"},{"id":"339","name":"Bhuj"},{"id":"340","name":"Cambay"},{"id":"341","name":"Dahod"},{"id":"342","name":"Deesa"},{"id":"344","name":"Dholka"},{"id":"345","name":"Gandhinagar"},{"id":"346","name":"Godhra"},{"id":"347","name":"Himatnagar"},{"id":"348","name":"Idar"},{"id":"349","name":"Jamnagar"},{"id":"350","name":"Junagadh"},{"id":"351","name":"Kadi"},{"id":"352","name":"Kalavad"},{"id":"353","name":"Kalol"},{"id":"354","name":"Kapadvanj"},{"id":"355","name":"Karjan"},{"id":"356","name":"Keshod"},{"id":"357","name":"Khambhalia"},{"id":"358","name":"Khambhat"},{"id":"359","name":"Kheda"},{"id":"360","name":"Khedbrahma"},{"id":"361","name":"Kheralu"},{"id":"362","name":"Kodinar"},{"id":"363","name":"Lathi"},{"id":"364","name":"Limbdi"},{"id":"365","name":"Lunawada"},{"id":"366","name":"Mahesana"},{"id":"367","name":"Mahuva"},{"id":"368","name":"Manavadar"},{"id":"369","name":"Mandvi"},{"id":"370","name":"Mangrol"},{"id":"371","name":"Mansa"},{"id":"372","name":"Mehmedabad"},{"id":"373","name":"Modasa"},{"id":"374","name":"Morvi"},{"id":"375","name":"Nadiad"},{"id":"376","name":"Navsari"},{"id":"377","name":"Padra"},{"id":"378","name":"Palanpur"},{"id":"379","name":"Palitana"},{"id":"380","name":"Pardi"},{"id":"381","name":"Patan"},{"id":"382","name":"Petlad"},{"id":"383","name":"Porbandar"},{"id":"384","name":"Radhanpur"},{"id":"385","name":"Rajkot"},{"id":"386","name":"Rajpipla"},{"id":"387","name":"Rajula"},{"id":"388","name":"Ranavav"},{"id":"389","name":"Rapar"},{"id":"390","name":"Salaya"},{"id":"391","name":"Sanand"},{"id":"392","name":"Savarkundla"},{"id":"393","name":"Sidhpur"},{"id":"394","name":"Sihor"},{"id":"395","name":"Songadh"},{"id":"396","name":"Surat"},{"id":"397","name":"Talaja"},{"id":"398","name":"Thangadh"},{"id":"399","name":"Tharad"},{"id":"400","name":"Umbergaon"},{"id":"401","name":"Umreth"},{"id":"402","name":"Una"},{"id":"403","name":"Unjha"},{"id":"404","name":"Upleta"},{"id":"405","name":"Vadnagar"},{"id":"406","name":"Vadodara"},{"id":"407","name":"Valsad"},{"id":"408","name":"Vapi"},{"id":"409","name":"Vapi"},{"id":"410","name":"Veraval"},{"id":"411","name":"Vijapur"},{"id":"412","name":"Viramgam"},{"id":"413","name":"Visnagar"},{"id":"414","name":"Vyara"},{"id":"415","name":"Wadhwan"},{"id":"416","name":"Wankaner"},{"id":"417","name":"Adalaj"},{"id":"418","name":"Adityana"},{"id":"419","name":"Alang"},{"id":"420","name":"Ambaji"},{"id":"421","name":"Ambaliyasan"},{"id":"422","name":"Andada"},{"id":"423","name":"Anjar"},{"id":"424","name":"Anklav"},{"id":"425","name":"Antaliya"},{"id":"426","name":"Arambhada"},{"id":"427","name":"Atul"}],"13":[{"id":"428","name":"Ballabhgarh"},{"id":"429","name":"Ambala"},{"id":"430","name":"Ambala"},{"id":"431","name":"Asankhurd"},{"id":"432","name":"Assandh"},{"id":"433","name":"Ateli"},{"id":"434","name":"Babiyal"},{"id":"435","name":"Bahadurgarh"},{"id":"436","name":"Barwala"},{"id":"437","name":"Bhiwani"},{"id":"438","name":"Charkhi Dadri"},{"id":"439","name":"Cheeka"},{"id":"440","name":"Ellenabad 2"},{"id":"441","name":"Faridabad"},{"id":"442","name":"Fatehabad"},{"id":"443","name":"Ganaur"},{"id":"444","name":"Gharaunda"},{"id":"445","name":"Gohana"},{"id":"446","name":"Gurgaon"},{"id":"447","name":"Haibat(Yamuna Nagar)"},{"id":"448","name":"Hansi"},{"id":"449","name":"Hisar"},{"id":"450","name":"Hodal"},{"id":"451","name":"Jhajjar"},{"id":"452","name":"Jind"},{"id":"453","name":"Kaithal"},{"id":"454","name":"Kalan Wali"},{"id":"455","name":"Kalka"},{"id":"456","name":"Karnal"},{"id":"457","name":"Ladwa"},{"id":"458","name":"Mahendragarh"},{"id":"459","name":"Mandi Dabwali"},{"id":"460","name":"Narnaul"},{"id":"461","name":"Narwana"},{"id":"462","name":"Palwal"},{"id":"463","name":"Panchkula"},{"id":"464","name":"Panipat"},{"id":"465","name":"Pehowa"},{"id":"466","name":"Pinjore"},{"id":"467","name":"Rania"},{"id":"468","name":"Ratia"},{"id":"469","name":"Rewari"},{"id":"470","name":"Rohtak"},{"id":"471","name":"Safidon"},{"id":"472","name":"Samalkha"},{"id":"473","name":"Shahbad"},{"id":"474","name":"Sirsa"},{"id":"475","name":"Sohna"},{"id":"476","name":"Sonipat"},{"id":"477","name":"Taraori"},{"id":"478","name":"Thanesar"},{"id":"479","name":"Tohana"},{"id":"480","name":"Yamunanagar"}],"14":[{"id":"481","name":"Arki"},{"id":"482","name":"Baddi"},{"id":"483","name":"Bilaspur"},{"id":"484","name":"Chamba"},{"id":"485","name":"Dalhousie"},{"id":"486","name":"Dharamsala"},{"id":"487","name":"Hamirpur"},{"id":"488","name":"Mandi"},{"id":"489","name":"Nahan"},{"id":"490","name":"Shimla"},{"id":"491","name":"Solan"},{"id":"492","name":"Sundarnagar"}],"15":[{"id":"493","name":"Jammu"},{"id":"494","name":"Achabbal"},{"id":"495","name":"Akhnoor"},{"id":"496","name":"Anantnag"},{"id":"497","name":"Arnia"},{"id":"498","name":"Awantipora"},{"id":"499","name":"Bandipore"},{"id":"500","name":"Baramula"},{"id":"501","name":"Kathua"},{"id":"502","name":"Leh"},{"id":"503","name":"Punch"},{"id":"504","name":"Rajauri"},{"id":"505","name":"Sopore"},{"id":"506","name":"Srinagar"},{"id":"507","name":"Udhampur"}],"16":[{"id":"508","name":"Amlabad"},{"id":"509","name":"Ara"},{"id":"510","name":"Barughutu"},{"id":"511","name":"Bokaro Steel City"},{"id":"512","name":"Chaibasa"},{"id":"513","name":"Chakradharpur"},{"id":"514","name":"Chandrapura"},{"id":"515","name":"Chatra"},{"id":"516","name":"Chirkunda"},{"id":"517","name":"Churi"},{"id":"518","name":"Daltonganj"},{"id":"519","name":"Deoghar"},{"id":"520","name":"Dhanbad"},{"id":"521","name":"Dumka"},{"id":"522","name":"Garhwa"},{"id":"523","name":"Ghatshila"},{"id":"524","name":"Giridih"},{"id":"525","name":"Godda"},{"id":"526","name":"Gomoh"},{"id":"527","name":"Gumia"},{"id":"528","name":"Gumla"},{"id":"529","name":"Hazaribag"},{"id":"530","name":"Hussainabad"},{"id":"531","name":"Jamshedpur"},{"id":"532","name":"Jamtara"},{"id":"533","name":"Jhumri Tilaiya"},{"id":"534","name":"Khunti"},{"id":"535","name":"Lohardaga"},{"id":"536","name":"Madhupur"},{"id":"537","name":"Mihijam"},{"id":"538","name":"Musabani"},{"id":"539","name":"Pakaur"},{"id":"540","name":"Patratu"},{"id":"541","name":"Phusro"},{"id":"542","name":"Ramngarh"},{"id":"543","name":"Ranchi"},{"id":"544","name":"Sahibganj"},{"id":"545","name":"Saunda"},{"id":"546","name":"Simdega"},{"id":"547","name":"Tenu Dam-cum- Kathhara"}],"17":[{"id":"548","name":"Arasikere"},{"id":"549","name":"Bangalore"},{"id":"550","name":"Belgaum"},{"id":"551","name":"Bellary"},{"id":"552","name":"Chamrajnagar"},{"id":"553","name":"Chikkaballapur"},{"id":"554","name":"Chintamani"},{"id":"555","name":"Chitradurga"},{"id":"556","name":"Gulbarga"},{"id":"557","name":"Gundlupet"},{"id":"558","name":"Hassan"},{"id":"559","name":"Hospet"},{"id":"560","name":"Hubli"},{"id":"561","name":"Karkala"},{"id":"562","name":"Karwar"},{"id":"563","name":"Kolar"},{"id":"564","name":"Kota"},{"id":"565","name":"Lakshmeshwar"},{"id":"566","name":"Lingsugur"},{"id":"567","name":"Maddur"},{"id":"568","name":"Madhugiri"},{"id":"569","name":"Madikeri"},{"id":"570","name":"Magadi"},{"id":"571","name":"Mahalingpur"},{"id":"572","name":"Malavalli"},{"id":"573","name":"Malur"},{"id":"574","name":"Mandya"},{"id":"575","name":"Mangalore"},{"id":"576","name":"Manvi"},{"id":"577","name":"Mudalgi"},{"id":"578","name":"Mudbidri"},{"id":"579","name":"Muddebihal"},{"id":"580","name":"Mudhol"},{"id":"581","name":"Mulbagal"},{"id":"582","name":"Mundargi"},{"id":"583","name":"Mysore"},{"id":"584","name":"Nanjangud"},{"id":"585","name":"Pavagada"},{"id":"586","name":"Puttur"},{"id":"587","name":"Rabkavi Banhatti"},{"id":"588","name":"Raichur"},{"id":"589","name":"Ramanagaram"},{"id":"590","name":"Ramdurg"},{"id":"591","name":"Ranibennur"},{"id":"592","name":"Robertson Pet"},{"id":"593","name":"Ron"},{"id":"594","name":"Sadalgi"},{"id":"595","name":"Sagar"},{"id":"596","name":"Sakleshpur"},{"id":"597","name":"Sandur"},{"id":"598","name":"Sankeshwar"},{"id":"599","name":"Saundatti-Yellamma"},{"id":"600","name":"Savanur"},{"id":"601","name":"Sedam"},{"id":"602","name":"Shahabad"},{"id":"603","name":"Shahpur"},{"id":"604","name":"Shiggaon"},{"id":"605","name":"Shikapur"},{"id":"606","name":"Shimoga"},{"id":"607","name":"Shorapur"},{"id":"608","name":"Shrirangapattana"},{"id":"609","name":"Sidlaghatta"},{"id":"610","name":"Sindgi"},{"id":"611","name":"Sindhnur"},{"id":"612","name":"Sira"},{"id":"613","name":"Sirsi"},{"id":"614","name":"Siruguppa"},{"id":"615","name":"Srinivaspur"},{"id":"616","name":"Talikota"},{"id":"617","name":"Tarikere"},{"id":"618","name":"Tekkalakota"},{"id":"619","name":"Terdal"},{"id":"620","name":"Tiptur"},{"id":"621","name":"Tumkur"},{"id":"622","name":"Udupi"},{"id":"623","name":"Vijayapura"},{"id":"624","name":"Wadi"},{"id":"625","name":"Yadgir"},{"id":"1502","name":"Chikmagalur"},{"id":"1503","name":"Davanagere"},{"id":"1504","name":"Dharwad"},{"id":"1505","name":"Gadag"}],"18":[{"id":"626","name":"Adoor"},{"id":"627","name":"Akathiyoor"},{"id":"628","name":"Alappuzha"},{"id":"629","name":"Ancharakandy"},{"id":"630","name":"Aroor"},{"id":"631","name":"Ashtamichira"},{"id":"632","name":"Attingal"},{"id":"633","name":"Avinissery"},{"id":"634","name":"Chalakudy"},{"id":"635","name":"Changanassery"},{"id":"636","name":"Chendamangalam"},{"id":"637","name":"Chengannur"},{"id":"638","name":"Cherthala"},{"id":"639","name":"Cheruthazham"},{"id":"640","name":"Chittur-Thathamangalam"},{"id":"641","name":"Chockli"},{"id":"642","name":"Erattupetta"},{"id":"643","name":"Guruvayoor"},{"id":"644","name":"Irinjalakuda"},{"id":"645","name":"Kadirur"},{"id":"646","name":"Kalliasseri"},{"id":"647","name":"Kalpetta"},{"id":"648","name":"Kanhangad"},{"id":"649","name":"Kanjikkuzhi"},{"id":"650","name":"Kannur"},{"id":"651","name":"Kasaragod"},{"id":"652","name":"Kayamkulam"},{"id":"653","name":"Kochi"},{"id":"654","name":"Kodungallur"},{"id":"655","name":"Kollam"},{"id":"656","name":"Koothuparamba"},{"id":"657","name":"Kothamangalam"},{"id":"658","name":"Kottayam"},{"id":"659","name":"Kozhikode"},{"id":"660","name":"Kunnamkulam"},{"id":"661","name":"Malappuram"},{"id":"662","name":"Mattannur"},{"id":"663","name":"Mavelikkara"},{"id":"664","name":"Mavoor"},{"id":"665","name":"Muvattupuzha"},{"id":"666","name":"Nedumangad"},{"id":"667","name":"Neyyattinkara"},{"id":"668","name":"Ottappalam"},{"id":"669","name":"Palai"},{"id":"670","name":"Palakkad"},{"id":"671","name":"Panniyannur"},{"id":"672","name":"Pappinisseri"},{"id":"673","name":"Paravoor"},{"id":"674","name":"Pathanamthitta"},{"id":"675","name":"Payyannur"},{"id":"676","name":"Peringathur"},{"id":"677","name":"Perinthalmanna"},{"id":"678","name":"Perumbavoor"},{"id":"679","name":"Ponnani"},{"id":"680","name":"Punalur"},{"id":"681","name":"Quilandy"},{"id":"682","name":"Shoranur"},{"id":"683","name":"Taliparamba"},{"id":"684","name":"Thiruvalla"},{"id":"685","name":"Thiruvananthapuram"},{"id":"686","name":"Thodupuzha"},{"id":"687","name":"Thrissur"},{"id":"688","name":"Tirur"},{"id":"689","name":"Vadakara"},{"id":"690","name":"Vaikom"},{"id":"691","name":"Varkala"}],"19":[{"id":"692","name":"Kavaratti"}],"20":[{"id":"693","name":"Ashok Nagar"},{"id":"694","name":"Balaghat"},{"id":"695","name":"Betul"},{"id":"696","name":"Bhopal"},{"id":"697","name":"Burhanpur"},{"id":"698","name":"Chhatarpur"},{"id":"699","name":"Dabra"},{"id":"700","name":"Datia"},{"id":"701","name":"Dewas"},{"id":"702","name":"Dhar"},{"id":"703","name":"Fatehabad"},{"id":"704","name":"Gwalior"},{"id":"705","name":"Indore"},{"id":"706","name":"Itarsi"},{"id":"707","name":"Jabalpur"},{"id":"708","name":"Katni"},{"id":"709","name":"Kotma"},{"id":"710","name":"Lahar"},{"id":"711","name":"Lundi"},{"id":"712","name":"Maharajpur"},{"id":"713","name":"Mahidpur"},{"id":"714","name":"Maihar"},{"id":"715","name":"Malajkhand"},{"id":"716","name":"Manasa"},{"id":"717","name":"Manawar"},{"id":"718","name":"Mandideep"},{"id":"719","name":"Mandla"},{"id":"720","name":"Mandsaur"},{"id":"721","name":"Mauganj"},{"id":"722","name":"Mhow Cantonment"},{"id":"723","name":"Mhowgaon"},{"id":"724","name":"Morena"},{"id":"725","name":"Multai"},{"id":"726","name":"Murwara"},{"id":"727","name":"Nagda"},{"id":"728","name":"Nainpur"},{"id":"729","name":"Narsinghgarh"},{"id":"730","name":"Narsinghgarh"},{"id":"731","name":"Neemuch"},{"id":"732","name":"Nepanagar"},{"id":"733","name":"Niwari"},{"id":"734","name":"Nowgong"},{"id":"735","name":"Nowrozabad"},{"id":"736","name":"Pachore"},{"id":"737","name":"Pali"},{"id":"738","name":"Panagar"},{"id":"739","name":"Pandhurna"},{"id":"740","name":"Panna"},{"id":"741","name":"Pasan"},{"id":"742","name":"Pipariya"},{"id":"743","name":"Pithampur"},{"id":"744","name":"Porsa"},{"id":"745","name":"Prithvipur"},{"id":"746","name":"Raghogarh-Vijaypur"},{"id":"747","name":"Rahatgarh"},{"id":"748","name":"Raisen"},{"id":"749","name":"Rajgarh"},{"id":"750","name":"Ratlam"},{"id":"751","name":"Rau"},{"id":"752","name":"Rehli"},{"id":"753","name":"Rewa"},{"id":"754","name":"Sabalgarh"},{"id":"755","name":"Sagar"},{"id":"756","name":"Sanawad"},{"id":"757","name":"Sarangpur"},{"id":"758","name":"Sarni"},{"id":"759","name":"Satna"},{"id":"760","name":"Sausar"},{"id":"761","name":"Sehore"},{"id":"762","name":"Sendhwa"},{"id":"763","name":"Seoni"},{"id":"764","name":"Seoni-Malwa"},{"id":"765","name":"Shahdol"},{"id":"766","name":"Shajapur"},{"id":"767","name":"Shamgarh"},{"id":"768","name":"Sheopur"},{"id":"769","name":"Shivpuri"},{"id":"770","name":"Shujalpur"},{"id":"771","name":"Sidhi"},{"id":"772","name":"Sihora"},{"id":"773","name":"Singrauli"},{"id":"774","name":"Sironj"},{"id":"775","name":"Sohagpur"},{"id":"776","name":"Tarana"},{"id":"777","name":"Tikamgarh"},{"id":"778","name":"Ujhani"},{"id":"779","name":"Ujjain"},{"id":"780","name":"Umaria"},{"id":"781","name":"Vidisha"},{"id":"782","name":"Wara Seoni"}],"22":[{"id":"907","name":"Imphal"},{"id":"908","name":"Kakching"},{"id":"909","name":"Lilong"},{"id":"910","name":"Mayang Imphal"},{"id":"911","name":"Thoubal"}],"23":[{"id":"912","name":"Jowai"},{"id":"913","name":"Nongstoin"},{"id":"914","name":"Shillong"},{"id":"915","name":"Tura"}],"24":[{"id":"916","name":"Aizawl"},{"id":"917","name":"Champhai"},{"id":"918","name":"Lunglei"},{"id":"919","name":"Saiha"}],"25":[{"id":"920","name":"Dimapur"},{"id":"921","name":"Kohima"},{"id":"922","name":"Mokokchung"},{"id":"923","name":"Tuensang"},{"id":"924","name":"Wokha"},{"id":"925","name":"Zunheboto"}],"26":[{"id":"950","name":"Anandapur"},{"id":"951","name":"Anugul"},{"id":"952","name":"Asika"},{"id":"953","name":"Balangir"},{"id":"954","name":"Balasore"},{"id":"955","name":"Baleshwar"},{"id":"956","name":"Bamra"},{"id":"957","name":"Barbil"},{"id":"958","name":"Bargarh"},{"id":"959","name":"Bargarh"},{"id":"960","name":"Baripada"},{"id":"961","name":"Basudebpur"},{"id":"962","name":"Belpahar"},{"id":"963","name":"Bhadrak"},{"id":"964","name":"Bhawanipatna"},{"id":"965","name":"Bhuban"},{"id":"966","name":"Bhubaneswar"},{"id":"967","name":"Biramitrapur"},{"id":"968","name":"Brahmapur"},{"id":"969","name":"Brajrajnagar"},{"id":"970","name":"Byasanagar"},{"id":"971","name":"Cuttack"},{"id":"972","name":"Debagarh"},{"id":"973","name":"Dhenkanal"},{"id":"974","name":"Gunupur"},{"id":"975","name":"Hinjilicut"},{"id":"976","name":"Jagatsinghapur"},{"id":"977","name":"Jajapur"},{"id":"978","name":"Jaleswar"},{"id":"979","name":"Jatani"},{"id":"980","name":"Jeypur"},{"id":"981","name":"Jharsuguda"},{"id":"982","name":"Joda"},{"id":"983","name":"Kantabanji"},{"id":"984","name":"Karanjia"},{"id":"985","name":"Kendrapara"},{"id":"986","name":"Kendujhar"},{"id":"987","name":"Khordha"},{"id":"988","name":"Koraput"},{"id":"989","name":"Malkangiri"},{"id":"990","name":"Nabarangapur"},{"id":"991","name":"Paradip"},{"id":"992","name":"Parlakhemundi"},{"id":"993","name":"Pattamundai"},{"id":"994","name":"Phulabani"},{"id":"995","name":"Puri"},{"id":"996","name":"Rairangpur"},{"id":"997","name":"Rajagangapur"},{"id":"998","name":"Raurkela"},{"id":"999","name":"Rayagada"},{"id":"1000","name":"Sambalpur"},{"id":"1001","name":"Soro"},{"id":"1002","name":"Sunabeda"},{"id":"1003","name":"Sundargarh"},{"id":"1004","name":"Talcher"},{"id":"1005","name":"Titlagarh"},{"id":"1006","name":"Umarkote"}],"27":[{"id":"1007","name":"Karaikal"},{"id":"1008","name":"Mahe"},{"id":"1009","name":"Puducherry"},{"id":"1010","name":"Yanam"}],"28":[{"id":"1011","name":"Ahmedgarh"},{"id":"1012","name":"Amritsar"},{"id":"1013","name":"Barnala"},{"id":"1014","name":"Batala"},{"id":"1015","name":"Bathinda"},{"id":"1016","name":"Bhagha Purana"},{"id":"1017","name":"Budhlada"},{"id":"1018","name":"Chandigarh"},{"id":"1019","name":"Dasua"},{"id":"1020","name":"Dhuri"},{"id":"1021","name":"Dinanagar"},{"id":"1022","name":"Faridkot"},{"id":"1023","name":"Fazilka"},{"id":"1024","name":"Firozpur"},{"id":"1025","name":"Firozpur Cantt."},{"id":"1026","name":"Giddarbaha"},{"id":"1027","name":"Gobindgarh"},{"id":"1028","name":"Gurdaspur"},{"id":"1029","name":"Hoshiarpur"},{"id":"1030","name":"Jagraon"},{"id":"1031","name":"Jaitu"},{"id":"1032","name":"Jalalabad"},{"id":"1033","name":"Jalandhar"},{"id":"1034","name":"Jalandhar Cantt."},{"id":"1035","name":"Jandiala"},{"id":"1036","name":"Kapurthala"},{"id":"1037","name":"Karoran"},{"id":"1038","name":"Kartarpur"},{"id":"1039","name":"Khanna"},{"id":"1040","name":"Kharar"},{"id":"1041","name":"Kot Kapura"},{"id":"1042","name":"Kurali"},{"id":"1043","name":"Longowal"},{"id":"1044","name":"Ludhiana"},{"id":"1045","name":"Malerkotla"},{"id":"1046","name":"Malout"},{"id":"1047","name":"Mansa"},{"id":"1048","name":"Maur"},{"id":"1049","name":"Moga"},{"id":"1050","name":"Mohali"},{"id":"1051","name":"Morinda"},{"id":"1052","name":"Mukerian"},{"id":"1053","name":"Muktsar"},{"id":"1054","name":"Nabha"},{"id":"1055","name":"Nakodar"},{"id":"1056","name":"Nangal"},{"id":"1057","name":"Nawanshahr"},{"id":"1058","name":"Pathankot"},{"id":"1059","name":"Patiala"},{"id":"1060","name":"Patran"},{"id":"1061","name":"Patti"},{"id":"1062","name":"Phagwara"},{"id":"1063","name":"Phillaur"},{"id":"1064","name":"Qadian"},{"id":"1065","name":"Raikot"},{"id":"1066","name":"Rajpura"},{"id":"1067","name":"Rampura Phul"},{"id":"1068","name":"Rupnagar"},{"id":"1069","name":"Samana"},{"id":"1070","name":"Sangrur"},{"id":"1071","name":"Sirhind Fatehgarh Sahib"},{"id":"1072","name":"Sujanpur"},{"id":"1073","name":"Sunam"},{"id":"1074","name":"Talwara"},{"id":"1075","name":"Tarn Taran"},{"id":"1076","name":"Urmar Tanda"},{"id":"1077","name":"Zira"},{"id":"1078","name":"Zirakpur"}],"29":[{"id":"1079","name":"Bali"},{"id":"1080","name":"Banswara"},{"id":"1081","name":"Ajmer"},{"id":"1082","name":"Alwar"},{"id":"1083","name":"Bandikui"},{"id":"1084","name":"Baran"},{"id":"1085","name":"Barmer"},{"id":"1086","name":"Bikaner"},{"id":"1087","name":"Fatehpur"},{"id":"1088","name":"Jaipur"},{"id":"1089","name":"Jaisalmer"},{"id":"1090","name":"Jodhpur"},{"id":"1091","name":"Kota"},{"id":"1092","name":"Lachhmangarh"},{"id":"1093","name":"Ladnu"},{"id":"1094","name":"Lakheri"},{"id":"1095","name":"Lalsot"},{"id":"1096","name":"Losal"},{"id":"1097","name":"Makrana"},{"id":"1098","name":"Malpura"},{"id":"1099","name":"Mandalgarh"},{"id":"1100","name":"Mandawa"},{"id":"1101","name":"Mangrol"},{"id":"1102","name":"Merta City"},{"id":"1103","name":"Mount Abu"},{"id":"1104","name":"Nadbai"},{"id":"1105","name":"Nagar"},{"id":"1106","name":"Nagaur"},{"id":"1107","name":"Nargund"},{"id":"1108","name":"Nasirabad"},{"id":"1109","name":"Nathdwara"},{"id":"1110","name":"Navalgund"},{"id":"1111","name":"Nawalgarh"},{"id":"1112","name":"Neem-Ka-Thana"},{"id":"1113","name":"Nelamangala"},{"id":"1114","name":"Nimbahera"},{"id":"1115","name":"Nipani"},{"id":"1116","name":"Niwai"},{"id":"1117","name":"Nohar"},{"id":"1118","name":"Nokha"},{"id":"1119","name":"Pali"},{"id":"1120","name":"Phalodi"},{"id":"1121","name":"Phulera"},{"id":"1122","name":"Pilani"},{"id":"1123","name":"Pilibanga"},{"id":"1124","name":"Pindwara"},{"id":"1125","name":"Pipar City"},{"id":"1126","name":"Prantij"},{"id":"1127","name":"Pratapgarh"},{"id":"1128","name":"Raisinghnagar"},{"id":"1129","name":"Rajakhera"},{"id":"1130","name":"Rajaldesar"},{"id":"1131","name":"Rajgarh (Alwar)"},{"id":"1132","name":"Rajgarh (Churu"},{"id":"1133","name":"Rajsamand"},{"id":"1134","name":"Ramganj Mandi"},{"id":"1135","name":"Ramngarh"},{"id":"1136","name":"Ratangarh"},{"id":"1137","name":"Rawatbhata"},{"id":"1138","name":"Rawatsar"},{"id":"1139","name":"Reengus"},{"id":"1140","name":"Sadri"},{"id":"1141","name":"Sadulshahar"},{"id":"1142","name":"Sagwara"},{"id":"1143","name":"Sambhar"},{"id":"1144","name":"Sanchore"},{"id":"1145","name":"Sangaria"},{"id":"1146","name":"Sardarshahar"},{"id":"1147","name":"Sawai Madhopur"},{"id":"1148","name":"Shahpura"},{"id":"1149","name":"Shahpura"},{"id":"1150","name":"Sheoganj"},{"id":"1151","name":"Sikar"},{"id":"1152","name":"Sirohi"},{"id":"1153","name":"Sojat"},{"id":"1154","name":"Sri Madhopur"},{"id":"1155","name":"Sujangarh"},{"id":"1156","name":"Sumerpur"},{"id":"1157","name":"Suratgarh"},{"id":"1158","name":"Taranagar"},{"id":"1159","name":"Todabhim"},{"id":"1160","name":"Todaraisingh"},{"id":"1161","name":"Tonk"},{"id":"1162","name":"Udaipur"},{"id":"1163","name":"Udaipurwati"},{"id":"1164","name":"Vijainagar"}],"30":[{"id":"1165","name":"Gangtok"}],"36":[{"id":"1166","name":"Calcutta"},{"id":"1454","name":"Alipurduar"},{"id":"1455","name":"Arambagh"},{"id":"1456","name":"Asansol"},{"id":"1457","name":"Baharampur"},{"id":"1458","name":"Bally"},{"id":"1459","name":"Balurghat"},{"id":"1460","name":"Bankura"},{"id":"1461","name":"Barakar"},{"id":"1462","name":"Barasat"},{"id":"1463","name":"Bardhaman"},{"id":"1464","name":"Bidhan Nagar"},{"id":"1465","name":"Chinsura"},{"id":"1466","name":"Contai"},{"id":"1467","name":"Cooch Behar"},{"id":"1468","name":"Darjeeling"},{"id":"1469","name":"Durgapur"},{"id":"1470","name":"Haldia"},{"id":"1471","name":"Howrah"},{"id":"1472","name":"Islampur"},{"id":"1473","name":"Jhargram"},{"id":"1474","name":"Kharagpur"},{"id":"1475","name":"Kolkata"},{"id":"1476","name":"Mainaguri"},{"id":"1477","name":"Mal"},{"id":"1478","name":"Mathabhanga"},{"id":"1479","name":"Medinipur"},{"id":"1480","name":"Memari"},{"id":"1481","name":"Monoharpur"},{"id":"1482","name":"Murshidabad"},{"id":"1483","name":"Nabadwip"},{"id":"1484","name":"Naihati"},{"id":"1485","name":"Panchla"},{"id":"1486","name":"Pandua"},{"id":"1487","name":"Paschim Punropara"},{"id":"1488","name":"Purulia"},{"id":"1489","name":"Raghunathpur"},{"id":"1490","name":"Raiganj"},{"id":"1491","name":"Rampurhat"},{"id":"1492","name":"Ranaghat"},{"id":"1493","name":"Sainthia"},{"id":"1494","name":"Santipur"},{"id":"1495","name":"Siliguri"},{"id":"1496","name":"Sonamukhi"},{"id":"1497","name":"Srirampore"},{"id":"1498","name":"Suri"},{"id":"1499","name":"Taki"},{"id":"1500","name":"Tamluk"},{"id":"1501","name":"Tarakeswar"}],"31":[{"id":"1167","name":"Arakkonam"},{"id":"1168","name":"Arcot"},{"id":"1169","name":"Aruppukkottai"},{"id":"1170","name":"Bhavani"},{"id":"1171","name":"Chengalpattu"},{"id":"1172","name":"Chennai"},{"id":"1173","name":"Chinna salem"},{"id":"1174","name":"Coimbatore"},{"id":"1175","name":"Coonoor"},{"id":"1176","name":"Cuddalore"},{"id":"1177","name":"Dharmapuri"},{"id":"1178","name":"Dindigul"},{"id":"1179","name":"Erode"},{"id":"1180","name":"Gudalur"},{"id":"1181","name":"Gudalur"},{"id":"1182","name":"Gudalur"},{"id":"1183","name":"Kanchipuram"},{"id":"1184","name":"Karaikudi"},{"id":"1185","name":"Karungal"},{"id":"1186","name":"Karur"},{"id":"1187","name":"Kollankodu"},{"id":"1188","name":"Lalgudi"},{"id":"1189","name":"Madurai"},{"id":"1190","name":"Nagapattinam"},{"id":"1191","name":"Nagercoil"},{"id":"1192","name":"Namagiripettai"},{"id":"1193","name":"Namakkal"},{"id":"1194","name":"Nandivaram-Guduvancheri"},{"id":"1195","name":"Nanjikottai"},{"id":"1196","name":"Natham"},{"id":"1197","name":"Nellikuppam"},{"id":"1198","name":"Neyveli"},{"id":"1199","name":"O valley"},{"id":"1200","name":"Oddanchatram"},{"id":"1201","name":"P.N.Patti"},{"id":"1202","name":"Pacode"},{"id":"1203","name":"Padmanabhapuram"},{"id":"1204","name":"Palani"},{"id":"1205","name":"Palladam"},{"id":"1206","name":"Pallapatti"},{"id":"1207","name":"Pallikonda"},{"id":"1208","name":"Panagudi"},{"id":"1209","name":"Panruti"},{"id":"1210","name":"Paramakudi"},{"id":"1211","name":"Parangipettai"},{"id":"1212","name":"Pattukkottai"},{"id":"1213","name":"Perambalur"},{"id":"1214","name":"Peravurani"},{"id":"1215","name":"Periyakulam"},{"id":"1216","name":"Periyasemur"},{"id":"1217","name":"Pernampattu"},{"id":"1218","name":"Pollachi"},{"id":"1219","name":"Polur"},{"id":"1220","name":"Ponneri"},{"id":"1221","name":"Pudukkottai"},{"id":"1222","name":"Pudupattinam"},{"id":"1223","name":"Puliyankudi"},{"id":"1224","name":"Punjaipugalur"},{"id":"1225","name":"Rajapalayam"},{"id":"1226","name":"Ramanathapuram"},{"id":"1227","name":"Rameshwaram"},{"id":"1228","name":"Rasipuram"},{"id":"1229","name":"Salem"},{"id":"1230","name":"Sankarankoil"},{"id":"1231","name":"Sankari"},{"id":"1232","name":"Sathyamangalam"},{"id":"1233","name":"Sattur"},{"id":"1234","name":"Shenkottai"},{"id":"1235","name":"Sholavandan"},{"id":"1236","name":"Sholingur"},{"id":"1237","name":"Sirkali"},{"id":"1238","name":"Sivaganga"},{"id":"1239","name":"Sivagiri"},{"id":"1240","name":"Sivakasi"},{"id":"1241","name":"Srivilliputhur"},{"id":"1242","name":"Surandai"},{"id":"1243","name":"Suriyampalayam"},{"id":"1244","name":"Tenkasi"},{"id":"1245","name":"Thammampatti"},{"id":"1246","name":"Thanjavur"},{"id":"1247","name":"Tharamangalam"},{"id":"1248","name":"Tharangambadi"},{"id":"1249","name":"Theni Allinagaram"},{"id":"1250","name":"Thirumangalam"},{"id":"1251","name":"Thirunindravur"},{"id":"1252","name":"Thiruparappu"},{"id":"1253","name":"Thirupuvanam"},{"id":"1254","name":"Thiruthuraipoondi"},{"id":"1255","name":"Thiruvallur"},{"id":"1256","name":"Thiruvarur"},{"id":"1257","name":"Thoothukudi"},{"id":"1258","name":"Thuraiyur"},{"id":"1259","name":"Tindivanam"},{"id":"1260","name":"Tiruchendur"},{"id":"1261","name":"Tiruchengode"},{"id":"1262","name":"Tiruchirappalli"},{"id":"1263","name":"Tirukalukundram"},{"id":"1264","name":"Tirukkoyilur"},{"id":"1265","name":"Tirunelveli"},{"id":"1266","name":"Tirupathur"},{"id":"1267","name":"Tirupathur"},{"id":"1268","name":"Tiruppur"},{"id":"1269","name":"Tiruttani"},{"id":"1270","name":"Tiruvannamalai"},{"id":"1271","name":"Tiruvethipuram"},{"id":"1272","name":"Tittakudi"},{"id":"1273","name":"Udhagamandalam"},{"id":"1274","name":"Udumalaipettai"},{"id":"1275","name":"Unnamalaikadai"},{"id":"1276","name":"Usilampatti"},{"id":"1277","name":"Uthamapalayam"},{"id":"1278","name":"Uthiramerur"},{"id":"1279","name":"Vadakkuvalliyur"},{"id":"1280","name":"Vadalur"},{"id":"1281","name":"Vadipatti"},{"id":"1282","name":"Valparai"},{"id":"1283","name":"Vandavasi"},{"id":"1284","name":"Vaniyambadi"},{"id":"1285","name":"Vedaranyam"},{"id":"1286","name":"Vellakoil"},{"id":"1287","name":"Vellore"},{"id":"1288","name":"Vikramasingapuram"},{"id":"1289","name":"Viluppuram"},{"id":"1290","name":"Virudhachalam"},{"id":"1291","name":"Virudhunagar"},{"id":"1292","name":"Viswanatham"},{"id":"1506","name":"Chennai"},{"id":"1507","name":"Coimbatore"}],"33":[{"id":"1293","name":"Agartala"},{"id":"1294","name":"Badharghat"},{"id":"1295","name":"Dharmanagar"},{"id":"1296","name":"Indranagar"},{"id":"1297","name":"Jogendranagar"},{"id":"1298","name":"Kailasahar"},{"id":"1299","name":"Khowai"},{"id":"1300","name":"Pratapgarh"},{"id":"1301","name":"Udaipur"}],"34":[{"id":"1302","name":"Achhnera"},{"id":"1303","name":"Adari"},{"id":"1304","name":"Agra"},{"id":"1305","name":"Aligarh"},{"id":"1306","name":"Allahabad"},{"id":"1307","name":"Amroha"},{"id":"1308","name":"Azamgarh"},{"id":"1309","name":"Bahraich"},{"id":"1310","name":"Ballia"},{"id":"1311","name":"Balrampur"},{"id":"1312","name":"Banda"},{"id":"1313","name":"Bareilly"},{"id":"1314","name":"Chandausi"},{"id":"1315","name":"Dadri"},{"id":"1316","name":"Deoria"},{"id":"1317","name":"Etawah"},{"id":"1318","name":"Fatehabad"},{"id":"1319","name":"Fatehpur"},{"id":"1320","name":"Fatehpur"},{"id":"1321","name":"Greater Noida"},{"id":"1322","name":"Hamirpur"},{"id":"1323","name":"Hardoi"},{"id":"1324","name":"Jajmau"},{"id":"1325","name":"Jaunpur"},{"id":"1326","name":"Jhansi"},{"id":"1327","name":"Kalpi"},{"id":"1328","name":"Kanpur"},{"id":"1329","name":"Kota"},{"id":"1330","name":"Laharpur"},{"id":"1331","name":"Lakhimpur"},{"id":"1332","name":"Lal Gopalganj Nindaura"},{"id":"1333","name":"Lalganj"},{"id":"1334","name":"Lalitpur"},{"id":"1335","name":"Lar"},{"id":"1336","name":"Loni"},{"id":"1337","name":"Lucknow"},{"id":"1338","name":"Mathura"},{"id":"1339","name":"Meerut"},{"id":"1340","name":"Modinagar"},{"id":"1341","name":"Muradnagar"},{"id":"1342","name":"Nagina"},{"id":"1343","name":"Najibabad"},{"id":"1344","name":"Nakur"},{"id":"1345","name":"Nanpara"},{"id":"1346","name":"Naraura"},{"id":"1347","name":"Naugawan Sadat"},{"id":"1348","name":"Nautanwa"},{"id":"1349","name":"Nawabganj"},{"id":"1350","name":"Nehtaur"},{"id":"1351","name":"NOIDA"},{"id":"1352","name":"Noorpur"},{"id":"1353","name":"Obra"},{"id":"1354","name":"Orai"},{"id":"1355","name":"Padrauna"},{"id":"1356","name":"Palia Kalan"},{"id":"1357","name":"Parasi"},{"id":"1358","name":"Phulpur"},{"id":"1359","name":"Pihani"},{"id":"1360","name":"Pilibhit"},{"id":"1361","name":"Pilkhuwa"},{"id":"1362","name":"Powayan"},{"id":"1363","name":"Pukhrayan"},{"id":"1364","name":"Puranpur"},{"id":"1365","name":"Purquazi"},{"id":"1366","name":"Purwa"},{"id":"1367","name":"Rae Bareli"},{"id":"1368","name":"Rampur"},{"id":"1369","name":"Rampur Maniharan"},{"id":"1370","name":"Rasra"},{"id":"1371","name":"Rath"},{"id":"1372","name":"Renukoot"},{"id":"1373","name":"Reoti"},{"id":"1374","name":"Robertsganj"},{"id":"1375","name":"Rudauli"},{"id":"1376","name":"Rudrapur"},{"id":"1377","name":"Sadabad"},{"id":"1378","name":"Safipur"},{"id":"1379","name":"Saharanpur"},{"id":"1380","name":"Sahaspur"},{"id":"1381","name":"Sahaswan"},{"id":"1382","name":"Sahawar"},{"id":"1383","name":"Sahjanwa"},{"id":"1385","name":"Sambhal"},{"id":"1386","name":"Samdhan"},{"id":"1387","name":"Samthar"},{"id":"1388","name":"Sandi"},{"id":"1389","name":"Sandila"},{"id":"1390","name":"Sardhana"},{"id":"1391","name":"Seohara"},{"id":"1394","name":"Shahganj"},{"id":"1395","name":"Shahjahanpur"},{"id":"1396","name":"Shamli"},{"id":"1399","name":"Sherkot"},{"id":"1401","name":"Shikohabad"},{"id":"1402","name":"Shishgarh"},{"id":"1403","name":"Siana"},{"id":"1404","name":"Sikanderpur"},{"id":"1405","name":"Sikandra Rao"},{"id":"1406","name":"Sikandrabad"},{"id":"1407","name":"Sirsaganj"},{"id":"1408","name":"Sirsi"},{"id":"1409","name":"Sitapur"},{"id":"1410","name":"Soron"},{"id":"1411","name":"Suar"},{"id":"1412","name":"Sultanpur"},{"id":"1413","name":"Sumerpur"},{"id":"1414","name":"Tanda"},{"id":"1415","name":"Tanda"},{"id":"1416","name":"Tetri Bazar"},{"id":"1417","name":"Thakurdwara"},{"id":"1418","name":"Thana Bhawan"},{"id":"1419","name":"Tilhar"},{"id":"1420","name":"Tirwaganj"},{"id":"1421","name":"Tulsipur"},{"id":"1422","name":"Tundla"},{"id":"1423","name":"Unnao"},{"id":"1424","name":"Utraula"},{"id":"1425","name":"Varanasi"},{"id":"1426","name":"Vrindavan"},{"id":"1427","name":"Warhapur"},{"id":"1428","name":"Zaidpur"},{"id":"1429","name":"Zamania"},{"id":"1452","name":"Muzaffarnagar"}],"35":[{"id":"1430","name":"Almora"},{"id":"1431","name":"Bazpur"},{"id":"1432","name":"Chamba"},{"id":"1433","name":"Dehradun"},{"id":"1434","name":"Haldwani"},{"id":"1435","name":"Haridwar"},{"id":"1436","name":"Jaspur"},{"id":"1437","name":"Kashipur"},{"id":"1438","name":"kichha"},{"id":"1439","name":"Kotdwara"},{"id":"1440","name":"Manglaur"},{"id":"1441","name":"Mussoorie"},{"id":"1442","name":"Nagla"},{"id":"1443","name":"Nainital"},{"id":"1444","name":"Pauri"},{"id":"1445","name":"Pithoragarh"},{"id":"1446","name":"Ramnagar"},{"id":"1447","name":"Rishikesh"},{"id":"1448","name":"Roorkee"},{"id":"1449","name":"Rudrapur"},{"id":"1450","name":"Sitarganj"},{"id":"1451","name":"Tehri"}]}';

	var state_id = $("#user_state").val();

	var city_json = JSON.parse(city_json);
	var city_html = `<select class="form-input" id="user_city" name="user_city" onchange="check_other_city();">
					<option value="0" disabled selected>City</option>`;
	$.each(city_json[state_id], function(index, element) {

		city_html += `<option value="${element.id}">${element.name}</option>`;
	 });
	 city_html += `<option value="-1">Other</option>`;
	 city_html += '</select>';
	 $("#city-data").html(city_html);

}

function check_other_city() {

	$("#user_city_name").val('');
	var city_id = $("#user_city").val();
	if(city_id =='-1') {
		$("#other-city").show();
	}
	else{
		$("#other-city").hide();
	}
}

function user_login() {

	$("#login-mobile-modal").show();
}

function auth_user() {

	var user_mobile = $.trim($("#login_mobile_no").val());
	$("#btn-mobile-login").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	$("#btn-mobile-login").attr('disabled', true);

	$.ajax({
			url:"/user_registration/auth_user",
			type:'post',
			dataType:"json",
			data:{"login_mobile_no":user_mobile},
			success:function(response) {

				if(response.status == "1" ) {

					$("#login-mobile-modal").hide();
					$("#login-mobile-otp-verification-modal").show();
					$("#login_opt_mobile_no").val(user_mobile);
					$("#btn-mobile-login").html('Submit').attr('disabled', false);
				}
				else {
					$("#login-mobile-message").html(response.message);
					$("#login-mobile-message").show();
					$("#btn-mobile-login").html('Submit').attr('disabled', false);
					
				}
			},
			error: function() {

				$("#login-mobile-message").html(response.message);
				$("#login-mobile-message").show();
				$("#btn-mobile-login").html('Submit').attr('disabled', false);
			}
		 });
}

function auth_login_otp() {

	var user_mobile = $.trim($("#login_mobile_no").val());
	var user_otp = $.trim($("#login_otp").val());	
	$("#btn-login-otp").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	$("#btn-login-otp").attr('disabled', true);
	$("#login-mobile-otp-message").html("");
	$("#login-mobile-otp-message").hide();

	$.ajax({
			url:"/user_registration/auth_user_otp",
			type:'post',
			dataType:"json",
			data:{"login_mobile_no":user_mobile,"login_otp":user_otp},
			success:function(response) {

				if(response.status == "1" ) {

					location.href = "/report"
				}
				else {
					$("#login-mobile-otp-message").html(response.message);
					$("#login-mobile-otp-message").show();
					$("#btn-login-otp").html('Submit').attr('disabled', false);
				}
			},
			error: function() {
				$("#login-mobile-otp-message").html("Something went wrong try again");
				$("#login-mobile-otp-message").show();
				$("#btn-login-otp").html('Submit').attr('disabled', false);
				
			}
		 });
}

function complete_step(step) {
	//alert(step);
	switch(step) {
		case "2":
			$("#incomplete_frm_2").show();
			break;
		case "3":
			$("#incomplete_frm_3").show();
			break;
		case "4":
			$("#incomplete_frm_4").show();
			break;
		default:
			$("#incomplete_frm_2").show();
			break;
	}

}

function incomplete_2() {

	if (v.form()) {

		var user_address_1 = $.trim($("#user_address_1").val());
		var user_address_2 = $.trim($("#user_address_2").val());
		var user_pincode = $.trim($("#user_pincode").val());
		var user_state = $.trim($("#user_state").val());

		var user_city = $.trim($("#user_city").val());
		var user_city_name = $.trim($("#user_city_name").val());
		$("#step-2-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
		$("#step-2-btn").attr('disabled', true);

		$.ajax({
			url:"/user_registration/step_2",
			type:'post',
			dataType:"json",
			data:{"user_address_1":user_address_1,"user_address_2": user_address_2,"user_pincode":user_pincode,"user_state":user_state,"user_city":user_city,"user_city_name":user_city_name},
			success:function(response) {

				if(response.status == "1") {	

					$(".frm").hide("fast");
					$("#incomplete_frm_3").show();

					$("#step-2-btn").html('Save & Continue').attr('disabled', false);
					
				}
				else {
					$("#step-2-btn").html('Save & Continue').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-2-btn").html('Save & Continue').attr('disabled', false);
			}
		 });
	}
}

function incomplete_3() {
	
	 if(v.form()) {

		var user_employement_status = $.trim($("#user_employement_status").val());
		var user_company_name = $.trim($("#user_company_name").val());
		var user_monthly_salary = $.trim($("#user_monthly_salary").val());
		$("#step-3-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
		$("#step-3-btn").attr('disabled', true);

		$.ajax({
			url:"/user_registration/step_3",
			type:'post',
			dataType:"json",
			data:{"user_employement_status":user_employement_status,"user_company_name": user_company_name,"user_monthly_salary":user_monthly_salary},
			success:function(response) {
				
				if(response.status == "1") {

					$(".frm").hide("fast");
					$("#incomplete_frm_4").show();

					$("#step-3-btn").html('Save & Continue').attr('disabled', false);
				}
				else {
					$("#step-3-btn").html('Save & Continue').attr('disabled', false);
				}
			},
			error: function() {
				$("#step-3-btn").html('Save & Continue').attr('disabled', false);
			}
		 });
	}
}

function incomplete_4() {
	
	if(v.form()) {

	   var user_pancard = $.trim($("#user_pancard").val());
	   var user_adhaar_no = $.trim($("#user_adhaar_no").val());
	   var user_passport_no = $.trim($("#user_passport_no").val());
	   $("#step-4-btn").html('<i class="fa fa-refresh fa-spin"></i> Please wait, processing...');
	   $("#step-4-btn").attr('disabled', true);
	   $("#step-4-message").html('');

	   $.ajax({
	          	url:"/user_registration/step_4",
	          	type:'post',
	          	dataType:"json",
	          	data:{"user_pancard":user_pancard,"user_adhaar_no": user_adhaar_no,"user_passport_no":user_passport_no},
	          	success:function(response) {

	          		if(response.status == "1") {	

	          			location.href = "/report";
	          		}
	          		else {
	          			msg = response.message.split(",");
	          			msg_str = msg.join("<br/>");
	          			$("#step-4-message").html(msg_str);
	          			$('#step-4-message').show().delay(8000).fadeOut(400);

	          			$("#step-4-btn").html('Submit').attr('disabled', false);
	          		}
	          	},
	          	error: function() {
	          		$("#step-4-btn").html('Submit').attr('disabled', false);
	          	}
	        });
	  }  
}

$(document).on('click', '.close', function(){

	      $("#mobile-otp-verification-modal").hide();  
	      $("#login-mobile-modal").hide();   
	      $("#login-mobile-otp-verification-modal").hide();    
	
	      $("#incomplete_frm_2").hide();    
	      $("#incomplete_frm_3").hide();    
	      $("#incomplete_frm_4").hide();    
});
