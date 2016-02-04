<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/3 0003
 * Time: обнГ 5:34
 */
require_once(dirname(dirname(__FILE__)) ."/wap_pay/alipay.config.php");
require_once(dirname(dirname(__FILE__)) ."/wap_pay/lib/alipay_submit.class.php");

$params = array(
    "service" => "alipay.wap.create.direct.pay.by.user",
		"partner" => trim($alipay_config['partner']),
		"seller_id" => trim($alipay_config['seller_id']),
    "_input_charset"	=> trim(strtolower($alipay_config['input_charset']))
);
$params = array_merge($params,$param);


$alipaySubmit = new AlipaySubmit($alipay_config);
$html_text = $alipaySubmit->buildRequestForm($params,"get", "х╥хо");
echo $html_text;