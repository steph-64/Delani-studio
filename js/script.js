$(document).ready(function() {
    $("#design").click(function() {
        $("#hidden1").slideToggle();
        $("#design").slideToggle();
    });
    $("#development").click(function() {
        $("#hidden2").slideToggle();
        $("#development").slideToggle();
    });
    $("#product").click(function() {
        $("#hidden3").slideToggle();
        $("#product").slideToggle();
    });
});
$(document).ready(function() {
    $("#hidden1").click(function() {
        $("#hidden1").slideToggle();
        $("#design").slideToggle();
    });
    $("#hidden2").click(function() {
        $("#hidden2").slideToggle();
        $("#development").slideToggle();
    });
    $("#hidden3").click(function() {
        $("#hidden3").slideToggle();
        $("#product").slideToggle();
    });
});
