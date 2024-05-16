const MatrixRustSdk = require('./NativeMatrixRustSdk').default;

MatrixRustSdk.installRustCrate(true);

export function multiply(a: number, b: number): number {
  return MatrixRustSdk.multiply(a, b);
}
