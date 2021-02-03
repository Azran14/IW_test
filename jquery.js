$('#form').parsley();

var instance = $('#first').parsley();
console.log(instance.isValid()); // maxlength is 42, so field is valid
$('#first').attr('data-parsley-maxlength', 4);
console.log(instance.isValid());