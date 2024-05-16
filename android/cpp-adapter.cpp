#include <jni.h>
#include "react-native-matrix-rust-sdk.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return matrixrustsdk::multiply(a, b);
}

extern "C"
JNIEXPORT jboolean JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeInstallRustCrate(JNIEnv *env, jclass type, jlong rtPtr, jboolean a) {
    return matrixrustsdk::installRustCrate(rtPtr, a);
}

extern "C"
JNIEXPORT jboolean JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeCleanupRustCrate(JNIEnv *env, jclass type, jlong rtPtr, jboolean a) {
    return matrixrustsdk::cleanupRustCrate(rtPtr, a);
}
