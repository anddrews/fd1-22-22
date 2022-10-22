//here will by JavaScript code ...
function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        html += '<li><h2>'+ item +'</h2></li>';
    });
    html += '</ul>';
    return html;
}
const dataContainer = document.querySelector('#data-container');
$('#demo').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13,14, 195],
    pageSize: 10,
    callback: function(data, pagination) {
        // template method of yourself
        var html = simpleTemplating(data);
        $(dataContainer).html(html);
    }
})