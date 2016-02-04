// JavaScript Document
//初始化地域联动
var area_url = 'get_area.php';
template.compile("areaTemplate",areaTemplate);
createAreaSelect('province',0,'',area_url);
$(function(){
  //初始化地区


  //将表单内容写入父窗口form，进行提交
  $('#sub').on('click',function(){
    var formObj = $('#dingdanqueren');

    var formParent = $('#order_box', window.parent.document);
    formParent.html('');
    formParent.append(formObj);
    formParent.submit();
  })

  //发票信息切换
  jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
    $(tab_conbox).find("li").hide();
    $(tabtit).find("li:first").addClass("thistab").show();
    $(tab_conbox).find("li:first").show();

    $(tabtit).find("li").bind(shijian,function(){
      $(this).addClass("thistab").siblings("li").removeClass("thistab");
      var activeindex = $(tabtit).find("li").index(this);
      $(tab_conbox).children().eq(activeindex).show().siblings().hide();
      return false;
    });

  };
  /*调用方法如下：*/
  $.jqtab("#tabs","#tab_conbox","click");

  $.jqtab("#tabs2","#tab_conbox2","mouseenter");
})

