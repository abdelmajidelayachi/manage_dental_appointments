<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers:*');
header('Content-Type: application/json');

class AppointmentController
{
   
  public function getAllSlots()
  {

    $date = $_POST['date'];
    $this->createTable($date);
    $slot = new Slot();
    $slot->getSchedule($date);
    $json = json_encode($slot->getSchedule($date));
    echo $json;

  }
  private function createTable($date)
  {
    
      $slot = new Slot();
      $rowNum = $slot->countSlotRow($date);
      // var_dump($rowNum);
      if ($rowNum[0]<=0) {
          $time = "09:00:00";
          for($i=0; $i<16; $i++){
              if($time < "12: :00" && $time >= "09:00:00"){
                  $data = array('slot_time'=>$time,'slot_date'=>$date,'slot_status'=>'0');
                  $slot->insertSlot($data);
                  $time = date('H:i:s', strtotime($time . ' + 30 minutes'));
                  
              }elseif($time < "18:00:00" && $time >= "14:00:00"){
                  $data = array('slot_time'=>$time,'slot_date'=>$date,'slot_status'=>'0');
                  $slot->insertSlot($data);
                  $time = date('H:i:s', strtotime($time . ' + 30 minutes'));

              }elseif($time<"14:00:00"&& $time>="12:00:00"){
                 $time ="14:00:00";

              }
              
              // echo 'inserting';
          }
         
      }else{
          // echo 'Available';
      }

     
      // var_dump($isAvailable);


      // echo 'done';
  }
  public function view()
  {
      $reference = $_POST['reference'];
      $reference = bin2hex($reference);
      $appointment = new Appointment();
      $app = $appointment->getAppointment($reference);
      $json = json_encode($app);
      echo $json;

  }

  public function delete($id)
  {
      
      $appointment = new Appointment();
      $app = $appointment->getRow($id);
      $slot_id = $app['slot_id'];
      $appointment->deleteAppointment($id);
      var_dump($app) ;
      $slot= new Slot();
      $slot->cancelBook($slot_id);

      echo 'deleted';
  }

  public function getAppointment($id)
  {
    // echo $id;
      $appointment = new Appointment();
      $app = $appointment->getOneAppointment($id);
      $json = json_encode($app);
      echo $json;
  }

  public function update()
  {
    $date = $_POST['date'];
    // echo $date;
    $timeBook = $_POST['time'];
    // echo $timeBook;
    $reference = $_POST['reference'];
    // echo $reference;

    $subject = $_POST['subject'];
    $idUpdated = $_POST['id'];


    // echo $subject;
    // exit();
    
    $data=array('slot_time'=>$timeBook,'slot_date'=>$date);

    
    $slot = new Slot();
    $isAvailable = $slot->isAvailable($data);
    // $reference = bin2hex($reference);
    

    // var_dump($isAvailable);
    // echo $isAvailable['id'];
    // echo '<br>';
  
    
    if($isAvailable[0]>0){
        if($isAvailable['slot_status']===0){ 
        $slot->bookAppointment($isAvailable[0]);
        $data = array('slot_id'=>$isAvailable['id'],'user_reference'=>$reference,'subject'=>$subject);
        // var_dump($data);
        $appointment = new Appointment();
        $slotId= $appointment->getRow($idUpdated);
        $slotId = $slotId['slot_id'];
        // echo $slotId;
        $slot->cancelBook($slotId);
        $appointment->updateAppointment($data,$idUpdated);

      
        }else{
            echo 'booked';
        }

    }else{
        echo 'notAvailable';
    }
  }
 

}
?>