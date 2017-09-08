/**
 * Created by bjwsl-001 on 2017/3/11.
 */
/**功能点1：待页面加载完成后，异步请求页头和页尾**/
$(function () {
  $('#header').load('php/header.php', function () {
    if (sessionStorage['LoginPhone']) {
      $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
      $("#exit").on('click',function(e){e.preventDefault(); console.log("123")})
    }
  });
  $('#footer').load('php/footer.php');
  $('#header02').load('php/header02.php', function () {
    if (sessionStorage['LoginPhone']) {
      $('#welcome').html(" <a href='user.html'>欢迎回来：" + sessionStorage['LoginPhone'] + "</a>");
    }
  });
});




/**功能点2：轮播广告 **/
$(function () {
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
});

/**功能点3：异步请求内容列表 **/
function loadProduct() {
  $.ajax({
    url: 'data/productList.php',
    success: function (data) {
      //console.log(data)
      var html = '';
      $.each(data, function (i, l) {
        if (i < 8) {
          html += `
      <li>
        <a href="#">
          <div class="hot2"><img src="img/${l.pic}"></div>
          <div>${l.pname}</div>
          <div>￥${l.price}/${l.guige}</div>
          <div class="car" data="${l.pid}"></div>
        </a>
        <div style="background:${l.color}">${l.status}</div>
      </li>
        `;
          $('#line01').html(html);
        }
      });
      html = " ";
      $.each(data, function (i, l) {
        if (i > 7 && i < 18) {
          html += `
      <li>
        <a href="#">
          <div class="hot2"><img src="img/${l.pic}"></div>
          <div>${l.pname}</div>
          <div>￥${l.price}/${l.guige}</div>
          <div class="car" data="${l.pid}"></div>
        </a>
        <div style="background:${l.color}">${l.status}</div>
      </li>
        `;
          $('#line02').html(html);
        }
      });
      html = " ";
      $.each(data, function (i, l) {
        if (i > 17 && i < 28) {
          html += `
      <li>
        <a href="#">
          <div class="hot2"><img src="img/${l.pic}"></div>
          <div>${l.pname}</div>
          <div>￥${l.price}/${l.guige}</div>
          <div class="car" data="${l.pid}"></div>
        </a>
        <div style="background:${l.color}">${l.status}</div>
      </li>
        `;
          $('#line03').html(html);
        }
      });
      html = " ";
      $.each(data, function (i, l) {
        if (i > 27) {
          html += `
      <li>
        <a href="#">
          <div class="hot2"><img src="img/${l.pic}"></div>
          <div>${l.pname}</div>
          <div>￥${l.price}/${l.guige}</div>
          <div class="car" data="${l.pid}"></div>
        </a>
        <div style="background:${l.color}">${l.status}</div>
      </li>
        `;
          $('#line04').html(html);
        }
      });
      html = " ";
    },
    error: function () {
      console.log('异步请求商品列表出错！请检查响应消息');
    }
  });
}


/**功能点4：异步请求商品列表完成后，加载添加商品至购物车功能 **/

$(function () {
  loadProduct();
  $("#main01").on('click', '.car', function (e) {
    e.preventDefault();
    console.log("商品ID： " + $(this).attr("data"));
    var pid = $(this).attr('data');
    if (sessionStorage['LoginUid']) {
      $.ajax({
        type: 'POST',
        url: 'data/f_detail_add.php',
        data: {'uid': sessionStorage['LoginUid'], 'pid': pid},
        success: function (data) {
          if (data.code < 0) {
            console.log('添加失败！错误原因：' + data.msg);
          } else {
            console.log('添加成功！该商品已购买：' + data.count);
          }
        },
        error: function () {
          console.log('添加购物车商品出错！请检查响应消息！');
        }
      });
    } else {
      console.log("请先登录")
    };




    $.ajax({
      url: 'data/f_detail_list.php',
      data: {uid: sessionStorage['LoginUid']},
      success: function (data) {
        var html = '';
        $.each(data, function (i, p) {
          html += `
     <li>
          <div>
            <div class="car_detail_pic">
              <img src="img/${p.pic}"/>
            </div>

            <div class="car_detail_content">
              <p>${p.pname}</p>

              <p>${p.price}</p>

              <div>
                <button name="${p.did}">-</button>
                <input type="text" value="${p.count}"/>
                <button name="${p.did}">+</button>
                <a href="${p.did}">删除</a>
              </div>
            </div>
          </div>
        </li>
      `;
        });
        $('#car_detail').html(html);
        html = ' ';

        num = 0;
        count = 0;
        $.each(data, function (i, p) {

          num += parseInt(data[i].count);

          count += (data[i].count) * parseFloat(data[i].price).toFixed(2);
        });
        count = parseFloat(count).toFixed(2);
        html += `
     <div>
          <span>共 <span>${num}</span> 件商品</span>

          <span>商品小计</span>
          <span>${count}</span>
        </div>
        <a href="jiesuan.html"  class="btn btn-success">立即结算</a>
      `;
        $('.shopping_car > p').html(num);
        $('.car_count').html(html);
      },
      error: function () {
        console.log('购物车数据加载失败！请检查响应消息！');
      }
    })


  });

});



/**功能点5：商品添加至购物车后,异步请求小购物车详情 **/
function count(){
  $.ajax({
    url: 'data/f_detail_list.php',
    data: {uid: sessionStorage['LoginUid']},
    success: function (data) {
      var html = '';
      $.each(data, function (i, p) {
        //console.log(p)
        html += `
     <li>
          <div>
            <div class="car_detail_pic">
              <img src="img/${p.pic}"/>
            </div>

            <div class="car_detail_content">
              <p>${p.pname}</p>

              <p>${p.price}</p>

              <div>
                <button name="${p.did}">-</button>
                <input type="text" value="${p.count}"/>
                <button name="${p.did}">+</button>
                <a href="${p.did}">删除</a>
              </div>
            </div>
          </div>
        </li>
      `;
      });
      $('#car_detail').html(html);
      html = ' ';

      num = 0;
      count = 0;
      $.each(data, function (i, p) {

        num += parseInt(data[i].count);

        count += (data[i].count) * parseFloat(data[i].price).toFixed(2);
      });
      count = parseFloat(count).toFixed(2);
      html += `
     <div>
          <span>共 <span>${num}</span> 件商品</span>

          <span>商品小计</span>
          <span>${count}</span>
        </div>
        <a href="jiesuan.html" class="btn btn-success">立即结算</a>
      `;
      $('.shopping_car > p').html(num);
      $('.car_count').html(html);
    },
    error: function () {
      console.log('购物车数据加载失败！请检查响应消息！');
    }
  })
};

/**功能点6：header购物车显示切换 **/
$("#header_white > div.shopping_car > a > img").click(function () {

  if ($(".shopping_car a>img").attr("src") == "img/car_count.png") {
    $(".shopping_car a> img").attr("src", "img/car_count02.png")
    $(".car_detail").css("display", "block")
  } else {
    $(".shopping_car a>img").attr("src", "img/car_count.png")
    $(".car_detail").css("display", "none")
  }
});




/**功能点7：为“删除”按钮绑定事件监听，实现购买详情的删除**/
$('#car_detail').on('click', 'a:contains("删除")', function (e) {
  e.preventDefault();
  var did = $(this).attr('href');
  var that = this;  //使用临时变量指向当前被点击的A
  $.ajax({
    type: 'POST',
    url: 'data/f_detail_delete.php',
    data: {'did': did},
    success: function (data) {
      if (data.code < 0) {
        console.log('响应成功但删除失败！原因：' + data.msg);
      } else {
        console.log('购买记录删除成功！');
        //console.log(this); //$.ajax中的this指向请求对象
        $(that).parent().parent().parent().parent().remove();
      }
    },
    error: function () {
      console.log('购买记录删除失败！请检查响应消息！');
    }
  });



  $.ajax({
    url: 'data/f_detail_list.php',
    data: {uid: sessionStorage['LoginUid']},
    success: function (data) {
      var html = '';
      $.each(data, function (i, p) {
        //console.log(p)
        html += `
     <li>
          <div>
            <div class="car_detail_pic">
              <img src="img/${p.pic}"/>
            </div>

            <div class="car_detail_content">
              <p>${p.pname}</p>

              <p>${p.price}</p>

              <div>
                <button>-</button>
                <input type="text" value="${p.count}"/>
                <button>+</button>
                <a href="${p.did}">删除</a>
              </div>
            </div>
          </div>
        </li>
      `;
      });
      $('#car_detail').html(html);
      html = ' ';

      num = 0;
      count = 0;
      $.each(data, function (i, p) {

        num += parseInt(data[i].count);

        count += (data[i].count) * parseFloat(data[i].price).toFixed(2);
      });
      count = parseFloat(count).toFixed(2);
      html += `
     <div>
          <span>共 <span>${num}</span> 件商品</span>

          <span>商品小计</span>
          <span>${count}</span>
        </div>
        <a href="jiesuan.html"  class="btn btn-success">立即结算</a>
      `;
      $('.shopping_car > p').html(num);
      $('.car_count').html(html);
    },
    error: function () {
      console.log('购物车数据加载失败！请检查响应消息！');
    }
  })

});

count();