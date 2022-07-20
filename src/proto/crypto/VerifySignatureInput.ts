// Original file: proto/crypto.proto


export interface VerifySignatureInput {
  'signingKeyIdHash'?: (string);
  'signatureIdHash'?: (string);
  'eviteId'?: (string);
  'keyword'?: (string);
  '_keyword'?: "keyword";
}

export interface VerifySignatureInput__Output {
  'signingKeyIdHash': (string);
  'signatureIdHash': (string);
  'eviteId': (string);
  'keyword'?: (string);
  '_keyword': "keyword";
}
