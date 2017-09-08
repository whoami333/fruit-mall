/**
 * Created by bjwsl-001 on 2017/2/27.
 */

/**功能点1：待页面加载完成后，异步请求页头和页尾**/
$(function () {
  //$('#header').load('php/header.php', function () {
  //  $("#exit").hide();
  //  if (sessionStorage['LoginPhone']) {
  //    $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
  //    $("#exit").show().on('click',function(e){
  //      e.preventDefault();
  //      sessionStorage.clear();
  //      location.href="index_00.html";
  //    })
  //  }
  //});
  //$('#footer').load('php/footer.php');
  //$('#header02').load('php/header02.php', function () {
  //  $("#exit").hide();
  //  if (sessionStorage['LoginPhone']) {
  //    $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
  //    $("#exit").show().on('click',function(e){
  //      e.preventDefault();
  //      sessionStorage.clear();
  //      location.href="index_00.html";
  //    })
  //  }
  //});

  $('#header').load('php/header.php', function () {
    $("#exit").hide();
    if (sessionStorage['LoginPhone']) {
      $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
      $("#exit").show().on('click',function(e){
        e.preventDefault();
        sessionStorage.clear();
        location.href="../../index_00.html";
      });
    }
    $("#fgg").on("mouseover",function(){
      $(".fruit_1").show();
      this.style="background:#fff";
    }).on("mouseout",function(){
      this.style="background:#eeeeee";
    });
    $(".fruit_1").on("mouseout",function(){
      $(".fruit_1").hide();
      $("#fgg").style="background:#eee";
    }).on("mouseover",function(){
      $(".fruit_1").show();
    });

    $("#phone_gy").on("mouseover",function(){
      $(".fruit_2").show();
      this.style="background:#fff";
    }).on("mouseout",function(){
      this.style="background:#eeeeee";
    });
    $(".fruit_2").on("mouseout",function(){
      $(".fruit_2").hide();
      $("#phone_gy").style="background:#eee";
    }).on("mouseover",function(){
      $(".fruit_2").show();
    });


  });
  $('#footer').load('php/footer.php');
  $('#header02').load('php/header02.php', function () {
    $("#exit").hide();
    if (sessionStorage['LoginPhone']) {
      $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
      $("#exit").show().on('click',function(e){
        e.preventDefault();
        sessionStorage.clear();
        location.href="../../index_00.html";
      });
    };
    $("#fgg").on("mouseover",function(){
      $(".fruit_1").show();
      console.log("132")
      this.style="background:#fff";
    }).on("mouseout",function(){
      this.style="background:#eeeeee";
    });
    $(".fruit_1").on("mouseout",function(){
      $(".fruit_1").hide();
      $("#fgg").style="background:#eee";
    }).on("mouseover",function(){
      $(".fruit_1").show();
    });
    $("#phone_gy").on("mouseover",function(){
      $(".fruit_2").show();
      this.style="background:#fff";
    }).on("mouseout",function(){
      this.style="background:#eeeeee";
    });
    $(".fruit_2").on("mouseout",function(){
      $(".fruit_2").hide();
      $("#phone_gy").style="background:#eee";
    }).on("mouseover",function(){
      $(".fruit_2").show();
    });
  });
});

/**功能点1：为“注册”按钮绑定事件监听**/

$('.register').click(function(e){

  e.preventDefault();
  //表单序列化 - 把选中表单中所有的带name属性的值串联起来，组成k=v&k=v形式，直接用于HTTP请求消息
  var data = $('#user_register').serialize();
  $.ajax({
    type: 'POST',
    url: 'data/reg.php',
    data: data,
    success: function(obj){
      if(obj.code === 200){
        //alert('新用户注册成功！3s自动跳转到登录页');
        console.log(obj)
        //location.href = 'index_00.html';
      }else {
        alert('新用户注册失败！错误消息：'+obj.msg);
      }
    },
    error: function(){
      alert('异步请求失败！')
    }
  });
});

/**功能点2：为“登录”按钮绑定事件监听**/
$('.btn_login').click(function(e){
  e.preventDefault()
  var n = $('[name="phone"]').val();
  var p = $('[name="pwd"]').val();
  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: 'data/user_login.php',
    data: {phone: n, pwd: p},
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code<0){  //登录失败
        alert("失败")
        $('p.alert').html(data.msg);
      }else {           //登录成功
        //$('.modal').hide();
        //alert("通过")
        location.href="../../index_00.html";
        $('#welcome').html('欢迎回来：'+data.phone);
        //loginUname = data.uname; //在全局范围保存登录用户名
        //loginUid = data.uid;//在全局范围保存登录用户编号
        sessionStorage['LoginPhone'] = data.phone;
        sessionStorage['LoginUid'] = data.uid;
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
});

/**功能点2：为“注册会员”按钮绑定事件监听**/

$('.btn_reg').click(function(e){
  e.preventDefault();
  location.href="register.html";
});

var app = angular.module('myApp', ['ng']);

app.controller("mainCtrl",['$scope',function($scope){
}]);