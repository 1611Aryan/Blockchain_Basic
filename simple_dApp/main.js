let provider

const contractAddress = "0x27C59E7b25Df0DE34f39054490815849D8BF8c2A"
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_fruit",
        type: "string",
      },
    ],
    name: "setFruit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFruit",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]

let signer, DevilFruitContract
;(async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", [])
  signer = provider.getSigner()
  DevilFruitContract = new ethers.Contract(contractAddress, contractABI, signer)
})()

async function getFruit() {
  const getFruitPromise = DevilFruitContract.getFruit()
  const fruit = await getFruitPromise
  console.log(fruit)
}

async function setFruit() {
  const fruit = document.getElementById("fruit").value
  const setFruitPromise = DevilFruitContract.setFruit(fruit)
  await setFruitPromise
}
