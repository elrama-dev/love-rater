$(function(){
    $('#generate-btn').click(function(){
        if($(this).text() == 'Generate'){
            $('#generator #title').addClass('hidden');
            $('#result').text(rateLove());
            $('#generator').children('#result').removeClass('hidden');
            $('.person-name').attr('readonly', true);
            $('#generate-btn').text('Reset');
        }else if($(this).text() == 'Reset'){
            $('.person-name').removeAttr('readonly');
            $('.person-name').first().prop('value', 'person1');
            $('.person-name').last().prop('value', 'person2');
            $('#generate-btn').text('Generate');
            $('#result').text('LOVE RATER');
        }
    });
});

function rateLove(){
    let rate = Math.floor(Math.random() * 101);
    let rateText;
    if(rate == 0){
        rateText = 'Minimal ngaca';
    }else if(0 < rate && rate <= 10){
        rateText = 'belum jodoh';
    }else if(10 < rate && rate <= 25){
        rateText = 'kasian'
    }else if(25 < rate && rate <= 50){
        rateText = 'usaha lagi';
    }else if(50 < rate && rate <= 75){
        rateText = 'bisa jadi';
    }else if(75 < rate && rate < 100){
        rateText = 'Cocok!';
    }else if(rate == 100){
        rateText = 'Perfect Match!';
    }
    return `${rate}%: ${rateText}`;
}