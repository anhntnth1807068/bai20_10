

// var btnSubmit = document.forms["favourite-form"]["btn-submit"];

// btnSubmit.onclick = function(){
//     var checkbox = document.forms["favourite-form"]["favourite[]"];
//     var result = "";
//     for (var i = 0; i < checkbox.length; i++){
//         if (checkbox[i].checked === true)
//             result +=  checkbox[i].value + ', ' ;
//     }
//     alert("danh sách các game vừa chọn là: " + result);
// }


 //  var btnSubmit = document.form["favourite-form"]["btnSubmit"];
 // btnSubmit.onclick=function(){
 // 	var a=document.getElementsByClassName("check-favour");
 // 	var result="";
 // 	for (vari=0;i<checkbox.length;i++){
 // 		if(a[i].checked){
 // 			result=+checkbox[i].value + ',';

 // 		}
 // 		alert("danh sach cac game vua chon la :")





//  var btnSubmit =document.forms["favourite-form"]["btn-submit"];
//  btnSubmit.onclick=function(){
//  	//tim ra cac the input co thuoc tinh type la checkbox va co trang thai dc check
//  	var listFavour =document. querySeclecterAll("input[type='checkbox']:checked");
//  	var favourGame +=listFavour[i].value +",";
//  	for(var i=0;i<listFavour,length;i++){
//  		favourGame+=listFavour[i].value+","
//  	}
// alert(favourGame.substring(0,favourGame.length -2));
// }


var checKALLBox =document.forms["favourite-form"]["check-all"];
checKALLBox.onclick =function(){
	var listFavour =document.querySeclecterAll("input[type='checkbox']");
	var isChecked =this.checked;
	for(var i=0;i<listFavour.length;i++){
		listFavour[i].checked=isChecked? true:false;
	// 	if (isChecked){
	// 		listFavour[i].checked=true;

	// 	}else{
	// 		listFavour[i].checked=false;
	// 	}
	// }
}
}