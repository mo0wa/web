$(document).ready(function(){

    //마우스 오버시 효과
    $('article').on('mouseover', function(){

        // 변수 vid에 video 파일 참조
        var vid = $(this).find("video").get(0);
        // 동영상의 재생위치를 처음(0)으로 설정
        vid.currentTime = 0;
        // 동영상을 재생
        vid.play();

        $(this).stop().animate({'width':'35%'},1000,function(){
            $(this).find('h3').stop().animate({left:10},400);
            $(this).find('p').stop().animate({left:10},800);
        });

        $(this).find('video').stop().animate({opacity:1},1200);

    });

    //마우스 아웃시 효과
    $('article').on('mouseout', function(){

        // 변수 vid에 video 파일 참조
        var vid = $(this).find("video").get(0);
        // 영상 정지
        vid.pause();

        $(this).stop().animate({"width":"12%"},700);

        $(this).find("video").stop().animate({'opacity':'0'},2000);

        $(this).find('h3').stop().animate({left:-500},200);

        $(this).find('p').stop().animate({left:-500},500);
        
    });

    $('footer > ul > li:nth-child(5)').on('mouseover', function(){
        $(this).find('a').stop().text('킹아');
    });
    $('footer > ul > li:nth-child(5)').on('mouseout', function(){
        $(this).find('a').stop().text('고세구');
    });

    $('article:nth-child(1)').on('click',function(){
        window.open('https://www.youtube.com/watch?v=fgSXAKsq-Vo&pp=ygUM66as7JmA7J2465Oc')
    });

    $('article:nth-child(2)').on('click',function(){
        window.open('https://www.youtube.com/watch?v=JY-gJkMuJ94&pp=ygUJ6rKo7Jq467SE')
    });

    $('article:nth-child(3)').on('click',function(){
        window.open('https://www.youtube.com/watch?v=rDFUl2mHIW4&pp=ygUG7YKk65Sp')
    });

    $('article:nth-child(4)').on('click',function(){
        window.open('https://www.youtube.com/watch?v=QgMFpuos4Rg&pp=ygUJ66Gd64uk7Jq0')
    });

    // footer 멤버별 링크
    var el = $('footer li'); // 이벤트를 설정할 엘리먼트를 선택해 준다

    var urls = ['https://www.youtube.com/@INE_', 'https://www.youtube.com/@jingburger', 'https://www.youtube.com/@lilpa', 'https://www.youtube.com/@JU_RURU', 'https://www.youtube.com/@gosegu', 'https://www.youtube.com/@viichan116'];
    // 배열에 index에 맞게 링크주소를 할당해 준다


    el.on('click', function(evt){
            evt.preventDefault(); // 클릭시 링크태그 기능을 중지
            var tg = $(this);
            var i = tg.index()
    // index()메서드로 현재 클릭한 엘리먼트의 index 번호를 변수 i에 할당
            var links = urls[i]; // index번호로 배열세어 링크주소를 가져온다
            var openNWin = window.open('about:blank'); // 새 창열기
            openNWin.location.href = links; // 링크
            });

    // footer 출처 클릭
    $('footer > a').on('click', function(lusey){
        lusey.preventDefault();
        window.open('https://cafe.naver.com/steamindiegame/3823577');
    })
    
    //웹 아이콘 링크
    var sns = $('.sns li'); // 이벤트를 설정할 엘리먼트를 선택해 준다

    var snsUrls = ['https://www.twitch.tv/woowakgood', 'https://twitter.com/jinjjawakgood?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', 'https://www.youtube.com/@waktaverse/'];
    // 배열에 index에 맞게 링크주소를 할당해 준다


    sns.on('click', function(evt){
            evt.preventDefault(); // 클릭시 링크태그 기능을 중지
            var snsTg = $(this);
            var snsI = snsTg.index()
    // index()메서드로 현재 클릭한 엘리먼트의 index 번호를 변수 i에 할당
            var snsLinks = snsUrls[snsI]; // index번호로 배열세어 링크주소를 가져온다
            var snsOpenNWin = window.open('about:blank'); // 새 창열기
            snsOpenNWin.location.href = snsLinks; // 링크
            });
});