<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/3 0003
 * Time: ���� 5:28
 */

class payment {

    /**
     *����һ��ʵ��
     */
    static public function requirePayMethod($payment_name,$param){
        //$param = $param;
        require $payment_name.'.php';
    }
}