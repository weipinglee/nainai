
<?php
/**
 * DouPHP
 * --------------------------------------------------------------------------------------------------
 * 版权所有 2013-2015 漳州豆壳网络科技有限公司，并保留所有权利。
 * 网站地址: http://www.douco.com
 * --------------------------------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在遵守授权协议前提下对程序代码进行修改和使用；不允许对程序代码以任何形式任何目的的再发布。
 * 授权协议：http://www.douco.com/license.html
 * --------------------------------------------------------------------------------------------------
 * Author: DouCo
 * Release Date: 2015-10-16
 */
define('IN_DOUCO', true);

require (dirname(__FILE__) . '/include/init.php');

// rec操作项的初始化
//$rec = $check->is_rec($_REQUEST['rec']) ? $_REQUEST['rec'] : 'default';

//简历上传
//include_once (ROOT_PATH . 'include/upload.class.php');
require (dirname(__FILE__) . '/include/upload.class.php');
//echo 111;exit;
if(!empty($_FILES) && $_FILES['fil']['error'] == 0) {
	$des = createDir().'/'.randStr().getExt($_FILES['fil']['name']);
	/*if(move_uploaded_file($_FILES['fil']['tmp_name'], ROOT.$des)) {
		$表名 ['fil'] = $des;
	}*/
	//echo move_uploaded_file($_FILES['fil']['tmp_name'], ROOT.$des);
	echo move_uploaded_file($_FILES['fil']['tmp_name']) ? "ok" : 'fail';
}
//$smarty->display('jianli.dwt');

?>