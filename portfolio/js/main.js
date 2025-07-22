$(document).ready(function(){


    const myFullpage = new fullpage('#fullpage', {   /* html에서 페이지 전체를 감싸는 요소 */ 

		Navigation: true, /* 오른쪽에 각 페이지의 paging */ 
		NavigationPosition: 'right', /* 위치 */ 
		NavigationTooltips: ['첫번째', '두번째', '세번째', '네번째'], /*툴팁 */ 
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 */ 
		
		lockAnchors: true, 앵커: ['link1', 'link2', 'link3', 'link4'], /* href="#link1" 방식으로 코딩하면 해당 링크명으로 이동 */ 

		autoScrolling:true, /* 한페이지씩 스크롤 */ 
		scrollHorizontally: true, VerticalCentered: true, /* 컨텐더 위키는 중앙에 */ 
		
		scrollOverflow: false, /* 컨텐츠가도 이동 금지 */ 

		afterLoad: function(origin, 목적지, 방향, 트리거){ if(destination.index == 2){ /* 색인가 2면 슬라이드는 슬라이드입니다. index 수는 0/1/2/3 */ 
				console.log('3번째 슬라이드가 실행된 날'); } }, ResponseWidth: 640 /* fullpage를 적용하면 예외적인 모바일 크기 */ 
	});
})