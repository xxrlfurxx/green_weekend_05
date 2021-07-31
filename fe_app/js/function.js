$(function(){
    // 함수에 넣어주는 값 : 매개변수 값
// mouseenter : jquery 마우스 오버 이벤트
    $('.gnb-link').on('mouseenter', function(){
        $(this).siblings().addClass('active');
    });

    $('.gnb-item').on('mouseleave', function() {
        $(this).children().removeClass('active');
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=a126ad7f4dfe460929d700a4af425a37' )
        .then(function(response){
            return response.json();
    })
        .then(function(weatherJson){
            $('.weather-description').text(weatherJson.weather[0].description);

            console.log(weatherJson.weather[0].icon);
            $('.weather-image').attr('src', 'http://openweathermap.org/img/wn/10d@2x.png');
            // Math : 수학 계산용 객체 ( 내장 객체 )
            console.log(Math.floor(weatherJson.main.temp-273));
        });


})