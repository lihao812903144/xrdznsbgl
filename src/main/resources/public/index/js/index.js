
//查询出登录日志的信息
getAllLog();
getAllEquipment();
getAllEquipment2();
admin_list();
function getAllLog() {
    $.ajax({
        url:'/getAllLog',
        type:'get',
        dataType:'json',
        success:function (data){
            console.log(data.data[0].admin);

            //通过js控制html代码
            //append 在这个标签的里边最后添加代码
            var html = "";
            for (var i = 0;i < data.data.length;i++ ) {
                html += '<div class="row">';
                html += '<div class="col-xs-1 ">';
                html += (i+1);
                html += '</div>';
                html += '<div class="col-xs-4">';
                html += '<span>'+data.data[i].admin.name+'</span>';
                html += '</div>';
                html += '<div class="col-xs-5">';
                html += data.data[i].logintime.substr("0","19").replace("T","/");
                html += '</div>';
                html += '<div class="col-xs-2">';
                html += data.data[i].ip;
                html += '</div>';
                html += '</div>';
            }
            $("#logonlog_allog").append(html);

        }
    })
}


function addEquipment(){
    $.ajax({
        url:'/addEquipment',
        type:'get',
        dataType:'json',
        data:{
            name:$('#e_name').val(),
            person:$('#e_person').val(),
            brand:$('#e_brand').val(),
            number:$('#e_number').val()
        },
        success:function (data){
            console.log(data);
            alert(data.msg);
            //empty() 方法从被选元素移除所有内容，包括所有文本和子节点。
            $("#equipmentList").empty();
            //重新获取
            getAllEquipment();
        }
    })
}

function getAllEquipment() {
    $.ajax({
        url:'/getAllEquipment',
        type:'get',
        dataType:'json',
        success:function (data){
            console.log(data);

            //通过js控制html代码
            //append 在这个标签的里边最后添加代码
            var html = "";
            for (var i = 0;i < data.data.length;i++ ) {
                html+='<div class="row">'
                html+='<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'
                html+=(i+1)
                html+=' </div>'
                html+='<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">'
                html+= data.data[i].name
                html+='</div>'
                html+='<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">'
                html+='<button class="btn btn-success btn-xs" data-toggle="modal" data-target="#changeSource" onclick="e_update('+data.data[i].id+')">详情</button>'
                html+='<button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteSource" onclick="e_delete('+data.data[i].id+')">删除</button>'
                html+='</div>'
                html+='</div>'
            }
            //append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
            $("#equipmentList").append(html);
        }
    })
}

//设置详情模块 获取信息
function getAllEquipment2() {
    $.ajax({
        url:'/getAllEquipment',
        type:'get',
        dataType:'json',
        success:function (data){
            console.log(data);

            //通过js控制html代码
            //append 在这个标签的里边最后添加代码
            var html = "";
            for (var i = 0;i < data.data.length;i++ ) {
                html+='  <div class="row">'
                html+='  <div class="col-xs-1 ">'
                html+=(i+1)
                html+=' </div>'
                html+='  <div class="col-xs-2">'
                html+=data.data[i].name
                html+='  </div>'
                html+='   <div class="col-xs-1">'
                html+=data.data[i].person
                html+='  </div>'
                html+='  <div class="col-xs-1">'
                html+=data.data[i].brand
                html+='   </div>'
                html+='  <div class="col-xs-2">'
                html+=data.data[i].number
                html+='  </div>'
                html+=' <div class="col-xs-2">'
                html+='  <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseSchool" onclick="e_update2('+data.data[i].id+')">修改</button>'
                html+=' <button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteSource123" onclick="e_delete2('+data.data[i].id+')">删除</button>'
                html+='  </div>'
                html+=' </div>'
            }
            $("#equipmentList2").append(html);
        }
    })
}

//点击详情
function e_update(id) {
    $.ajax({
        url:'/getEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id
        },
        success:function (data){
            console.log(data);
            $("#e_update_name").val(data.data.name);
            $("#e_update_person").val(data.data.person);
            $("#e_update_brand").val(data.data.brand);
            $("#e_update_number").val(data.data.number);
            //保存按钮
            //attr 设置被选元素的属性和值。
            $("#e_update_bc").attr("onclick","e_update_bc("+data.data.id+")");
        }
    })
}

function e_update2(id) {
    $.ajax({
        url:'/getEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id
        },
        success:function (data){
            console.log(data);
            $("#e_update_name2").val(data.data.name);
            $("#e_update_person2").val(data.data.person);
            $("#e_update_brand2").val(data.data.brand);
            $("#e_update_number2").val(data.data.number);
            //保存按钮
            $("#e_update_bc2").attr("onclick","e_update_bc2("+data.data.id+")");
        }
    })
}

//保存
function e_update_bc(id) {

    $.ajax({
        url:'/updategetEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id,
            name:$("#e_update_name").val(),
            person:$("#e_update_person").val(),
            brand:$("#e_update_brand").val(),
            number:$("#e_update_number").val()
        },
        success:function (data){
            console.log(data);
            alert(data.msg);
            //重新加载 (先删除原来的数据然后在加载新的数据)
            $("#equipmentList").empty();
            getAllEquipment();
        }
    })
}

function e_update_bc2(id) {

    $.ajax({
        url:'/updategetEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id,
            name:$("#e_update_name2").val(),
            person:$("#e_update_person2").val(),
            brand:$("#e_update_brand2").val(),
            number:$("#e_update_number2").val()
        },
        success:function (data){
            console.log(data);
            alert(data.msg);
            //重新加载 (先删除原来的数据然后在加载新的数据)
            $("#equipmentList2").empty();
            getAllEquipment2();
        }
    })
}

//删除设备
function e_delete(id) {
    console.log(id)
    $("#e_delete_qd").attr("onclick","e_delete_qd("+id+")");
}


function e_delete_qd(id) {
    $.ajax({
        url:'/deleteEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id
        },
        success:function (data){
            console.log(data);
            alert(data.msg);
            //重新加载 (先删除原来的数据然后在加载新的数据)
            $("#equipmentList").empty();
            getAllEquipment();
        }
    })
}

//删除设备
function e_delete2(id) {
    console.log(id)
    $("#e_delete_qd2").attr("onclick","e_delete_qd2("+id+")");
}


function e_delete_qd2(id) {
    $.ajax({
        url:'/deleteEquipmentById',
        type:'get',
        dataType:'json',
        data:{
            id:id
        },
        success:function (data){
            console.log(data);
            alert(data.msg);
            //重新加载 (先删除原来的数据然后在加载新的数据)
            $("#equipmentList2").empty();
            getAllEquipment2();
        }
    })
}

function admin_list(){
    $.ajax({
        url:'/getAllAdmin',
        type:'get',
        dataType:'json',
        success:function (data){
            console.log(data);

            //通过js控制html代码
            //append 在这个标签的里边最后添加代码
            var html = "";
            for (var i = 0;i < data.data.length;i++ ) {
                html+=' <div class="row">'
                html+=' <div class="col-xs-2 ">'
                html+=data.data[i].jobnumber
                html+='   </div>'
                html+='   <div class="col-xs-1">'
                html+=data.data[i].name
                html+='   </div>'
                html+=' <div class="col-xs-2">'
                html+=data.data[i].department
                html+='</div>'
                html+='  <div class="col-xs-2">'
                html+=data.data[i].username
                html+=' </div>'
                html+=' <div class="col-xs-2">'
                if (data.data[i].power) {
                    html += '超级管理员'
                }else {
                    html += '普通用户'
                }
                html+=' </div>'
                html+='   <div class="col-xs-2">'
                html+=data.data[i].job
                html+=' </div>'
                html+='  <div class="col-xs-1">'
                html+='  <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#addAdmin" onclick="admin_update('+data.data[i].id+')">修改</button>'
                html+=' </div>'
                html+=' </div>'
            }
            //append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
            $("#admin_list").append(html);
        }
    })
}

function addAdmin() {
    $.ajax({
        url:'/addAdmin',
        type:'post',
        data:{
            jobnumber:$("#add_jobnumber").val(),
            name:$("#add_name").val(),
            department:$("#add_department").val(),
            username:$("#add_username").val(),
            password:$("#add_password").val(),
            power:$("#add_power").val(),
            job:$("#add_job").val()
        },
        dataType:'json',
        success:function (data){
            console.log(data);
            alert(data.msg);
            //重新加载 (先删除原来的数据然后在加载新的数据)
            $("#admin_list").empty();
            admin_list();
        }
    })
}
function admin_update(id) {
    $.ajax({
        url:'/getAdminById',
        type:'get',
        dataType:'json',
        data:{
            id:id
        },
        success:function (data){

            console.log(data);
            $("#add_jobnumber").val(data.data.jobnumber);
            $("#add_name").val(data.data.name);
            $("#add_department").val(data.data.department);
            $("#add_username").val(data.data.username);
            $("#add_password").val(data.data.password);
            if (data.data.power == 1){
                //超级管理员
                $("#add_power").val(1)
            } else {
                //普通用户
                $("#add_power").val(0)
            }
            $("#add_job").val(data.data.job);
            //保存按钮
            $("#update_Admin_bc").attr("onclick","update_Admin_bc("+data.data.id+")");
        }
    })
}

function update_Admin_bc(id){
        $.ajax({
            url:'/updategetAdminById',
            type:'get',
            dataType:'json',
            data:{
                id:id,
                jobnumber:$("#add_jobnumber").val(),
                name:$("#add_name").val(),
                department:$("#add_department").val(),
                username:$("#add_username").val(),
                password:$("#add_password").val(),
                power:$("#add_power").val(),
                job:$("#add_job").val()
            },
            success:function (data){
                console.log(data);
                alert(data.msg);
                //重新加载 (先删除原来的数据然后在加载新的数据)
                $("#admin_list").empty();
                admin_list();
            }
        })
}