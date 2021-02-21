var msg;
var name;
var src;
setTimeout(function () {
  $(".loading").fadeOut(300);
}, 2000);

$(function () {
  $(".info").click(function () {
    var pro = src;
    pro = pro.slice(42).split("").reverse().slice(4).reverse().join("");
    $("a").attr(
      "href",
      "https://www.sololearn.com/Profile/" + pro + "/?ref=app"
    );
    $("a")[0].click();
  });

  $(".cal")
    .children(".msg")
    .children(".phone, .video")
    .click(function () {
      name = $(this).prev(".name").text();
      src = $(this).parent(".msg").prev(".img").attr("src");
    });

  $(".search").click(function () {
    $(".searchcon").fadeIn(100);
    $(".searchcon").children().children("input").trigger("select");
    $(".T").hide(100);
  });
  $(".phone").click(function () {
    $(".callimg").css("background", "url(" + src + ")");
    $(".callname").text(name);
    $(".calling").show();
    $("audio")[0].play();
  });
  $(".video").click(function () {
    $(".videoimg").attr("src", src);
    $(".videoname").text(name);
    $(".vcalling").show();
    $("audio")[0].play();
  });

  $(".searchcon")
    .children(".as")
    .children(".arrow-left")
    .click(function () {
      $(".T").fadeIn(100);
    });
  $(".ellipsis-v").click(function () {
    $(".chatback").show();
  });
  $(".chaticon")
    .children()
    .click(function () {
      $(".chatback").hide();
      alert("this function will be available soon");
    });
  $(".chatback")
    .not(".chaticon")
    .click(function () {
      $(".chatback").hide();
    });
  $(".T")
    .children()
    .not(".camera")
    .click(function () {
      $(this).addClass("select");
      $(".T").children().not(this).removeClass("select");
    });

  $("#chat").click(function () {
    $(".chat").show();
    $(".status, .call").hide();
    $(".chaticon").html(
      " <span>New group</span><br>     <span>New broadcast</span><br>       <span>WhatsApp Web</span> <br>       <span>Starred messages</span><br>       <span>Payments</span><br>       <span>Setting</span>"
    );
    $(".sbox").show();
  });

  $(".T")
    .children(".camera")
    .click(function () {
      $(".oncam").show();
    });

  $("#call").click(function () {
    $(".call").show();
    $(".chat, .status").hide();
    $(".chaticon").html(
      " <span>Clear call logs</span><br><span>setting</span>"
    );
    $(".sbox").hide();
  });

  $("#status").click(function () {
    $(".status").show();
    $(".call, .chat").hide();
    $(".chaticon").html(
      " <span>Status privacy</span><br>     <span>setting</span>"
    );
    $(".sbox").hide();
  });

  $(".ichat").click(function () {
    $(".topimg").attr("src", src);
    $(".chatname").text(name);
    $(".rechat").text(msg);
    $(".chatting").show();
  });
  $(".cha")
    .children(".msg")
    .click(function () {
      src = $(this).prev().attr("src");
      name = $(this).children(".name").text();
      msg = $(this).children(".mg").text();
      //  $("body").children().hide();
      $(".topimg").attr("src", src);
      $(".chatname").text(name);
      $(".rechat").text(msg);
      $(".chatting").show();
    });
  $(".arrow-left, .call-end").click(function () {
    $(this).parent().parent().hide();
    $("audio")[0].pause();
    //  $(".chatting, .chaticon").hide();
    // $(".main").show();
    $(".re").remove();
  });

  $(".microphone").click(function () {
    var d = new Date();
    var h = d.getHours();
    var t = d.getMinutes();
    10 > h ? (h = "0" + h) : (h = h);
    10 > t ? (t = "0" + t) : (t = t);
    time = h + ":" + t;

    var txt = $(".input").val();
    $(".input").val("");
    if (txt != "") {
      $(".chatting").append(
        "  <div class='re' id='schat'><span class='sechat'>" +
          txt +
          "</span> <span class='stime'>" +
          time +
          "<i class='material-icons tick'style='color:#aaa;'>done_all</i></span></div> "
      );
      setTimeout(function () {
        $(".tick").css("color", "#4fc3f7");
        $(".online").text("typing");
        setTimeout(function () {
          $(".chatting").append(
            "<div class='re' id='rchat'><span class='rechat'>Lorem ipsum dolar sit amet.</span> <span class='rtime'>" +
              time +
              "</span></div>"
          );
          $(".chatting").scrollTop($(".chatting")[0].scrollHeight);
          $(".online").html(
            "<i class='material-icons dot'>fiber_manual_record</i>Online"
          );
        }, 2000);
      }, 1000);
    }
  });

  $(".cha, .cal")
    .children(".img")
    .click(function () {
      msg = $(this).next(".msg").children(".mg").text();
      src = $(this).attr("src");
      name = $(this).next(".msg").children(".name").text();
      $(".imgs").css("background-image", "url(" + src + ")");
      $(".imgname").text(name);
      $(".imgshow").show();
    });
  $(".imgshow")
    .not(".imgs")
    .click(function () {
      $(".imgshow").hide();
    });

  $(".sta")
    .not(".sta:first")
    .click(function () {
      var time = $(this).children(".smsg").children(".times").text();
      $(".statustime").text(time);
      src = $(this).children(".simg").attr("src");
      name = $(this).children(".smsg").children(".name").text();
      $(".statusname").text(name);
      $(this).children(".simg").css("border-color", "#aaa");
      $(".statusimg, .statusimg1").attr("src", src);
      $(".statusshow").show();
      $(".down").after(this);

      if ($(".up").next().attr("class") == "down") {
        $(".up").hide();
      }
      setTimeout(function () {
        $(".chaticon").html(
          " <span>Status privacy</span><br>     <span>setting</span>"
        );
        $(".statusshow").hide();
      }, 4000);
      $(".chaticon").html(" <span>Mute</span>");
    });
});