$(document).ready(function(){
    var name = $('.title').html();
        $.post("/update_rat", {"title": name}, function(req,res) {
            const rait_id = req.rating;
            $('.rathing-main').html(rait_id);
        });
    
       
        $('body > div > div > div.wrapper-col-3 > button').click(function(e){
            const rat = $(' body > div > div > div.wrapper-col-3 > input[type=text]').val();
            $.post("/update_person_rat", {"rating": rat, "title": name}, function(req,res) {
                $('.rathing-main').html(rat);
            });
        });
});