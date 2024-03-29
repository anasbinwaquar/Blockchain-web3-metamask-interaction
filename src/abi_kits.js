var abi= [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "MedicalKits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Nurse_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nurse_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "time_taken",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "photo_hash",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Nurses",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nurse_id",
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
      "name": "Add_Nurse",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "photohash",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "Nurse_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "time_taken",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nurse_email",
          "type": "string"
        }
      ],
      "name": "Get_MedicalKit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAll_MedicalKits",
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
              "name": "Nurse_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nurse_email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "time_taken",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "photo_hash",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Kit.MedicalKit[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]