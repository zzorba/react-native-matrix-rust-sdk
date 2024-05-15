const MatrixRustSdk = require('./NativeMatrixRustSdk').default;

export function multiply(a: number, b: number): number {
  return MatrixRustSdk.multiply(a, b);
}
