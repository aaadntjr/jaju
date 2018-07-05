$(document).ready(function(){
    
    
    //섹션 돌리기!~~!~!
    var spin = 0; 
    $(".prev_btn").hide();

    
    function layout (){
    $(".spin").css({"transform":"rotateY("+ spin +"deg)"}); 
        
        if(spin <= -72) {/*이전버튼 숨기기*/
            $(".prev_btn").show();
        }else {
            $(".prev_btn").hide();
        };
        
        if(spin%360 == -72) {
            $(".gnb_item a").removeClass("gnb_active");
            $(".gnb_item01 a").addClass("gnb_active");
//            $(".section").css({"display":"block"});
//            $(".section04").css({"display":"none"});
//            $(".section05").css({"display":"none"});
            setTimeout(function(){
                $(".section02").addClass("section02_active");
            }, 1000);
            return false;
            
        }else if(spin%360 == -144) {
            $(".gnb_item a").removeClass("gnb_active");
            $(".gnb_item02 a").addClass("gnb_active");
//            $(".section").css({"display":"block"});
//            $(".section01").css({"display":"none"});
//            $(".section05").css({"display":"none"});
            
//            setTimeout(function(){
//                //            }, 1000);
            return false;
            
        }else if(spin%360 == -216) {
            $(".gnb_item a").removeClass("gnb_active");
            $(".gnb_item03 a").addClass("gnb_active");
//            $(".section").css({"display":"block"});
//            $(".section01").css({"display":"none"});
//            $(".section02").css({"display":"none"});
    
            
//            setTimeout(function(){
//                $(".section03").css({"display":"none"});
//                $(".section05").css({"display":"none"});
//            }, 1000);
            return false;
            
        }else if(spin%360 == -288) {
            $(".gnb_item a").removeClass("gnb_active");
            $(".gnb_item04 a").addClass("gnb_active");
//            $(".section").css({"display":"block"});
//            $(".section02").css({"display":"none"});
//            $(".section03").css({"display":"none"});
           
//            setTimeout(function(){
//                $(".section05").addClass("section05_active");
//            }, 1000);
            
            return false;
            
        }else if(spin%360 == 0) {
            $(".gnb_item a").removeClass("gnb_active");
//            $(".section").css({"display":"block"});
//            $(".section03").css({"display":"none"});
//            $(".section04").css({"display":"none"});
           
//            setTimeout(function(){
//               
//                $(".section01").show();
//            }, 1000);
            return false;
            
        }else {
            return false;
        };
        
    };/*레이아웃 펑션 끝*/
    
    
     $("header>h1>a").click(function(){/*f로고 클릭*/
        spin = 0; 
         return layout();

    });/*로고 클릭 끝*/
    
    /*gnb 메뉴 클릭하기*/
    $(".gnb_item01").click(function(){
       spin = -72;
        return layout();
    });
    $(".gnb_item02").click(function(){
       spin = -144;
        
        return layout();
    });
    $(".gnb_item03").click(function(){
       spin = -216;
        
        return layout();
    });
    $(".gnb_item04").click(function(){
       spin = -288;
       
        return layout();
    });
    
    $(".next_btn").click(function(){/*다음 버튼 클릭*/
        
        spin = spin-72;

        return layout();
  
        });/*다음 버튼 클릭 끝*/

    $(".prev_btn").click(function(){/*이전 버튼 클릭*/
           spin = spin + 72;

        return layout();
        });/*이전 버튼 클릭 끝*/
    
    
    
    
    //섹션1 타이틀 효과
    $(".section01 .section01_copy>p").each(function(){
       $(this).addClass("section01_active"); 
    });
    
    
    //섹션 3번 버튼 열고 닫기
    $(".section03_sub").hide();
    $(".section03_sub_btn").hide();
    
    $(".section03_main_btn").click(function(){
        $(this).fadeOut();
        $(".section03_main>img").fadeOut();
        $(".section03_sub").slideDown();
        $(".section03_sub_btn").slideDown();
        $(".section03_body_copy").addClass("section03_active");
    });/*메인 버튼 클릭*/
    
    $(".section03_sub_btn").click(function(){
        $(this).fadeOut();
        $(".section03_sub").fadeOut();
        $(".section03_main>img").slideDown();
        $(".section03_main_btn").slideDown();
        $(".section03_body_copy").removeClass("section03_active");
    });/*서브 버튼 클릭*/
    
     
    /*섹션 4번 마우스 향해 돌리기*/   
    
    $(".section04").mousemove(function(e){
        
        function transform (selector) {
            var width = $(selector).width();
            var height = $(selector).height();
            var left = $(selector).offset().left;
            var top = $(selector).offset().top;
            var degx = (e.pageY - (top - height * 0.1)) * 0.02;
            var degy = (e.pageX - (left - width * 0.5)) * 0.02;
            
            $(selector).css({"transform":"rotateX("+ -degx +"deg) rotateY("+ degy +"deg)"});
        };
        new transform(".section04_left_item01");
        new transform(".section04_left_item02");
        new transform(".section04_left_item03");
    });
    

    
    
});/*레디 펑션!*/