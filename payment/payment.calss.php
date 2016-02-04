<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/3 0003
 * Time: 下午 5:28
 */

class payment {

    /**
     *产生一个实例
     */
    static public function requirePayMethod($payment_name,$param){
        //$param = $param;
        require $payment_name.'.php';
    }
}