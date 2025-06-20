$(document).ready(function(){
    let scrolling
    let win_h
    

    let slogan = $('.slogan')
    let slogan_obj = $('.slogan p span')
    let slogan_leng = slogan_obj.length
    let slogan_scroll //슬로건 sstart에서부터 스크롤된값
    let slogan_top //슬로건이 위에서부터 떨어진 거리
    let slogan_start //애니메이션 시작점
    let slogan_end //애니메이션 종료점
    let slogan_w 

    let dark = $('.life')
    let dark_top //life가 위에서부터떨어진거리
    let dark_start//애니메이션 시작점

    let photo = $('.banner .photo')
    let photo_top
    let photo_start
    let photo_end
    let photo_scroll
    let photo_w_start = 30
    let photo_w_end = 100
    let photo_w

    function photo_resize(){
        photo_top = photo.offset().top
        photo_start = photo_top  - (win_h * 0.6)
        photo_end = photo_top + photo.height() - (win_h * 0.6)
        photo_scroll = (photo_end - photo_start) / (photo_end - photo_start) * 100

        //console.log('scroll', photo_scroll)

        if(photo_start > scrolling){
            //console.log('시작전')
            photo.width(photo_w_start + '%')
        }else if(photo_end > scrolling){
            //console.log('애니메이션 중')
            photo_w = ((photo_w_end - photo_w_start)/100 * photo_scroll) + photo_w_start
            console.log(photo_w)
            photo.width(photo_w + '%')
        }else{
            //console.log('종료')
            photo.width(photo_w_end + '%')
        }
        
    }

    scroll_chk()//브라우저가 로딩됐을때 1번
    resize_chk()
    slogan_ani()
    photo_resize()
    dark_bg()
    $(window).scroll(function(){
        //스크롤 할때마다 1번씩
        scroll_chk()
        slogan_ani()
        dark_bg()
        photo_resize()
    })
    $(window).resize(function(){
        scroll_chk()
        slogan_ani()
        dark_bg()
        photo_resize()
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log('스크롤값', scrolling)
    }//scroll_chk

    function resize_chk(){
        win_h = $(window).height()
    }
    function slogan_ani(){

        slogan_top = slogan.offset().top
        slogan_start = slogan_top - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling, 'start', slogan_start)
        //start값과 start값이 같을때 애니시작
        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling, 'end', slogan_end)
        //scroll값과 end값이 같을때 애니종료
        slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100
        //console.log(slogan_scroll)
        
        if(slogan_start > scrolling){
            //console.log('시작이전')
            slogan_obj.width('0')
        }else if(slogan_end > scrolling){
            //console.log('애니메이션중')
            //slogan_w = 100/slogan_leng
            for(i=0; i<slogan_leng; i++){
                slogan_w = (slogan_scroll - (100/slogan_leng)*i) * slogan_leng
                if(slogan_w > 100){
                    slogan_w = 100
                }
                slogan_obj.eq(i).width(slogan_w + '%')
            }
        }else{
            //console.log('종료이후')
            slogan_obj.width('100%')
        }

    }//slogan_ani

    function dark_bg(){
        dark_top = dark.offset().top
        dark_start = dark_top - scrolling - (win_h * 0.3)
        //console.log('scroll', scrolling, 'top', dark_top, 'start', dark_start)
        if(dark_start < 0){
            dark.addClass('dark')
        }else{
            dark.removeClass('dark')
        }
    }//dark_bg

 })//$(document)