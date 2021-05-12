$(function (){
    $("#fetch").click(makeParse);
});

function makeParse(){
    let id = $("#id").val();
    $.get("http://jsonplaceholder.typicode.com/users/" + id, printUser);
    $.get("http://jsonplaceholder.typicode.com/posts/", printPosts);
}

function printUser(data){
    let usersObj = JSON.stringify(data);
    let user = JSON.parse(usersObj);

    $("#content").append(
        "<p> Id:"+ user.id+ "</p>" +
        "<p> Name:"+ user.name+ "</p>"+
        "<p> Username:"+ user.username+ "</p>"+
        "<p> Email:"+ user.email+ "</p>"+
        "<p> Phone:"+ user.phone+ "</p>"+
        "<p> Website:"+ user.website+ "</p>"
    );
}

function printPosts(data){

     $.each(data, function (i,post){
         $("#posts").append(
             "<p> Title:" + post.title+ "</p>"+
             "<p> Body:" + post.body+ "</p>"
         )
     });

}