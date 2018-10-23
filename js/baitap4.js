var student1 = {
    rollNumber : 'A0001',
    avatar: 'img/1.jpg',
    name : 'Phan Hoai Nam',
    birthday : '20/10/1990',
    address : 'Số 8 Tôn Thất Thuyết',
    phone: '092131234'
};
var student2 = {
    rollNumber : 'A0002',
    avatar: 'img/2.jpg',
    name : 'Tieu Binh',
    birthday : '20/10/2000',
    address : 'Số 8 Tôn Thất Thuyết',
    phone: '092131234'
};
var student3 = {
    rollNumber : 'A0003',
    avatar: 'img/3.jpg',
    name : 'Thanh Hoa',
    birthday : '21/06/2000',
    address : 'Số 10 Tôn Thất Thuyết',
    phone: '+84 x9 x075 23x'
};
var student4 = {
    rollNumber : 'A0004',
    avatar: 'img/4.jpg',
    name : 'Doanh Quang',
    birthday : '16/03/1998',
    address : 'Số 10 Tôn Thất Thuyết',
    phone: '+8432781221'
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
for (var i = 0; i < listStudent.length; i++) {
    alert(listStudent[i].name);
}

var classMainContent = document.getElementsByClassName('main-content');
if(classMainContent != null || classMainContent.length >0){
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length ; i++) {
        var itemContent = '<div class="personal-infor">';
            // itemContent += '<div class="avatar" style="background-image: url(\''); background-size: cover">';
            // itemContent += ' </div>';
            itemContent += '<div class="line-infor">';
                itemContent += '<label>Rollnumber</label>';
                itemContent += ' <div>' + listStudent[i].rollNumber + '</div>';
            itemContent += ' </div>';
            itemContent += '<div class="line-infor">';
                itemContent += '<label>Name</label>';
                itemContent += ' <div>' + listStudent[i].name + '</div>';
            itemContent += ' </div>';
            itemContent += '<div class="line-infor">';
                itemContent += '<label>Phone</label>';
                itemContent += ' <div>' + listStudent[i].phone + '</div>';
            itemContent += ' </div>';
        itemContent += ' </div>';
        mainContent.innerHTML += itemContent;
    }
}