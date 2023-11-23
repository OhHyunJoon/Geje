$(document).ready(function(){
    //header hide
    
    
    $(window).scroll(function(){     //window를 스크롤했을 때 할일
        let st = $(this).scrollTop()   //윈도우가 스크롤한 양(스크롤탑)을 변수에 저장하기
        console.log(st)    
        if(st > 450){                       //만약에 변수 > 450 이상이면 
            $('header').addClass('hide');           //header에 hide 추가하기
            $('.mb-bt').addClass('hide');           //.mb-bt에 hide 추가하기
        }else{ //아니면
            $('header').removeClass('hide');       //header에 hide 추가하기 
            $('.mb-bt').removeClass('hide');       //.mb-bt에 hide 추가하기
        }
    })
     
    
    // all-menu
    $('.all-menu').click(function(){
        $('.all-nav-wrapper').addClass('all-nav-wrapper-active')
        $('.all-nav-mask').addClass('all-nav-mask-active')
    })
    // all-menu 클릭했을 떄 할일
    // all-nav-wrapper 클래스 추가
    //all mask active 클래스 추가
    $('.all-nav-close').click(function(){
        $('.all-nav-wrapper').removeClass('all-nav-wrapper-active')
        $('.all-nav-mask').removeClass('all-nav-mask-active')
    })
    //닫기 버튼 클릭했을 때 할일 
    //wrapper active 클래스 삭제
    //all mask active 클래스 삭제

    //모바일
    $('.mb-bt').click(function(e){
        e.preventDefault();
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
    })
    //mb-bt 클릭했을 때 할일 
    //a 작동 막고
    //mb-bt 에 mb-bt-open 클래스를 toggle 시켜주기
    //모바일 메뉴 배경도 toggle 클래스 주기
    //mb-nav 에 mb-nav-open 클래스 toggle 시켜주기
    
    
     
    //화면사이즈 체크해서 모바일에서 pc로 넘어갈 떄 클래스를 없애주기!
    $(window).resize(function(){
        let temp = $(window).width()
        if(temp > 1220 ){
             $('.mb-bt').removeClass('mb-bt-open')
             $('.mb-menu-mask').removeClass('mb-menu-mask-active')
             $('.mb-nav').removeClass('mb-nav-open')
            // [모바일] 3가지 클래스 remove
        }else
        $('.all-nav-wrapper').removeClass('all-nav-wrapper-active')
        $('.all-nav-mask').removeClass('all-nav-mask-active')
            // [전체메뉴]2가지 클래스 remove
        })
        // 모바일 서브메뉴 
        const mb_mainmenu = $('.mb-mainmenu'),  //모바일 메인 메뉴
        mb_submenu = $ ('.mb-submenu')     //모바일 서브 메뉴
        let mb_submenu_height = [] ;         //펼쳐진 서브메뉴 높이값
        console.log(mb_mainmenu)
        console.log(mb_submenu)
        // $.each(mb_submenu, function(index, item){할일})
        $.each(mb_submenu, function(index){
            //각각의 mb_submenu 로 가서 li 개수를 파악
            let count = $(this).find('li').length;
            mb_submenu_height[index]=51*count+22    //최종결과를 저장
        })
        console.log(mb_submenu_height)

        let mb_li = $('.mb-menu > li')
        $.each(mb_mainmenu, function(index){
            $(this).click(function(e){
                e.preventDefault();
                $(this).toggleClass('mb-mainmenu-open')
                let active = $(this).hasClass('mb-mainmenu-open')
                if(active){
                    //클릭 됐다 
                    //해당(클릭된) li>a의 높이값을 저장
                    let temp = mb_submenu_height[index]
                    mb_li.eq(index).height(temp+54)
                    // 저장한 높이값에다가 + 54
                }else{
                    // 안됐다
                    // mb_li 높이값을 54
                    mb_li.eq(index).height(54)
                }
                // mb-mainmenu-open class 추가를 해서 있으면 펼치고 없으면 닫기

            })
        })

        
    
    
    $('.gotop').click(function(){
            $('html,body').stop().animate({
                scrollTop:0
            }, 500)
         })

         //swiper
         let sw_banner = new Swiper(".sw-banner", {
            slidesPerView:2,  //슬라이드 한번에 몇개?
            autoplay:true, //자동재생
            loop:true, //무한반복
            breakpoints: {
                1023 : {slidesPerView: 6},
                872 : {slidesPerView: 5},
                676 : {slidesPerView: 4},
                450 : {slidesPerView: 3},
                320 : {slidesPerView: 2},
            },
            spaceBetween:13,
            navigation: {
                nextEl : ".banner-forward",
                prevEl : ".banner-back"
            }
        });

        //banner 

        const banner_back = $('.banner-back')
        const banner_play = $('.banner-play')
        const banner_forward = $('.banner-forward')


        banner_play.click(function(){
            $(this).toggleClass('banner-play-start')
            
            // bannerplay 클릭했을 때 할일 
            // bannerplay가 toggleClass banner-play-startjm 
            let temp
             = $(this).hasClass('banner-play-start') 
            if(temp){
                //슬라이드 작동 안함
                sw_banner.autoplay.stop()
            }else
            sw_banner.autoplay.start()
        })
})