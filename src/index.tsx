const MatrixRustSdk = require('./NativeMatrixRustSdk').default;

MatrixRustSdk.installRustCrate(true);

export function multiply(a: number, b: number): number {
  return MatrixRustSdk.multiply(a, b);
}

export * from './generated/matrix_sdk';
export * from './generated/matrix_sdk_base';
export * from './generated/matrix_sdk_crypto';
export * from './generated/matrix_sdk_ffi';
export * from './generated/matrix_sdk_ui';
