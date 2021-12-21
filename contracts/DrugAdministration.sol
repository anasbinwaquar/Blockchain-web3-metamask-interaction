// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract DrugAdministration{
    uint256 nurse_count = 0;
    uint256 Nurse_confirmed_appointment_count = 0;
    uint256 Patient_confirmed_appointment_count = 0;
    uint256 vital_check_count = 0;
    mapping(uint => _Nurse_confirmed_Appointment) public Nurse_confirmed_Appointment;
    mapping(uint => _Patient_confirmed_Appointment) public Patient_confirmed_Appointment;
    mapping(uint => _vital_check) public vital_check;

    struct _Nurse_confirmed_Appointment{
        uint _id;
        string Nurse_name;
        string Nurse_email;
        string Patient_name;
        string Patient_email;
        string Appointment_time;
        string Appointment_reason;
    }
    struct _Patient_confirmed_Appointment{
        uint _id;
        string Nurse_name;
        string Nurse_email;
        string Patient_name;
        string Patient_email;
        string Appointment_time;
        string Appointment_reason;
    }
        struct _vital_check{
        uint _id;
        uint _Blood_pressure;
        uint _temprature;
        uint _oxygen_satutation;
        uint _heart_rate;
    }

    function Nurse_appointment_confirmation(string memory Nurse_name,string memory Patient_name,string memory Nurse_email,string memory Patient_email,string memory Appoint_time,string memory reason)
    public{
        Nurse_confirmed_appointment_count+=1;
        Nurse_confirmed_Appointment[Nurse_confirmed_appointment_count]=_Nurse_confirmed_Appointment(Nurse_confirmed_appointment_count,Nurse_name,Patient_name,Nurse_email,Patient_email,Appoint_time,reason);
    }

    function Patient_appointment_confirmation(string memory Nurse_name,string memory Patient_name,string memory Nurse_email,string memory Patient_email,string memory Appoint_time,string memory reason)
    public{
        Patient_confirmed_appointment_count+=1;
        Patient_confirmed_Appointment[Patient_confirmed_appointment_count]=_Patient_confirmed_Appointment(Patient_confirmed_appointment_count,Nurse_name,Patient_name,Nurse_email,Patient_email,Appoint_time,reason);
    }
    
    // function Doc_call_initiate(string memory Docton_name,string memory Patient_name,string memory Doctor_email,string memory Patient_emai,string memory timestamp)
    // public{
    //     call_initiated +=1;
    //     call_start_time=timestamp;
    // }

    function Patient_vital_checkup_by_nurse(uint Patient_id,uint bp,uint temp,uint oxy_sat,uint hr)
    public{
        vital_check_count+=1;
        vital_check[vital_check_count]=_vital_check(Patient_id,bp,temp,oxy_sat,hr);
    }

    function AdministerMeds()
    public{
    
    }
}