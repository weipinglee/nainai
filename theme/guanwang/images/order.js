// JavaScript Document
//��ʼ����������
var area_url = 'get_area.php';
template.compile("areaTemplate",areaTemplate);
createAreaSelect('province',0,'',area_url);
$(function(){
  //��ʼ������


  //��������д�븸����form�������ύ
  $('#sub').on('click',function(){
    var formObj = $('#dingdanqueren');

    var formParent = $('#order_box', window.parent.document);
    formParent.html('');
    formParent.append(formObj);
    formParent.submit();
  })

  //��Ʊ��Ϣ�л�
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
  /*���÷������£�*/
  $.jqtab("#tabs","#tab_conbox","click");

  $.jqtab("#tabs2","#tab_conbox2","mouseenter");
})

