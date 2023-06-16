/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AvoDepositManager,
  AvoDepositManagerInterface,
} from "../AvoDepositManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "depositToken_",
        type: "address",
      },
      {
        internalType: "contract IAvoFactory",
        name: "avoFactory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AvoDepositManager__FeeNotCovered",
    type: "error",
  },
  {
    inputs: [],
    name: "AvoDepositManager__InvalidParams",
    type: "error",
  },
  {
    inputs: [],
    name: "AvoDepositManager__MinWithdraw",
    type: "error",
  },
  {
    inputs: [],
    name: "AvoDepositManager__RequestAlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AvoDepositManager__RequestNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AvoDepositManager__Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "avoSafe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "auth",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "SetAuth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "minWithdrawAmount",
        type: "uint96",
      },
    ],
    name: "SetMinWithdrawAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "SetWithdrawAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "withdrawFee",
        type: "uint96",
      },
    ],
    name: "SetWithdrawFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "withdrawLimit",
        type: "uint96",
      },
    ],
    name: "SetWithdrawLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SourceWithdrawRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "WithdrawProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "WithdrawRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "avoSafe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "auths",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "avoFactory",
    outputs: [
      {
        internalType: "contract IAvoFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositOnBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "withdrawAddress_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "withdrawLimit_",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "minWithdrawAmount_",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "withdrawFee_",
        type: "uint96",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auth_",
        type: "address",
      },
    ],
    name: "isAuth",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minWithdrawAmount",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "withdrawId_",
        type: "bytes32",
      },
    ],
    name: "processWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "withdrawId_",
        type: "bytes32",
      },
    ],
    name: "removeWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "requestSourceWithdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "uniqueId_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "requestWithdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "uniqueId_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auth_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed_",
        type: "bool",
      },
    ],
    name: "setAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "minWithdrawAmount_",
        type: "uint96",
      },
    ],
    name: "setMinWithdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "withdrawAddress_",
        type: "address",
      },
    ],
    name: "setWithdrawAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "withdrawFee_",
        type: "uint96",
      },
    ],
    name: "setWithdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "withdrawLimit_",
        type: "uint96",
      },
    ],
    name: "setWithdrawLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLimit",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "withdrawRequests",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200212b3803806200212b833981016040819052620000349162000186565b6001600160a01b03808316608081905290821660a0528290829082906200006d5760405162e56c8360e61b815260040160405180910390fd5b816001600160a01b038116620000955760405162e56c8360e61b815260040160405180910390fd5b6200009f620000ab565b505050505050620001c5565b600054610100900460ff1615620001185760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156200016b576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200018357600080fd5b50565b600080604083850312156200019a57600080fd5b8251620001a7816200016d565b6020840151909250620001ba816200016d565b809150509250929050565b60805160a051611f2462000207600039600081816104050152610d9901526000818161042c015281816107b30152818161091c0152610b9e0152611f246000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806362e80b8f116100f9578063b0c5ea8811610097578063e941fa7811610071578063e941fa7814610461578063f2fde38b14610479578063f848d5411461048c578063fa1d5f9f146104bc57600080fd5b8063b0c5ea8814610400578063c89039c514610427578063d6fd85d91461044e57600080fd5b8063745400c9116100d3578063745400c9146103b45780638456cb59146103c75780638da5cb5b146103cf57806396937887146103ed57600080fd5b806362e80b8f1461037957806364e72dbd1461038c578063715018a6146103ac57600080fd5b80633ab1a49411610166578063457e1a4911610140578063457e1a49146102f55780634634a44b1461033a5780635c975abb1461034d5780635de590de1461035857600080fd5b80633ab1a494146102d25780633ccfd60b146102e55780633f4ba83a146102ed57600080fd5b8063180c3ac411610197578063180c3ac4146102895780632520e7ff1461029c5780632fdbd157146102bf57600080fd5b8063026508d1146101be5780630b44a2181461022f5780631581b60014610244575b600080fd5b6101fe6101cc366004611cb8565b609a602052600090815260409020805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169082565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152015b60405180910390f35b61024261023d366004611d08565b6104cf565b005b6097546102649073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610226565b610242610297366004611cb8565b610591565b6102af6102aa366004611d3f565b6106f7565b6040519015158152602001610226565b6102426102cd366004611d61565b61074b565b6102426102e0366004611d3f565b610825565b6102426108eb565b610242610a04565b60985461031d906c0100000000000000000000000090046bffffffffffffffffffffffff1681565b6040516bffffffffffffffffffffffff9091168152602001610226565b610242610348366004611cb8565b610a16565b60335460ff166102af565b61036b610366366004611cb8565b610c36565b604051908152602001610226565b610242610387366004611da7565b610c80565b61036b61039a366004611d3f565b60996020526000908152604090205481565b610242610d4c565b61036b6103c2366004611cb8565b610d5e565b610242610e95565b60655473ffffffffffffffffffffffffffffffffffffffff16610264565b6102426103fb366004611da7565b610f08565b6102647f000000000000000000000000000000000000000000000000000000000000000081565b6102647f000000000000000000000000000000000000000000000000000000000000000081565b61024261045c366004611da7565b610f85565b60985461031d906bffffffffffffffffffffffff1681565b610242610487366004611d3f565b611054565b60975461031d907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1681565b6102426104ca366004611dc2565b611110565b6104d761144f565b8173ffffffffffffffffffffffffffffffffffffffff8116610525576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610531576000610534565b60015b73ffffffffffffffffffffffffffffffffffffffff841660008181526099602052604080822060ff949094169093559151841515927f4d54ccaf27a8be42c0d9691e765fa614353731ab09c493ecb4822f69cc60206191a3505050565b6000818152609a602090815260408083208151808301909252805473ffffffffffffffffffffffffffffffffffffffff168252600101549181018290529103610606576040517fce3d464800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000908152609960205260409020546001148061063b575060655473ffffffffffffffffffffffffffffffffffffffff1633145b8061065c5750805173ffffffffffffffffffffffffffffffffffffffff1633145b610692576040517fce81ddfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828152609a602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001681556001018290555183917f399fec2827488e3d8bc83633eee9835aa33152fe2b69b4ab7d53dd431328e13591a25050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526099602052604081205460011480610745575060655473ffffffffffffffffffffffffffffffffffffffff8381169116145b92915050565b8173ffffffffffffffffffffffffffffffffffffffff8116610799576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107db73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330856114d0565b604051829073ffffffffffffffffffffffffffffffffffffffff85169033907f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6290600090a4505050565b61082d61144f565b8073ffffffffffffffffffffffffffffffffffffffff811661087b576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b609780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040517fb13cf87e0a7b64f90565a1b68b63ae634d746fa785450bbdef7cbd281997cfb090600090a25050565b6097546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f0000000000000000000000000000000000000000000000000000000000000000917401000000000000000000000000000000000000000090046bffffffffffffffffffffffff169060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c89190611e27565b9050818111156109ff57609754828203906109fd9073ffffffffffffffffffffffffffffffffffffffff8681169116836115ac565b505b505050565b610a0c61144f565b610a14611602565b565b3360009081526099602052604090205460011480610a4b575060655473ffffffffffffffffffffffffffffffffffffffff1633145b610a81576040517fce81ddfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8961167f565b6000818152609a602090815260408083208151808301909252805473ffffffffffffffffffffffffffffffffffffffff168252600101549181018290529103610afe576040517fce3d464800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60985460208201516bffffffffffffffffffffffff90911690811115610b50576040517fa719980300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020808301516000858152609a9092526040822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001681556001019190915582519082900390610bda907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690836115ac565b80836000015173ffffffffffffffffffffffffffffffffffffffff16857f8d126143b443eb74bc6c1628c4ec10875cdc7230b6132a45f9278f06bd99192f85604051610c2891815260200190565b60405180910390a450505050565b6000610c4061167f565b610c49826116ec565b6040519091508290339083907ff7efda29e6df73298c95a7b454ca192bf926c5978eb1af88ee9c3ff7060ac4a890600090a4919050565b610c8861144f565b6098546bffffffffffffffffffffffff8083166c01000000000000000000000000909204161015610ce5576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b609880547fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166bffffffffffffffffffffffff83169081179091556040517f840254ee32ac3c780e045dd2cd2ff0de846ca8fd32a9742d54f253daf60f09af90600090a250565b610d5461144f565b610a14600061185f565b6000610d6861167f565b6040517f347cb1e90000000000000000000000000000000000000000000000000000000081523360048201819052907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063347cb1e990602401602060405180830381865afa158015610df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e199190611e40565b1515600003610e54576040517fce81ddfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5d836116ec565b6040519092508390339084907f11c8fd26f9b2c02617dd9e0f81ed46688c85ef629bf57b4dde3ddd6c741d0be690600090a450919050565b3360009081526099602052604090205460011480610eca575060655473ffffffffffffffffffffffffffffffffffffffff1633145b610f00576040517fce81ddfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a146118d6565b610f1061144f565b6097805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8416908102919091179091556040517f8ebb48834c0e517fd646fe89edade390e0e0abb1f5a4b41eb04275666703c5f790600090a250565b610f8d61144f565b6098546bffffffffffffffffffffffff9081169082161015610fdb576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b609880547fffffffffffffffff000000000000000000000000ffffffffffffffffffffffff166c010000000000000000000000006bffffffffffffffffffffffff8416908102919091179091556040517f2207dd5651db31ebf64b022afac9d1217d5b4342ebaf323a843c1eb9891326c790600090a250565b61105c61144f565b73ffffffffffffffffffffffffffffffffffffffff8116611104576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61110d8161185f565b50565b600054610100900460ff16158080156111305750600054600160ff909116105b8061114a5750303b15801561114a575060005460ff166001145b6111d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016110fb565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561123457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b8573ffffffffffffffffffffffffffffffffffffffff8116611282576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff81166112d0576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836bffffffffffffffffffffffff16856bffffffffffffffffffffffff161015611326576040517f395b20c000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61132f8861185f565b6113376118d6565b50506bffffffffffffffffffffffff808516740100000000000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff871617609755609880548483167fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009387166c0100000000000000000000000002939093167fffffffffffffffff00000000000000000000000000000000000000000000000090911617919091179055801561144757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b60655473ffffffffffffffffffffffffffffffffffffffff163314610a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016110fb565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109fd9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611931565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109ff9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161152a565b61160a611a3d565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60335460ff1615610a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016110fb565b6098546000906c0100000000000000000000000090046bffffffffffffffffffffffff1682108061171b575081155b15611752576040517fab557dc800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051426020820152339181019190915260608101839052608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291815281516020928301206000818152609a909352912060010154909150156117ee576040517fde39979e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051808201825233815260208082019485526000848152609a90915291909120905181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178155915160019092019190915590565b6065805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6118de61167f565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116553390565b6000611993826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611aa99092919063ffffffff16565b8051909150156109ff57808060200190518101906119b19190611e40565b6109ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016110fb565b60335460ff16610a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016110fb565b6060611ab88484600085611ac0565b949350505050565b606082471015611b52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016110fb565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b7b9190611e81565b60006040518083038185875af1925050503d8060008114611bb8576040519150601f19603f3d011682016040523d82523d6000602084013e611bbd565b606091505b5091509150611bce87838387611bd9565b979650505050505050565b60608315611c6f578251600003611c685773ffffffffffffffffffffffffffffffffffffffff85163b611c68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016110fb565b5081611ab8565b611ab88383815115611c845781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fb9190611e9d565b600060208284031215611cca57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611cf557600080fd5b919050565b801515811461110d57600080fd5b60008060408385031215611d1b57600080fd5b611d2483611cd1565b91506020830135611d3481611cfa565b809150509250929050565b600060208284031215611d5157600080fd5b611d5a82611cd1565b9392505050565b60008060408385031215611d7457600080fd5b611d7d83611cd1565b946020939093013593505050565b80356bffffffffffffffffffffffff81168114611cf557600080fd5b600060208284031215611db957600080fd5b611d5a82611d8b565b600080600080600060a08688031215611dda57600080fd5b611de386611cd1565b9450611df160208701611cd1565b9350611dff60408701611d8b565b9250611e0d60608701611d8b565b9150611e1b60808701611d8b565b90509295509295909350565b600060208284031215611e3957600080fd5b5051919050565b600060208284031215611e5257600080fd5b8151611d5a81611cfa565b60005b83811015611e78578181015183820152602001611e60565b50506000910152565b60008251611e93818460208701611e5d565b9190910192915050565b6020815260008251806020840152611ebc816040850160208701611e5d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220078ba2511fcf30d7bbed460048f51f489b61e2d81887be1f58db773ed49e464364736f6c63430008110033";

type AvoDepositManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AvoDepositManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AvoDepositManager__factory extends ContractFactory {
  constructor(...args: AvoDepositManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    depositToken_: PromiseOrValue<string>,
    avoFactory_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AvoDepositManager> {
    return super.deploy(
      depositToken_,
      avoFactory_,
      overrides || {}
    ) as Promise<AvoDepositManager>;
  }
  override getDeployTransaction(
    depositToken_: PromiseOrValue<string>,
    avoFactory_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      depositToken_,
      avoFactory_,
      overrides || {}
    );
  }
  override attach(address: string): AvoDepositManager {
    return super.attach(address) as AvoDepositManager;
  }
  override connect(signer: Signer): AvoDepositManager__factory {
    return super.connect(signer) as AvoDepositManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AvoDepositManagerInterface {
    return new utils.Interface(_abi) as AvoDepositManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AvoDepositManager {
    return new Contract(address, _abi, signerOrProvider) as AvoDepositManager;
  }
}
