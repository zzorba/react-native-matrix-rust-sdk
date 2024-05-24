import { type UniffiRustFutureContinuationCallback } from 'uniffi-bindgen-react-native/async-rust-call';
import { type UniffiRustCallStatus } from 'uniffi-bindgen-react-native/rust-call';

interface NativeModuleInterface {
  uniffi_internal_fn_func_ffi__string_to_byte_length(
    string: string,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_internal_fn_func_ffi__string_to_arraybuffer(
    string: string,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_internal_fn_func_ffi__arraybuffer_to_string(
    buffer: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): string;
  ffi_matrix_sdk_crypto_uniffi_contract_version(): number;
}

// Casting globalThis to any allows us to look for `NativeMatrixSdkCrypto`
// if it was added via JSI.
//
// The empty object is there for testing purposes only, and may be removed.
export default ((globalThis as any).NativeMatrixSdkCrypto ??
  {}) as NativeModuleInterface;
