// Как всегда, проверим готовность документа
$(document).ready(function() {
    $('.keys').focus(); // Устанавливаем фокус на элемент с клавишами
    // Отлавливаем события "Нажатие на клавишу"
    $(document).keydown(function(event) {
        // Создаем переменную, в которую помещаем div с подходящим data-key
        var key = $('.key[data-key=' + event.which + ']');
        // Находим на странице тег audio с нужным data-key и помещаем также в переменную для удобства
        var audio = $('audio[data-key=' + event.which + ']')[0];
        // Присваиваем активный класс к клавише, чтобы подсветить её
        key.toggleClass('playing');
        // проверяем существует ли audio тег с таким data-key
        if (!audio) return;
        // Воспроизводим звук
        audio.play();
        // Сбрасываем таймер звуковой дорожки снова на 0
        audio.currentTime = 0;
    });

    // Отслеживаем событие, когда пользователь отпускает кнопку 
    $(document).keyup(function(event) {
        // снова создаем переменную с нужным data-key
        var key = $('.key[data-key=' + event.which + ']'); 
        // Убираем класс, который подсвечивает кнопку 
        key.toggleClass('playing');
    });
});
