$("#picker1").picker({
  title: "请选择您的性别",
  cols: [
    {
      textAlign: "center",
      values: ["男", "女"]
    }
  ]
});

$("#input-calendar1").calendar()
$("#input-calendar2").calendar()

$("#picker2").picker({
  title: "请选择是否已婚",
  cols: [
    {
      textAlign: "center",
      values: ["是", "否"]
    }
  ]
});

$("#picker3").picker({
  title: "请选择您的预计到岗时间",
  cols: [
    {
      textAlign: "center",
      values: ["随时", "一周内","半个月内","一个月内","待定"]
    }
  ]
});

$("#my-textarea").on('keyup',function (e) {
  $("#count")[0].innerText=e.target.value.length
})