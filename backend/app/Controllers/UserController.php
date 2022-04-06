<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers:*');
header('Content-Type: application/json');


class UserController 
{
  public function register()
  {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $age = $_POST['age'];
    $birthday = $_POST['birthday'];
    $getLastUserInsert = new User();
    $getLastUserInsert->getLastUser();
    $lastUserId = $getLastUserInsert->getLastUser();
    if($lastUserId[0]===null){
      $lastUserId[0]=0;
    }
    $lastUserId[0]++;
    $code=$firstName.$lastUserId[0] . $age;
    echo $code;
    // echo $lastUserId;
    $referenceUser = bin2hex($code); 
    
    $data = array('firstName'=>$firstName,'lastName'=>$lastName,'age'=>$age,'birthday'=>$birthday,'reference'=>$referenceUser,'id'=>$lastUserId[0]);
    $user = new User();
    if($user->insertUser($data)){
      // echo "User inserted"; 
      // echo $lastUserId;


  }else{
    // echo "User not inserted";
  }
  }
  

 
  
}