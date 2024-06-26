#include <jni.h>
#include <jsi/jsi.h>
#include "react-native-matrix-rust-sdk.h"

using namespace facebook;

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return matrixrustsdk::multiply(a, b);
}

extern "C"
JNIEXPORT jboolean JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeInstallRustCrate(JNIEnv *env, jclass type, jlong rtPtr, jboolean a) {
    auto runtime = reinterpret_cast<jsi::Runtime *>(rtPtr);
    return matrixrustsdk::installRustCrate(*runtime, a);
}

extern "C"
JNIEXPORT jboolean JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeCleanupRustCrate(JNIEnv *env, jclass type, jlong rtPtr, jboolean a) {
    auto runtime = reinterpret_cast<jsi::Runtime *>(rtPtr);
    return matrixrustsdk::installRustCrate(*runtime, a);
}
