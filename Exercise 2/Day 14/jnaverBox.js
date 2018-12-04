$(document).ready(function(){
	$('.auto-search').click(function(){
		$('.auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});
	$('.item4').click(function(){
			menu();
	});
	$('.menu-close').click(function(){
			menu();
});
	function menu(){
		$('.sub-menu').toggleClass('display-block');
		$('.item4').toggleClass('item4icon');
		$('.sub-menu-background').toggleClass('display-block');
	}
	
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});

		//div는 ul태그를 감싸는 객체의 선택자명
		//h는 marginTop의 높이
		//time은 이동하는데 걸리는 시간
    var ticker = function(div,h,time)
    {
			//setTimeout 일정 시간이 지난뒤에 function을 실행함
			//400밀리 세컨드 = 0.4초
        timer = setTimeout(function(){
            $(div+' li:first').animate( {marginTop: h}, time, function()
            {
							//여기서 this는 item5 클래스내에 ul태그 안에 있는 첫번째 li태그 객체
							//detach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
							//부모.append(자식): 부모안에 있는 컨텐츠 뒤에 자식을 붙임
							//자식.appendTo(부모) : 부모안에 있는 컨텐츠 뒤에 자식을 붙임
								$(this).detach().appendTo(div+'>ul').removeAttr('style');
								//위와 아래 코드는 동일
								// $('.item5>ul').detach().appendTo('.item5 li:first').removeAttr('style');
						});
						ticker(div,h,time);
						//밑에 2000은 화면에 보여지는 시간 / 머무는 시간 2초
				}, 2000); 
			};
	ticker('.item5','-20px',400);
	ticker('.news-content','-20px',600);
});

// 0번 이전 기능
      // $(document).on('click','.prev',function(){
      //   $('.item5 li:last').hide().prependTo($('.item5')).slideDown();
      //   clearTimeout(timer);
      //   item5();
      //   if($('#pause').text() == 'Unpause'){
      //     $('#pause').text('Pause');
      //   };
      // }); // 0번 기능 끝

