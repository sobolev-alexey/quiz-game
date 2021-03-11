import NodeRSA from 'node-rsa';
import { IKeys, IPayload } from '../models/context';

const keySize = 512;

export const generateKeys = (): IKeys => {
    try {
        const rsaKeypair: NodeRSA = new NodeRSA({ b: keySize });
        if (rsaKeypair.getKeySize() === keySize && 
            rsaKeypair.isPrivate() &&
            rsaKeypair.isPublic()
        ) {
            return { 
                publicKey: rsaKeypair.exportKey('public'), 
                privateKey: rsaKeypair.exportKey('private')
            };
        } else {
            throw new Error('Key generation failed');
        }
    } catch (error) {
        throw new Error(error);
    }
}

const getPrivateKeyInstance = (privateKey: string): NodeRSA => {
    try {
        const nodeRSA = new NodeRSA();
        return nodeRSA.importKey(privateKey, 'private');
    } catch (error) {
        throw new Error(error);
    }
}

export const privateDecrypt = (privateKey: string, input: string): IPayload => {
    try {
        const privateKeyInstance = getPrivateKeyInstance(privateKey);
        const decrypted = privateKeyInstance.decrypt(
            Buffer.from(JSON.parse(input))
        );
        return JSON.parse(decrypted.toString());
    } catch (error) {
        throw new Error(error);
    }
}
