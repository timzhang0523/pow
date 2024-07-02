const crypto = require('crypto');

// 计算SHA256哈希值
function calculateHash(nickname, nonce) {
  return crypto.createHash('sha256').update(nickname + nonce).digest('hex');
}

// POW 算法
function proofOfWork(nickname, leadingZeros) {
  let nonce = 0;
  let hash = '';
  const target = '0'.repeat(leadingZeros);
  const startTime = Date.now();

  while (!hash.startsWith(target)) {
    nonce++;
    hash = calculateHash(nickname, nonce);
  }

  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000; // 计算花费的时间（秒）

  return { timeTaken, nonce, hash };
}

// 主程序
const nickname = '大锤'; 

// 3 个前导零
const result3 = proofOfWork(nickname, 3);
console.log(`3 Leading Zeros - Time: ${result3.timeTaken}s, Nonce: ${result3.nonce}, Hash: ${result3.hash}`);


// 4 个前导零
const result4 = proofOfWork(nickname, 4);
console.log(`4 Leading Zeros - Time: ${result4.timeTaken}s, Nonce: ${result4.nonce}, Hash: ${result4.hash}`);

// 5 个前导零
const result5 = proofOfWork(nickname, 5);
console.log(`5 Leading Zeros - Time: ${result5.timeTaken}s, Nonce: ${result5.nonce}, Hash: ${result5.hash}`);
