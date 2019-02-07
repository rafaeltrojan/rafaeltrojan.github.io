$(document).ready(function(){
    $('#typewriteText')
    //.on('typewriteComplete', function() {
    //	$('#links').show();
	//})
    .typewrite({
        cursor: '',
        actions: [
        //{speed: 15},	
            {type: 'Hello, '},
        ]
    });
});