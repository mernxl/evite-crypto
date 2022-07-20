// Original file: proto/crypto.proto


export interface CreateOneSignatureInput {
  'signingKeyIdHash'?: (string);
  'eviteId'?: (string);
  'keyword'?: (string);
  '_keyword'?: "keyword";
}

export interface CreateOneSignatureInput__Output {
  'signingKeyIdHash': (string);
  'eviteId': (string);
  'keyword'?: (string);
  '_keyword': "keyword";
}
