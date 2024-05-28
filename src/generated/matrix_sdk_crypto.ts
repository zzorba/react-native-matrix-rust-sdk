// This file was autogenerated by some hot garbage in the `uniffi` crate.
// Trust me, you don't want to mess with it!

import NativeModule from './matrix_sdk_crypto-ffi';
import { UniffiInternalError } from 'uniffi-bindgen-react-native/errors';
import {
  type FfiConverter,
  AbstractFfiConverterArrayBuffer,
  FfiConverterInt32,
} from 'uniffi-bindgen-react-native/ffi-converters';
import { RustBuffer } from 'uniffi-bindgen-react-native/ffi-types';
import {
  initializeWithStringLifter,
  rustCall,
} from 'uniffi-bindgen-react-native/rust-call';

// Get converters from the other files, if any.

// Public interface members begin here.

const stringToArrayBuffer = (s: string): ArrayBuffer =>
  rustCall((status) =>
    NativeModule.uniffi_internal_fn_func_ffi__string_to_arraybuffer(s, status)
  );

const arrayBufferToString = (ab: ArrayBuffer): string =>
  rustCall((status) =>
    NativeModule.uniffi_internal_fn_func_ffi__arraybuffer_to_string(ab, status)
  );

const stringByteLength = (s: string): number =>
  rustCall((status) =>
    NativeModule.uniffi_internal_fn_func_ffi__string_to_byte_length(s, status)
  );

const FfiConverterString = (() => {
  const lengthConverter = FfiConverterInt32;
  type TypeName = string;
  class FFIConverter implements FfiConverter<ArrayBuffer, TypeName> {
    lift(value: ArrayBuffer): TypeName {
      return arrayBufferToString(value);
    }
    lower(value: TypeName): ArrayBuffer {
      return stringToArrayBuffer(value);
    }
    read(from: RustBuffer): TypeName {
      const length = lengthConverter.read(from);
      return from.read(length, arrayBufferToString);
    }
    write(value: TypeName, into: RustBuffer): void {
      const buffer = stringToArrayBuffer(value);
      const numBytes = buffer.byteLength;
      lengthConverter.write(numBytes, into);
      into.write(numBytes, () => stringToArrayBuffer(value));
    }
    allocationSize(value: TypeName): number {
      return lengthConverter.allocationSize(0) + stringByteLength(value);
    }
  }

  return new FFIConverter();
})();
initializeWithStringLifter(FfiConverterString.lift);

/**
 * The result of a signature check.
 */
export enum SignatureState {
  /**
   * The signature is missing.
   */
  MISSING,
  /**
   * The signature is invalid.
   */
  INVALID,
  /**
   * The signature is valid but the device or user identity that created the
   * signature is not trusted.
   */
  VALID_BUT_NOT_TRUSTED,
  /**
   * The signature is valid and the device or user identity that created the
   * signature is trusted.
   */
  VALID_AND_TRUSTED,
}

const FfiConverterTypeSignatureState = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = SignatureState;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return SignatureState.MISSING;
        case 2:
          return SignatureState.INVALID;
        case 3:
          return SignatureState.VALID_BUT_NOT_TRUSTED;
        case 4:
          return SignatureState.VALID_AND_TRUSTED;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case SignatureState.MISSING:
          return ordinalConverter.write(1, into);
        case SignatureState.INVALID:
          return ordinalConverter.write(2, into);
        case SignatureState.VALID_BUT_NOT_TRUSTED:
          return ordinalConverter.write(3, into);
        case SignatureState.VALID_AND_TRUSTED:
          return ordinalConverter.write(4, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * Error type for the decoding of the [`QrCodeData`].
 */
export enum LoginQrCodeDecodeError {
  /**
   * The QR code data is no long enough, it's missing some fields.
   */
  NOT_ENOUGH_DATA,
  /**
   * One of the URLs in the QR code data is not a valid UTF-8 encoded string.
   */
  NOT_UTF8,
  /**
   * One of the URLs in the QR code data could not be parsed.
   */
  URL_PARSE,
  /**
   * The QR code data contains an invalid mode, we expect the login (0x03)
   * mode or the reciprocate mode (0x04).
   */
  INVALID_MODE,
  /**
   * The QR code data contains an unsupported version.
   */
  INVALID_VERSION,
  /**
   * The base64 encoded variant of the QR code data is not a valid base64
   * string.
   */
  BASE64,
  /**
   * The QR code data doesn't contain the expected `MATRIX` prefix.
   */
  INVALID_PREFIX,
}

const FfiConverterTypeLoginQrCodeDecodeError = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = LoginQrCodeDecodeError;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return LoginQrCodeDecodeError.NOT_ENOUGH_DATA;
        case 2:
          return LoginQrCodeDecodeError.NOT_UTF8;
        case 3:
          return LoginQrCodeDecodeError.URL_PARSE;
        case 4:
          return LoginQrCodeDecodeError.INVALID_MODE;
        case 5:
          return LoginQrCodeDecodeError.INVALID_VERSION;
        case 6:
          return LoginQrCodeDecodeError.BASE64;
        case 7:
          return LoginQrCodeDecodeError.INVALID_PREFIX;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case LoginQrCodeDecodeError.NOT_ENOUGH_DATA:
          return ordinalConverter.write(1, into);
        case LoginQrCodeDecodeError.NOT_UTF8:
          return ordinalConverter.write(2, into);
        case LoginQrCodeDecodeError.URL_PARSE:
          return ordinalConverter.write(3, into);
        case LoginQrCodeDecodeError.INVALID_MODE:
          return ordinalConverter.write(4, into);
        case LoginQrCodeDecodeError.INVALID_VERSION:
          return ordinalConverter.write(5, into);
        case LoginQrCodeDecodeError.BASE64:
          return ordinalConverter.write(6, into);
        case LoginQrCodeDecodeError.INVALID_PREFIX:
          return ordinalConverter.write(7, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * Our best guess at the reason why an event can't be decrypted.
 */
export enum UtdCause {
  /**
   * We don't have an explanation for why this UTD happened - it is probably
   * a bug, or a network split between the two homeservers.
   */
  UNKNOWN,
  /**
   * This event was sent when we were not a member of the room (or invited),
   * so it is impossible to decrypt (without MSC3061).
   */
  MEMBERSHIP,
}

const FfiConverterTypeUtdCause = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = UtdCause;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return UtdCause.UNKNOWN;
        case 2:
          return UtdCause.MEMBERSHIP;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case UtdCause.UNKNOWN:
          return ordinalConverter.write(1, into);
        case UtdCause.MEMBERSHIP:
          return ordinalConverter.write(2, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * The local trust state of a device.
 */
export enum LocalTrust {
  /**
   * The device has been verified and is trusted.
   */
  VERIFIED,
  /**
   * The device been blacklisted from communicating.
   */
  BLACK_LISTED,
  /**
   * The trust state of the device is being ignored.
   */
  IGNORED,
  /**
   * The trust state is unset.
   */
  UNSET,
}

const FfiConverterTypeLocalTrust = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = LocalTrust;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return LocalTrust.VERIFIED;
        case 2:
          return LocalTrust.BLACK_LISTED;
        case 3:
          return LocalTrust.IGNORED;
        case 4:
          return LocalTrust.UNSET;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case LocalTrust.VERIFIED:
          return ordinalConverter.write(1, into);
        case LocalTrust.BLACK_LISTED:
          return ordinalConverter.write(2, into);
        case LocalTrust.IGNORED:
          return ordinalConverter.write(3, into);
        case LocalTrust.UNSET:
          return ordinalConverter.write(4, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

export default Object.freeze({
  FfiConverterTypeLocalTrust,
  FfiConverterTypeLoginQrCodeDecodeError,
  FfiConverterTypeSignatureState,
  FfiConverterTypeUtdCause,
});