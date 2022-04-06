<?php

class Appointment extends DB
{
  private $table = "appointments";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }
   public function getAllAppointments()
   {
     $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'`');
     $tmp->execute();
     return $tmp->fetchAll();
   }
    public function getRow($id)
    {
      $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'` WHERE id_app='.$id);
      $tmp->execute();
      return $tmp->fetch();
    }
    public function insertAppointment($data){
    $tmp=$this->conn->prepare('INSERT INTO `'.$this->table.'` (user_reference,slot_id,subject) VALUES(:user_reference,:slot_id,:subject)');
  
    $tmp->bindParam(':user_reference',$data['user_reference']);
    $tmp->bindParam(':slot_id',$data['slot_id']);
    $tmp->bindParam(':subject',$data['subject']);
    return $tmp->execute();
    }
    public function getAppointment($reference){
   
      $tmp = $this->conn->prepare("SELECT * FROM `".$this->table."` INNER JOIN `users` ON `".$this->table."`.user_reference = users.reference INNER JOIN `slots` ON `".$this->table."`.slot_id = `slots`.id WHERE `".$this->table."`.user_reference = :user_reference");
      $tmp->bindParam(':user_reference',$reference);
      $tmp->execute();
      return $tmp->fetchAll();
    }

    public function getOneAppointment($id){
   
      $tmp = $this->conn->prepare("SELECT * FROM `".$this->table."` INNER JOIN `users` ON `".$this->table."`.user_reference = users.reference INNER JOIN `slots` ON `".$this->table."`.slot_id = `slots`.id WHERE `".$this->table."`.id_app = :id_app");
      $tmp->bindParam(':id_app',$id);
      $tmp->execute();
      return $tmp->fetchAll();
    }

    public function deleteAppointment($id){
      $tmp=$this->conn->prepare('DELETE FROM `'.$this->table.'` WHERE id_app='.$id);
      return $tmp->execute();
    }

  }
  
  
  ?>
