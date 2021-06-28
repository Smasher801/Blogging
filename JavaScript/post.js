function editData(){
    var track = document.getElementById('heading');
    var track1 = document.getElementById('para');
    track.contentEditable = "true";
    track1.contentEditable = "true";
    
    
}



//      .......................    this is for like button division and comment division   ............................
function addComment(id){
    var addEventName = id.value + '<hr style="border: 5px solid grey; margin: 0;"> '  ;
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p style="padding-top:0;">'+addEventName+'</p>' ;          
    a.value=a.defaultValue;
}
var numberOfClicks=0;
function postLike(){
    document.getElementById("likeBlog").innerHTML = "Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }


