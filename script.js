$(document).ready(function () {
    var day_count = 12
    for (i = 1; i <= day_count; i++) {
        $('.list-group').append(`<li class="list-group-item"><a href="day${('000' + i).slice(-3)}">Day ${i}</a></li>`)
    }
});