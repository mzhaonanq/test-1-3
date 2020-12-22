$("#picker1").picker({
  title: "请选择您的性别",
  cols: [
    {
      textAlign: "center",
      values: ["男", "女"]
    }
  ],
  onClose: function() {
    $('.backdrop').css('display', 'none');
  }
});

$("#input-calendar1").calendar(
  {
    onClose: function() {
      $('.backdrop').css('display', 'none');
    }
  }
)
$("#input-calendar2").calendar(
  {
    onClose: function() {
      $('.backdrop').css('display', 'none');
    }
  }
)

$("#picker2").picker({
  title: "请选择是否已婚",
  cols: [
    {
      textAlign: "center",
      values: ["是", "否"]
    }
  ],
  onClose: function() {
    $('.backdrop').css('display', 'none');
  }
});

$("#picker3").picker({
  title: "请选择您的预计到岗时间",
  cols: [
    {
      textAlign: "center",
      values: ["随时", "一周内","半个月内","一个月内","待定"]
    }
  ],
  onClose: function() {
    $('.backdrop').css('display', 'none');
  }
});

$("#my-textarea").on('keyup',function (e) {
  $("#count")[0].innerText=e.target.value.length
})

$('#input-calendar1,#input-calendar2,#picker1,#picker2,#picker3').click(function() {
  $('input, textarea').blur();
  $('.backdrop').css('display', 'block');
});

$('.backdrop').on('touchmove', function(event) {
  event.preventDefault();
});
