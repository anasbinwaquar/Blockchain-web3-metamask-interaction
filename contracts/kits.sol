pragma solidity ^0.8.4;

contract kits{
    uint256 nurse_count = 0;
    uint256 kit_count = 10;
    mapping(uint => Nurse) public Nurses;
    mapping(uint => MedicalKit) public MedicalKits;

    struct Nurse {
        uint nurse_id;
        string _firstName;
        string _lastName;
        string Contact_number;
        string Emergency_number;
        string _address;
        string email;
        string dob;
        string martial_status;
        string sex;
    }

    struct MedicalKit{
        uint _id;
        string Nurse_name;
        string nurse_email;
        string time_taken;
        string reason;
    }

    function Add_Nurse(string memory dob, string memory sex, string memory martial_status, string memory _firstName, string memory _lastName, string memory emergency_num, string memory contact_num, string memory _Address, string memory email)  public {
        nurse_count += 1;
        Nurses[nurse_count]=Nurse(nurse_count, _firstName, _lastName, contact_num, emergency_num, _Address, email, dob, martial_status, sex);
    }

    function Get_MedicalKit(string memory Nurse_name, string memory time_taken, string memory reason, string memory nurse_email) public{
        if( kit_count > 0 ) {
            kit_count -= 1;
        }
        MedicalKits[kit_count] = MedicalKit(kit_count, Nurse_name, nurse_email, time_taken, reason);
    }

    function getAll_Appointments() public view returns (MedicalKit[] memory){
        MedicalKit[] memory ret = new MedicalKit[](kit_count);
        for (uint i = 0; i < kit_count; i++) {
            ret[i] = MedicalKits[i];
        }
        return ret;
    }    
}
