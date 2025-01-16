const os = require('os');
console.log(os.arch());
const freeMeory = os.freemem();
console.log(freeMeory);
console.log(`${freeMeory/1024/1024/1024}`);

const totalMeory = os.totalmem();
console.log(`${totalMeory/1024/1024/1024}`);

console.log(os.platform());
console.log(os.hostname())
console.log(os.tmpdir());
