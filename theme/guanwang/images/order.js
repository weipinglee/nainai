// JavaScript Document
$(function(){
  $('#sub').on('click',function(){
    var formObj = $('#dingdanqueren');

    var formParent = $('#order_box', window.parent.document);
    formParent.html('');
    formParent.append(formObj);
    formParent.submit();
  })
})

