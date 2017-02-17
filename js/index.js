 $("p").hover(
        function() {
            $(this).html("color", 'red');
        },
        function() {
            $(this).css("background", '#bba');
        } 
    );