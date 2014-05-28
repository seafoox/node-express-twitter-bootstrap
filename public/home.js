$(function () {
    update()
    $('input#send').click(send)
    $('input#update').click(update)
})
function update(){
    $.get('/get', function (result, status){

        $('textarea').val(result.txt)
        if(result.txt==undefined){
            alert('Sth went wrong!')
        }
    })
}
function send(){
    $.post('/', {txt:$('textarea').val()},function(result){
        if(result.code!=0){
            alert("Something went wrong!")
        }
    })
}