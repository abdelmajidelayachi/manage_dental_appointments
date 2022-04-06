<?php

class HomeController
{
    // public function index()
    // {


    // }
    public function book(){
        $date = $_POST['date'];
        $timeBook = $_POST['time'];
        $reference = $_POST['reference'];
        $subject = $_POST['subject'];
        
        $data=array('slot_time'=>$timeBook,'slot_date'=>$date);
        $slot = new Slot();
        $isAvailable = $slot->isAvailable($data);
        $reference = bin2hex($reference);
        

        // var_dump($isAvailable);
        // echo $isAvailable['id'];
      
        
        if($isAvailable[0]>0){
            if($isAvailable['slot_status']===0){ 
            $slot->bookAppointment($isAvailable[0]);
            $data = array('slot_id'=>$isAvailable['id'],'user_reference'=>$reference,'subject'=>$subject);
            var_dump($data);
            $appointment = new Appointment();
            $appointment->insertAppointment($data);
          
            }else{
                echo 'booked';
            }

        }else{
            echo 'notAvailable';
        }


    }

    // private function createSlots($date)
    // {
        
       
    // }

  

}
