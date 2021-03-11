const NodeRSA = require('node-rsa');

exports.EncryptionService = () => {
    return {
        publicEncrypt(publicKey, message) {
            try {
                const publicKeyInstance = this.getPublicKeyInstance(publicKey);
                return JSON.stringify(
                    publicKeyInstance.encrypt(Buffer.from(message))
                );
            } catch (error) {
                throw new Error(error);
            }
        },

        getPublicKeyInstance(publicKey) {
            try {
                const nodeRSA = new NodeRSA();
                return nodeRSA.importKey(publicKey, 'public');
            } catch (error) {
                throw new Error(error);
            }
        },
    }
}