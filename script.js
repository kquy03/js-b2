// File: script.js
$(document).ready(function () {
    // 1. Bật/Tắt chế độ Sáng - Tối (Dark Mode)
    $('#theme-toggle').click(function () {
        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            $(this).text('☀️ Chế độ Sáng');
        } else {
            $(this).text('🌙 Chế độ Tối');
        }
    });

    // 2. Hiệu ứng đóng/mở mượt mà khi bấm vào tiêu đề từng mục
    $('.toggle-title').css('cursor', 'pointer').click(function () {
        $(this).next('.section-content').slideToggle(300);
    });
});
