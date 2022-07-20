import { CryptoHandlers } from '../proto/crypto/Crypto';
import { SignatureModel } from './signature';
import { SigningKeyModel } from './signing-key';

export const cryptoHandlers: CryptoHandlers = {
  createOneSignature(call, callback) {
    SignatureModel.createOne(call.request)
      .then((idHash) => callback(null, { idHash }))
      .catch((err) => callback(err));
  },
  verifySignature(call, callback) {
    SignatureModel.verify(call.request)
      .then((isValid) => callback(null, { isValid }))
      .catch((err) => callback(err));
  },
  createOneSigningKey(call, callback) {
    SigningKeyModel.createOne(call.request)
      .then((idHash) => callback(null, { idHash }))
      .catch((err) => callback(err));
  },
};
