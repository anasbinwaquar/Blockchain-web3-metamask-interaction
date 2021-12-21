// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract RegisterationContract{
    uint256 doctor_count = 0;
    uint256 patient_count=0;
    uint256 appointment_count=0;
    mapping(uint => Doctor) public Doctors;
    mapping(uint => Patient) public Patient_list;
    mapping(uint => _Appointment) public Appointments;

    struct Doctor {
        uint doc_id;
        string _firstName;
        string _lastName;
        string Contact_number;
        string Emergency_number;
        string _address;
        string email;
        string dob;
        string martial_status;
        string sex;
        string qualification;
        address AccountAddress;
    }
    struct Patient{
        uint _id;
        string _firstName;
        string _lastName;
        string Contact_number;
        string Emergency_number;
        string _address;
        string email;
        string dob;
        string martial_status;
        string sex;
        address AccountAddress;
    }

    struct _Appointment{
        uint _id;
        string Doctor_name;
        string Patient_name;
        string doc_email;
        string patient_email;
        string Appointment_time;
        string Appointment_reason;
    }
    
    function Add_Doctor(string memory qualification,string memory dob,string memory sex,string memory martial_status,string memory _firstName, string memory _lastName,string memory emergency_num,string memory contact_num, string memory _Address,string memory email)  
    public {
    // address senderAddress=msg.sender;
    doctor_count+=1;
    Doctors[doctor_count]=Doctor(doctor_count,_firstName,_lastName, contact_num,emergency_num,_Address,email,dob,martial_status,sex,qualification,msg.sender);
    }

     function hello() public pure returns (string memory){
        return "Test";
    }
    function Get_appointment(string memory doc_name,string memory patient_name,string memory Appoint_time,string memory reason,string memory doc_email,string memory patient_email) 
    public{
        appointment_count+=1;
        Appointments[appointment_count]=_Appointment(appointment_count,doc_name,patient_name,doc_email,patient_email,Appoint_time,reason);
    }

    function Register_patient(string memory dob,string memory sex,string memory martial_status,string memory _firstName, string memory _lastName,string memory emergency_num,string memory contact_num, string memory _Address,string memory email) public{
        patient_count+=1;
        Patient_list[patient_count]=Patient(patient_count,_firstName,_lastName,contact_num,emergency_num,_Address,email,dob,martial_status,sex,msg.sender);
    }
    function GetDoctor(uint id) public returns(string[4] memory)
    {
        Doctor memory p=Doctors[id];
        // string memory arr=[memory p._firstName,p._lastName,p.qualification,p.Contact_number];
        return (arr);
    }
    function getAll_Doctors() public view returns (Doctor[] memory){
        Doctor[] memory ret = new Doctor[](doctor_count);
        for (uint i = 0; i < doctor_count; i++) {
            ret[i] = Doctors[i];
        }
        return ret;
    }   
    
    function getAll_Patients() public view returns (Patient[] memory){
        Patient[] memory ret = new Patient[](patient_count);
        for (uint i = 0; i < patient_count; i++) {
            ret[i] = Patient_list[i];
        }
        return ret;
    }    
    function getAll_Appointments() public view returns (_Appointment[] memory){
        _Appointment[] memory ret = new _Appointment[](appointment_count);
        for (uint i = 0; i < appointment_count; i++) {
            ret[i] = Appointments[i];
            }
        return ret;
    }    
}