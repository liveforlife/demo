const crypto=require('crypto'); 

 /**
  * 哈希算法
  * 1：hash(md5,sha1,sha256,sha512) 
  * 2：Hmac(md5,sha1,sha256,sha512)
  */
// hash
const hash=crypto.createHash('md5')

hash.update('hello world')

console.log(hash.digest('hex'))

// Hmac
const Hmac=crypto.createHmac('sha256','secret-key')

Hmac.update('hello world')

console.log(Hmac.digest('hex'))

//AES 对称加密算法  加解密都是使用同一个 密钥, crypto支持,不过需要包装

/**
 *  加密
 */
function aesEncrypt(data,key){
	const cipher=crypto.createCipher('aes192',key);
	let crypted=cipher.update(data,'utf8','hex');
	crypted += cipher.final('hex');
	return crypted;
}
/**
 * 解密
 */
function aesDecrypt(encrypted,key){
	const decipher=crypto.createDecipher('aes192',key);
	let decrypted=decipher.update(encrypted,'hex','utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
}

/**
 * 测试AES
 */
let message='hello,this is a message'
let aesKey='password'
let EnAes=aesEncrypt(message,aesKey)
let DeAes=aesDecrypt(EnAes,aesKey)

console.log('Plain text: ' + message);
console.log('Encrypted text: ' + EnAes);
console.log('Decrypted text: ' + DeAes);

/**
 * DH Diffie- Hellman 密钥交换协议  基于数学原理
 */

const ming=crypto.createDiffieHellman(512)
let ming_keys=ming.generateKeys();

let prime=ming.getPrime()
let generator=ming.getGenerator()

console.log('Prime: '+prime.toString('hex')+','+prime)
console.log('Generator:'+generator.toString('hex')+','+generator)

let hong=crypto.createDiffieHellman(prime,generator)
let hong_keys=hong.generateKeys()

let ming_secret=ming.computeSecret(ming_keys)
let hong_secret=hong.computeSecret(hong_keys)

console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

/**
 * RSA 非对称加密算法 
 * 	1 use openssl
 * 		openssl genrsa -aes256 -out rsa-key.pem 2048
 * 		openssl rsa -in rsa-key.pem -outform PEM -out rsa-prv.pem
 * 		openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-pub.pem
 * 	2 use node-rsa
 */

var NodeRSA = require('node-rsa')
var fs = require('fs')
function generatorRSA() {
 var key = new NodeRSA({ b: 512 })
 key.setOptions({ encryptionScheme: 'pkcs1' })
 let privatePem = key.exportKey('pkcs1-private-pem')
 let publicPem = key.exportKey('pkcs1-public-pem')
 fs.writeFile('./pem/public.pem', publicPem, (err) => {
 if (err) throw err
 console.log('公钥已保存！')
 })
 fs.writeFile('./pem/private.pem', privatePem, (err) => {
 if (err) throw err
 console.log('私钥已保存！')
 })
}
function loadFile(file){
	return fs.readFileSync(file,'utf8')
}
generatorRSA();
let privatePem = loadFile('./pem/private.pem')
 let publicPem = loadFile('./pem/public.pem')

let messageRSA='hello word'
let enc_by_pev=crypto.privateEncrypt(privatePem,Buffer.from(messageRSA,'utf8'))
console.log('encrypted by private key: ' + enc_by_pev.toString('hex'));
let dec_by_pub=crypto.publicDecrypt(publicPem,enc_by_pev)
console.log('decrypted by public key: ' + dec_by_pub.toString('utf8'));