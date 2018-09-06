const crypto = require('crypto')
const assert = require('assert')
const CitizenDetail = require("../models/CitizenDetail")

const BlockMethod = {
    calculateHash,
    generateNextBlock,
    getAllBlock,
    getLatestBlock
};

const Block = {
    index: 0,
    timeStap: 0,
    previousHash:  0,
    hash: 0,
    blockData: 0
    
}

function calculateHash(blockData) {
    return crypto
        .createHmac('sha256', blockData.toString())
        .digest('hex')
};

function getGenesisBlock() {
    return new Block(
        0, '', 1522983367254, null, 0,
        'e063dac549f070b523b0cb724efb1d4f81de67ea790f78419f9527aa3450f64c'
    )
};


async function generateNextBlock(blockData) {
    const previousBlock = await getLatestBlock();
    Block.index = previousBlock.index + 1;
    Block.previousHash = previousBlock.hash;
    Block.timeStap = new Date();
    Block.blockData = blockData
    Block.hash = calculateHash(Block.index, Block.previousHash, Block.timeStap, Block.blockData);
    return Block;
};

async function getLatestBlock() {
    const listBlock = await getAllBlock();
    return listBlock[listBlock.length - 1];
};

function isValidNewBlock(newBlock, previousBlock) {
    if (previousBlock.index + 1 !== newBlock.index) {
        console.log('invalid index');
        return false;
    } else if (previousBlock.hash !== newBlock.previousHash) {
        console.log('invalid previoushash');
        return false;
    } else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
        console.log(typeof (newBlock.hash) + ' ' + typeof calculateHashForBlock(newBlock));
        console.log('invalid hash: ' + calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
        return false;
    }
    return true;
};

function handleBlockchainResponse(message) {
    var receivedBlocks = JSON.parse(message.data).sort((b1, b2) => (b1.index - b2.index));
    var latestBlockReceived = receivedBlocks[receivedBlocks.length - 1];
    var latestBlockHeld = getLatestBlock();
    if (latestBlockReceived.index > latestBlockHeld.index) {
        console.log('blockchain possibly behind. We got: ' + latestBlockHeld.index + ' Peer got: ' + latestBlockReceived.index);
        if (latestBlockHeld.hash === latestBlockReceived.previousHash) {
            console.log("We can append the received block to our chain");
            blockchain.push(latestBlockReceived);
            broadcast(responseLatestMsg());
        } else if (receivedBlocks.length === 1) {
            console.log("We have to query the chain from our peer");
            broadcast(queryAllMsg());
        } else {
            console.log("Received blockchain is longer than current blockchain");
            replaceChain(receivedBlocks);
        }
    } else {
        console.log('received blockchain is not longer than current blockchain. Do nothing');
    }
};


function fromPrevious({ index, hash }, data) {
    // Initialize next block using previous block and transaction data
    // assert(typeof hash === 'string' && hash.length === 64)
    return new Block(index + 1, hash, Date.now(), data, 0)
}

function fromJson({ index, previousHash, timestamp, data, nonce, hash }) {
    const block = new Block(index, previousHash, timestamp, data, nonce, hash)
    assert(block.calculateHash() === block.hash)
    return block
};

async function getAllBlock() {
    let list = [];
    await CitizenDetail.find({}, (err, result) => {
        if (err) throw err;
        else {
            list = result;
            return result;
        }
    })
    return list;
}


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
};

function addBlock(newBlock) {
    if (isValidNewBlock(newBlock, getLatestBlock())) {
        blockchain.push(newBlock);
    }
};

function isValidNewBlock(newBlock, previousBlock) {
    if (previousBlock.index + 1 !== newBlock.index) {
        console.log('invalid index');
        return false;
    } else if (previousBlock.hash !== newBlock.previousHash) {
        console.log('invalid previoushash');
        return false;
    } else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
        console.log(typeof (newBlock.hash) + ' ' + typeof calculateHashForBlock(newBlock));
        console.log('invalid hash: ' + calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
        return false;
    }
    return true;
};

function isValidChain(blockchainToValidate) {
    if (JSON.stringify(blockchainToValidate[0]) !== JSON.stringify(getGenesisBlock())) {
        return false;
    }
    var tempBlocks = [blockchainToValidate[0]];
    for (var i = 1; i < blockchainToValidate.length; i++) {
        if (isValidNewBlock(blockchainToValidate[i], tempBlocks[i - 1])) {
            tempBlocks.push(blockchainToValidate[i]);
        } else {
            return false;
        }
    }
    return true;
};

module.exports = BlockMethod;