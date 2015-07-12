
$(document).ready(function(){
    $('body').append('<br/>Этот текст добавлен с помощью jQuery');
});


/*add numbers to entry field*/
$(document).ready(function(){
    $('.number').click(function(){
        var temp = $('.entryField').val()
        $('.entryField').val(temp+$(this).attr("value"))
    })
});

/*backspace function*/
$(document).ready(function(){
    $('#backspace').click(function(){
        var temp = $('.entryField').val()
        temp = temp.substring(0,temp.length-1)
        $('.entryField').val(temp)
    })
});

/*plus/minus function*/
$(document).ready(function(){
    $('#plusMinus').click(function(){
        var temp = $('.entryField').val()
        if (temp.charAt(0) ==  '-'){
            temp = temp.substring(1,temp.length)
            $('.entryField').val(temp)
        }else{
            temp = '-' + temp;
            $('.entryField').val(temp)
        }
    })
});

$(document).ready(function(){
    $('.operation').click(function(){
        var temp = $(this).val()
        $('body').append('<br/>Этот текст добавлен с помощью jQuery'+temp);
        $.ajax({
            url:'Controller',
            data: {
                    type:'operation',
                    operation:temp,
                    value:$('.entryField').val()
            },
            success : function(response){
                $('.entryField').val(response)
            }
        });
    })
});

$(document).ready(function(){
    $('.memory').click(function(){
        var temp = $(this).val()
        $('body').append('<br/>Этот текст добавлен с помощью jQuery'+temp);
        $.ajax({
            url:'Controller',
            data: {
                type:$(this).val(),
                operation:temp
            },
            success : function(response){
                $('.entryField').val(response)
            }
        });
    })
});


