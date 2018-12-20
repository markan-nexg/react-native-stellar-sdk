import {randomBytesAsync} from './crypto';
import {Keypair} from 'stellar-sdk';

Keypair.randomAsync = function randomAsync() {
    return randomBytesAsync(32)
        .then(secret => Keypair.fromRawEd25519Seed(secret));
};

Keypair.random = function random(secret) {
    //throw new Error('Use Stellar.Keypair.randomAsync for React Native');
    return Keypair.fromRawEd25519Seed(secret);
};

export * from 'stellar-sdk';
export default module.exports;
