$(function(){
	$('#join').submit(function() {
		let user_id = $('input[name="user_id"]').val();		
		if(!user_id) { //if(user_id == '') 같은 의미
			alert("아이디를 입력하세요.");
			$('input[name="user_id"]').focus();
			return false;
		}
		
		let user_pw = $('input[name="user_pw"]').val();
		if(!user_pw) {
			alert("비밀번호를 입력하세요.");
			$('input[name="user_pw"]').focus();
			return false;
		}
		
		if(!$('input[name="gender"]').is(':checked')) {
			alert("성별을 입력하세요.");
			
			//남자 선택
			//radio는 배열로 받는다
			//남자: gender[0], 여자 : gender[1]
			/*
			해당 문법은 JavaScript이다.
			document.form1.gender[0].checked = true;
			*/
			//밑이 jQuery의 문법이다.
			$('input[name="gender"]:eq(0)').attr('checked', true);
			
			return false;
		}
		
		let email = $('input[name="email"]').val();
		if(!email) {
			alert("이메일을 입력하세요.");
			$('input[name="email"]').focus();
			return false;
		}
		
		let url = $('input[name="url"]').val();
		if(!url) {
			alert("URL을 입력하세요.");
			$('input[name="url"]').focus();
			return false;
		}
		
		let phone = $('input[name="phone"]').val();
		if(!phone) {
			alert("휴대폰을 입력하세요.");
			$('input[name="phone"]').focus();
			return false;
		}
		
		if(!$('input[name="hobby"]').is(':checked')) {
			alert("취미를 선택하세요.")
			$('input[name="hobby"]:eq(1)').attr('checked', true);
			return false;
		}
		
		if($('select[name="job"] > option:selected').index() == 0) {
			alert("직업을 선택하세요.");
			$('select[name="job"] > option:eq(1)').attr('selected', true);
			return false;
		}
		
		//입력한 내용을 화면에 출력
		let gender = $('input[name="gender"]:checked').val();
		//여러개 선택, 배열
		let hobby = $('input[name="hobby"]:checked') 
		let hobby_val = '';
		
		hobby.each(function() {
			//값을 this라고 한다.
			hobby_val += $(this).val() + " ";
		});
		
		let job = $('select[name="job"] > option:selected').val();
		
		let result = `<ul>
						<li>아이디 : ${user_id}</li>
						<li>비밀번호 : ${user_pw}</li>
						<li>성별 : ${gender}</li>
						<li>이메일 : ${email}</li>
						<li>URL : ${url}</li>
						<li>휴대폰 : ${phone}</li>
						<li>취미 : ${hobby_val}</li>
						<li>직업 : ${job}</li>
					</ul>`;
		
		$('#result').html(result);
		
		return false;
	});
});

