<?php

header('Content-Type: application/json');

@$n = $_REQUEST['phone'] or die('{"code":-2, "msg":"用户名不能为空"}');
@$p = $_REQUEST['pwd'] or die('{"code":-3, "msg":"密码不能为空"}');

require('1_init.php');

$sql = "SELECT uid FROM f_user WHERE phone='$n' AND pwd='$p'";
$result = mysqli_query($conn,$sql);

//此处省略了$result为false(SQL语法错误)的检验

$row = mysqli_fetch_row($result);
if($row===null){	//查询结果集中没有记录
	echo '{"code":-1,"msg":"用户名或密码错误"}';
}else {  //查询结果集中有记录
	$uid = $row[0];
	$output = [
		'code'=>1,
		'msg'=>'登录成功',
		'phone'=>$n,
		'uid'=>$uid
	];
	echo json_encode($output);
}