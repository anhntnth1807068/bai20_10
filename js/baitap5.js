var arrayTubes = new Array(
    {
        id: 'UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'dns2WLu8Su8',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'XyjhXzsVdiI',
        title: 'Tình Thôi Xót Xa',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tái Bút Anh Yêu Em',
        author: 'Hà Anh Tuấn'
    }
);
var myTubes =document.getElementById('myTubes')
if(myTubes!=null){
for (i =0; i<arrayTubes.length ;i++){
    var listTube = '<div style="float:left;" class="tube-item">'+
           ' <iframe width="450" height="220" src="https://www.youtube.com/embed/'+arrayTubes[i].id+
           '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
            '<h3>'+arrayTubes[i].title+'</h3>'+
        '</div>';
       myTubes.innerHTML+=listTube;

}
}