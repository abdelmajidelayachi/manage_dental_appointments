<?php

class User extends DB
{
  private $table = "users";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }
    public function getAllUsers()
    {
      $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'`');
      $tmp->execute();
      return $tmp->fetchAll();
    }
      public function getRow($reference)
      {
        $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'` WHERE reference=:reference');
        $tmp->bindParam(':reference',$reference);
        $tmp->execute();
        return $tmp->fetch();
      }
      
      public function insertUser($data){
      $tmp=$this->conn->prepare('INSERT INTO `'.$this->table.'` (firstName,lastName,age,birthday,reference,id) VALUES(:firstName,:lastName,:age,:birthday,:reference,:id)');
      $tmp->bindParam(':firstName',$data['firstName']);
      $tmp->bindParam(':lastName',$data['lastName']);
      $tmp->bindParam(':age',$data['age']);
      $tmp->bindParam(':birthday',$data['birthday']);
      $tmp->bindParam(':reference',$data['reference']);
      $tmp->bindParam(':id',$data['id']);
      return $tmp->execute();
      }

      public function getLastUser(){
        $tmp = $this->conn->prepare('SELECT MAX(id) FROM `'.$this->table.'`');
        $tmp->execute();
        return $tmp->fetch();
      }


    }



?>