var abi= [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Appointments",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Doctor_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Patient_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "doc_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patient_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Appointment_time",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Appointment_reason",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Doctors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "doc_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Contact_number",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Emergency_number",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "martial_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sex",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "qualification",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "AccountAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Patient_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Contact_number",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Emergency_number",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "martial_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sex",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "AccountAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "qualification",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sex",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "martial_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "emergency_num",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contact_num",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "Add_Doctor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "doc_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patient_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Appoint_time",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "reason",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "doc_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patient_email",
        "type": "string"
      }
    ],
    "name": "Get_appointment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sex",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "martial_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "emergency_num",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contact_num",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "Register_patient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "GetDoctor",
    "outputs": [
      {
        "internalType": "string",
        "name": "fname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "lname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "qual",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contact",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAll_Doctors",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "doc_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Contact_number",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Emergency_number",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_address",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "martial_status",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sex",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "qualification",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "AccountAddress",
            "type": "address"
          }
        ],
        "internalType": "struct RegisterationContract.Doctor[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAll_Patients",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_lastName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Contact_number",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Emergency_number",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_address",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "martial_status",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sex",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "AccountAddress",
            "type": "address"
          }
        ],
        "internalType": "struct RegisterationContract.Patient[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAll_Appointments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "Doctor_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Patient_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "doc_email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "patient_email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Appointment_time",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Appointment_reason",
            "type": "string"
          }
        ],
        "internalType": "struct RegisterationContract._Appointment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]