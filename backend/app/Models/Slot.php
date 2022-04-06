<?php
 
 class Slot extends DB
 {
  private $table = "slots";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }
   public function getAllSlots()
   {
     $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'`');
     $tmp->execute();
     return $tmp->fetchAll();
   }
    public function getRow($id)
    {
      $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'` WHERE id='.$id);
      $tmp->execute();
      return $tmp->fetch();
    }
    public function countSlotRow($date)
    {
      // echo $date;
      $tmp=$this->conn->prepare('SELECT COUNT(*) FROM `'.$this->table.'` WHERE slot_date = :date');
      $tmp->bindParam(':date',$date);
      $tmp->execute();
      return $tmp->fetch();
    }
    public function getSchedule($date)
    {
      $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'` WHERE slot_date = :date');
      $tmp->bindParam(':date',$date);
      $tmp->execute();
      return $tmp->fetchAll();
    }
    public function insertSlot($data){
      $tmp=$this->conn->prepare('INSERT INTO `'.$this->table.'` (slot_time,slot_date,slot_status) VALUES(:slot_time,:slot_date,:slot_status)');
      $tmp->bindParam(':slot_time',$data['slot_time']);
      $tmp->bindParam(':slot_date',$data['slot_date']);
      $tmp->bindParam(':slot_status',$data['slot_status']);
      return $tmp->execute();
    }

    public function isAvailable($data){
      $tmp=$this->conn->prepare('SELECT * FROM `'.$this->table.'` WHERE slot_time = :slot_time AND slot_date = :slot_date');
      $tmp->bindParam(':slot_time',$data['slot_time']);
      $tmp->bindParam(':slot_date',$data['slot_date']);
      $tmp->execute();
      return $tmp->fetch(); 
    }
    public function bookAppointment($id){
      $tmp=$this->conn->prepare('UPDATE `'.$this->table.'` SET slot_status = 1 WHERE id = :id');
      $tmp->bindParam(':id',$id);
      return $tmp->execute();
    }
    
    public function cancelBook($id){
      $tmp=$this->conn->prepare('UPDATE `'.$this->table.'` SET slot_status = 0 WHERE id = :id');
      $tmp->bindParam(':id',$id);
      return $tmp->execute();
    }


 }
