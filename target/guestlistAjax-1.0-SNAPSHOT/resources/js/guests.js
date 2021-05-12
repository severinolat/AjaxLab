$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    let guestList="";
     $.each(data, function (i,guest){
         let pers = "<p>"+ guest.first+" "+ guest.last+"</p>";
         guestList += pers;
     })

   $("#guestList").html("hello"+data.first +" "+ data.last);
    
}