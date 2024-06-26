package com.matrixrustsdk;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = MatrixRustSdkModule.NAME)
public class MatrixRustSdkModule extends NativeMatrixRustSdkSpec {
  public static final String NAME = "MatrixRustSdk";

  public MatrixRustSdkModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("react-native-matrix-rust-sdk");
  }

  private static native double nativeMultiply(double a, double b);
  private static native boolean nativeInstallRustCrate(long rtPtr, boolean a);
  private static native boolean nativeCleanupRustCrate(long rtPtr, boolean a);

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @Override
  public double multiply(double a, double b) {
    return nativeMultiply(a, b);
  }

  @Override
  public boolean installRustCrate(boolean rt) {
    return nativeInstallRustCrate(
      this.getReactApplicationContext().getJavaScriptContextHolder().get(),
      rt
    );
  }

  @Override
  public boolean cleanupRustCrate(boolean rt) {
    return nativeCleanupRustCrate(
      this.getReactApplicationContext().getJavaScriptContextHolder().get(),
      rt
    );
  }
}
