/**
 * Created by bjwsl-001 on 2017/3/11.
 */
var app = angular.module('myApp', ['ng']);
/**功能点1：待页面加载完成后，异步请求页头和页尾**/
app.service('$head', function () {
  this.head = function () {
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
  };
});
/**功能点2：轮播广告 **/
app.service('$lunbo', function () {
  this.lunbo = function () {
    var index = 0;
    var timer = setInterval(function () {
      index -= 1425;
      jQuery("#bigAd > ul").attr("style", "transition:1s;transform:translateX(" + index + "px)");
      if (index < -4275) {
        index = 1425;
      }
      if (index == 0) {
        jQuery(".a1").parent().addClass("actived");
        jQuery(".a1").parent().siblings().removeClass("actived");
      } else if (index == -1425) {
        jQuery(".a2").parent().addClass("actived");
        jQuery(".a2").parent().siblings().removeClass("actived");
      } else if (index == -2850) {
        jQuery(".a3").parent().addClass("actived");
        jQuery(".a3").parent().siblings().removeClass("actived");
      } else if (index == -4275) {
        jQuery(".a4").parent().addClass("actived");
        jQuery(".a4").parent().siblings().removeClass("actived");
      } else {
        jQuery(".a5").parent().addClass("actived");
        jQuery(".a5").parent().siblings().removeClass("actived");
      }
    }, 1500);

    //var timer = setInterval(function () {
    //  index -= 100;
    //  jQuery("#bigAd > ul").attr("style", "transition:1s;transform:translateX(" + index + "%)");
    //  if (index < -300) {
    //    index = 100;
    //  }
    //  if (index == 0) {
    //    jQuery(".a1").parent().addClass("actived");
    //    jQuery(".a1").parent().siblings().removeClass("actived");
    //  } else if (index == -100) {
    //    jQuery(".a2").parent().addClass("actived");
    //    jQuery(".a2").parent().siblings().removeClass("actived");
    //  } else if (index == -200) {
    //    jQuery(".a3").parent().addClass("actived");
    //    jQuery(".a3").parent().siblings().removeClass("actived");
    //  } else if (index == -300) {
    //    jQuery(".a4").parent().addClass("actived");
    //    jQuery(".a4").parent().siblings().removeClass("actived");
    //  } else {
    //    jQuery(".a5").parent().addClass("actived");
    //    jQuery(".a5").parent().siblings().removeClass("actived");
    //  }
    //}, 1500);

    jQuery("#bigAd").mouseover(function () {
      clearInterval(timer)
    });

    jQuery("#bigAd").mouseout(function () {
      timer = setInterval(function () {
        index -= 1425;
        jQuery("#bigAd > ul").attr("style", "transition:1s;transform:translateX(" + index + "px)")
        if (index < -4275) {
          index = 1425;
        }

        if (index == 0) {
          jQuery(".a1").parent().addClass("actived")
          jQuery(".a1").parent().siblings().removeClass("actived");
        } else if (index == -1425) {
          jQuery(".a2").parent().addClass("actived")
          jQuery(".a2").parent().siblings().removeClass("actived");
        } else if (index == -2850) {
          jQuery(".a3").parent().addClass("actived")
          jQuery(".a3").parent().siblings().removeClass("actived");
        } else if (index == -4275) {
          jQuery(".a4").parent().addClass("actived")
          jQuery(".a4").parent().siblings().removeClass("actived");
        } else {
          jQuery(".a5").parent().addClass("actived")
          jQuery(".a5").parent().siblings().removeClass("actived");
        }
      }, 1500);
    });


    jQuery(".nav_ad_big_button").on("click", "a", function (e) {

      e.preventDefault();
      jQuery(this).parent().addClass("actived");
      jQuery(this).parent().siblings().removeClass("actived");

      if (jQuery(".a1").parent().hasClass("actived")) {
        jQuery(".picAd").attr("style", 'transition:1.5s;transform:translateX(0px); ');
      }
      if (jQuery(".a2").parent().hasClass("actived")) {
        jQuery(".picAd").attr("style", 'transition:1.5s;transform:translateX(-1425px); ');
      }
      if (jQuery(".a3").parent().hasClass("actived")) {
        jQuery(".picAd").attr("style", 'transition:1.5s;transform:translateX(-2850px); ');
      }
      if (jQuery(".a4").parent().hasClass("actived")) {
        jQuery(".picAd").attr("style", 'transition:1.5s;transform:translateX(-4275px); ');
      }
      if (jQuery(".a5").parent().hasClass("actived")) {
        jQuery(".picAd").attr("style", 'transition:1.5s;transform:translateX(-5700px); ');
      }
    });
  }
});

/*** 模态框*/
app.service('$modal',function(){
  this.modal = function(){
    $("#modal").fadeIn("slow");
    $("#zhezhao").fadeIn("slow");
  }
});
/**关闭模态框*/
$("#close_modal").click(function(){
  $("#modal").fadeOut("slow");
  $("#zhezhao").fadeOut("slow");
});
$("#close_modal01").click(function(){
  $("#modal").fadeOut("slow");
  $("#zhezhao").fadeOut("slow");
});

app.controller('mainCtrl', ['$scope', '$http', '$head', '$lunbo','$modal','$introduce','$comment','$userPage',
  function ($scope, $http, $head, $lunbo,$modal,$introduce,$comment,$userPage) {
    $head.head();
    $lunbo.lunbo();
    $introduce.introduce();
    $comment.comment();
    $userPage.pager();

    /***读取*商品列表*/
    $http
      .get('data/productList.php')
      .success(function (data) {
        $scope.list = data;
        //console.log(data)
      });

    /***读取*小购物车详情列表*/
    //创建读取购物车详情方法
    //console.log(sessionStorage['LoginUid']);
    function load() {
      $http
        .get('data/f_detail_list.php?uid=' + sessionStorage['LoginUid'])
        .success(function (data) {
          /** 购物车中所有商品明细*/
            //console.log(data.length);
          $scope.smCarList = data;
          /***读取*小购物车商品数量总计*/
            //声明一个变量接收商品数量总计
          $scope.smCarCount = 0;
          //累加购物车中商品数量总计
          for (var key in data) {
            $scope.smCarCount += parseInt(data[key].count);
          }
          //console.log($scope.smCarCount);
          /***读取*小购物车商品价格总计*/
            //声明一个变量接收商品价格总和
          $scope.smCarPrice = 0;
          //累加购物车中的商品价格
          for (var key in data) {
            //console.log(data[key].count);
            //console.log(data[key].price);
            $scope.smCarPrice += data[key].count * parseFloat(data[key].price).toFixed(2);
          }
          $scope.smCarPrice = $scope.smCarPrice.toFixed(2);
        });
    };
    //首次加载后、刷新页面后,读取购物车详情的方法
    load();

    /***执行*添加商品至购物车*/
    $scope.AddToCar = function ($event) {
      //console.log(  $event.target   );
      //console.log(angular.element($event.target).attr('data'));
      $scope.pid = angular.element($event.target).attr('data');
      if (sessionStorage['LoginUid']) {
        $http
          .post('data/f_detail_add.php?uid=' + sessionStorage['LoginUid'] + '&&pid=' + $scope.pid)
          .success(function (data) {
            //console.log(data);
            //添加商品完成后，读取购物车详情
            load();
            //添加商品后显示模态框
            $modal.modal();
            //添加商品后更新购物车中的商品数量
            $scope.smCarCount+=1;
            //console.log("点击添加至购物车时查询$scope.smCarCount数量： "+$scope.smCarCount)
          })
      } else {
        alert("请先登录再购买商品！")
      }
    };


    /***执行*删除购物车商品*/
    $scope.Delete = function ($event) {
      //console.log($event.target);
      //console.log(angular.element($event.target).attr('data-num'));
      /** 当前商品的 订单ID**/
      $scope.did = angular.element($event.target).attr('data');
      /** 当前商品的 数量**/
      $scope.num = angular.element($event.target).attr('data-num');
      $http
        .post('data/f_detail_delete.php?did=' + $scope.did)
        .success(function (data) {
          //console.log(data);
          //删除商品后,刷新购物车详情
          load();
          //删除商品后,更新购物车中的商品数量
          $scope.smCarCount-=$scope.num;
          //console.log("点击添加至购物车时查询$scope.smCarCount数量： "+$scope.smCarCount)
          if($scope.smCarCount===0){
            $(".car_detail").fadeOut();
            $(".car_detail_none").fadeIn();
          }
        })
    };
    /***执行*小购物车商品+操作*/
    $scope.Add = function ($event) {
      $scope.did = angular.element($event.target).attr('data');
      $http
        .post('data/update_count_add.php?did=' + $scope.did)
        .success(function (data) {
          //console.log(data);
          //增加商品完成后,读取购物车详情
          load();
          $scope.smCarCount+=1;
          //console.log("点击 + 后 ，购物车中的商品数量："+$scope.smCarCount )
        })
    };
    /***执行*小购物车商品-操作*/
    $scope.Reduce = function ($event) {
      $scope.did = angular.element($event.target).attr('data');
      $http
        .post('data/update_count_sub.php?did=' + $scope.did)
        .success(function (data) {
          //console.log(data);
          //减少商品完成后,读取购物车详情
          load();
          $scope.smCarCount-=1;
          //console.log("点击 - 后 ，购物车中的商品数量："+$scope.smCarCount )
        })
    };



    /*** 点击展开**购物车**/

    $("#header_white > div.shopping_car > a > img").click(function () {
      /*** 条件1.如果，当购物车中有商品时*/
      if($scope.smCarCount>0){
        //条件a.如果购物车为 关闭状态（绿色）
        if ($(".shopping_car a>img").attr("src") == "img/car_count.png") {
          //满足条件a.时，则切换购物车为 打开状态（黄色)
          $(".shopping_car a> img").attr("src", "img/car_count02.png");
          //满足条件1.时， 显示购物车详情单
          $(".car_detail").fadeIn();
        } else {
          //不满足条件a.时，则切换购物车为 关闭状态（绿色）
          $(".shopping_car a>img").attr("src", "img/car_count.png");
          $(".car_detail").fadeOut();
        }
      }
      /*** 条件2.如果，当购物车中没有商品时*/
      else{
        //条件b.如果购物车为 关闭状态（绿色）
        if ($(".shopping_car a>img").attr("src") == "img/car_count.png") {
          //满足条件b.时，则切换购物车为 打开状态（黄色）
          $(".shopping_car a> img").attr("src", "img/car_count02.png");
        } else {
          //不满足条件b.时，则切换购物车为 关闭状态（绿色）
          $(".shopping_car a>img").attr("src", "img/car_count.png");
          $(".car_detail_none").fadeOut();
        }
        //满足条件2.时候， 显示 “购物车中没有商品，快添加吧！”
        $(".car_detail_none").show();
      }
    });
  }]);

/** 商品简介及评论切换**/
app.service('$introduce',function(){
  this.introduce = function(){
    $("#introduce").click(function(e){
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $(".item_info_comment").hide();
      $(".item_info_introduce").show();
      $(".comment_content_page").hide();
    });
  }
});
app.service('$comment',function(){
  this.comment = function(){
    $("#comment").click(function(e){
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $(".item_info_introduce").hide();
      $(".item_info_comment").show();
      $(".comment_content_page").show();
    });
  }
});
/** 个人中心标签切换 **/
app.service('$userPage',function(){
  this.pager = function(){
    $(".left_card").on('click','a',function(e){
      e.preventDefault();
      $(".left_card a").removeClass("active");
      $(this).addClass("active");
    })
  }
});