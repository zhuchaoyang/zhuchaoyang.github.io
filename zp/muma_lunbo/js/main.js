$(document).ready(function($){

    
    var item_count = $('item').length; // count of items in corousel
    var item_rotation = 360/item_count;
    var item_Z_distance = 100;
 
 /*打开网页时的初始状态*/   
    $('item').each( function(index) {
                   
        $(this).css({
            'transform' : 'rotateY('+( item_rotation * index )+'deg) translateZ('+item_Z_distance+'px)'
        }).attr('tc-rotation', ( item_rotation * index ) );

    });
    
    // function change_rotate(change_deg){
    //     $('#container').stop(false,true).css({
    //         'transform'         : 'rotateY('+ change_deg +'deg)',
    //         '-ms-transform'     : 'rotateY('+ change_deg +'deg)',
    //         '-webkit-transform' : 'rotateY('+ change_deg +'deg)'
    //     });
    // }

/*轮播*/
    // var $('#container').
    var num=0;
    var timer1=null;
    function aa(){
        num++;
        // $('#container').css({'transform':'rotateY('+(item_rotation+num)+'deg)'})
        for (var j=0;j<$("item").length;j++) {
            $('item').eq(j).css({
                'transform' : ' rotateY('+((item_rotation*j)+num)+'deg) translateX('+item_Z_distance+'px)'       
                // 'transform' : ' rotateY('+((item_rotation*j)+num)+'deg) translateZ('+item_Z_distance+'px)'

                // 'transform' : 'rotateZ(90deg) rotateY('+((item_rotation*j)+num)+'deg) translateX('+item_Z_distance+'px)'
                // 'transform' : 'rotateX(90deg) rotateY('+((item_rotation*j)+num)+'deg) translateZ('+item_Z_distance+'px)'
                // 'transform' : 'rotateY(90deg) rotateY('+((item_rotation*j)+num)+'deg) translateZ('+item_Z_distance+'px)'
            },0) 
        }
    }
    timer1=setInterval(aa,30);



    // var rotateto = 0;
    // var crotateto = 0;

    
    // $('item').on('click', function(){
    //     var crotation = $('#container').attr('tcc-rotation');
    //     var rotation = $(this).attr('tc-rotation');  

    //     rotateto = -(crotation - rotation);
          
    //     change_rotate(rotateto);
    //     crotation = rotateto;
    //     console.log(rotation)
    //     console.log(crotation)
    // });
    
    // $('.tc-next').on('click', function(){
    //     rotateto -= item_rotation;
    //     change_rotate(rotateto);
    // });
    // $('.tc-prev').on('click', function(){
    //     rotateto += item_rotation;
    //     change_rotate(rotateto);
    // });


    

});
