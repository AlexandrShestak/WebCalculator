var isOperationEntered = false

$(document).ready(function(){
    $('body').append('<br/>Этот текст добавлен с помощью jQuery');
});


/*add numbers to entry field*/
$(document).ready(function(){
    $('.number').click(function(){
        if(isOperationEntered) {
            $('.entryField').val('')
            $('.entryField').val( $(this).attr("value"))
        }else{

            var temp = $('.entryField').val()
            if (temp=="0"){
                $('.entryField').val($(this).attr("value"))
            }else
                  $('.entryField').val(temp + $(this).attr("value"))
        }
        isOperationEntered = false
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

/*ajax memethod for operation =,-,+,/,**/
$(document).ready(function(){
    $('.operation').click(function(){
        if(isOperationEntered) {
            var temp = $(this).val()
            $.ajax({
                url: 'Controller',
                data: {
                    type: 'operationWithoutOperand',
                    operation: temp
                },
                success: function (response) {
                    $('.entryField').val(response)
                }
            });
        }else{
            var temp = $(this).val()
            $.ajax({
                url: 'Controller',
                data: {
                    type: 'operationWithOperand',
                    operation: temp,
                    value: $('.entryField').val()
                },
                success: function (response) {
                    $('.entryField').val(response)
                }
            });
        }
        isOperationEntered = true
    })
});

/*ajax method for memory operations*/
$(document).ready(function(){
    $('.memory').click(function(){
        var temp = $(this).val()
        $.ajax({
            url:'Controller',
            data: {
                type:$(this).val(),
                operation:temp,
                value: $('.entryField').val()
            },
            success : function(response){
                $('.entryField').val(response)
            }
        });
    })
});

$(document).ready(function(){
    $('#CE').click(function(){
        var temp = $(this).val()
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
        isOperationEntered = false
    })
});

$(document).ready(function(){
    $('#dot').click(function(){
        var temp = $('.entryField').val()
        $('.entryField').val(temp+'.')
    })
});


$(document).ready(function(){
    $('.entryField').change(function(){
        isOperationEntered = false
    })
});

$(document).ready(function(){
    $("#el").draggable()
});
