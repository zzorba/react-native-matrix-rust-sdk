#include <jni.h>
#include "react-native-matrix-rust-sdk.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_matrixrustsdk_MatrixRustSdkModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return matrixrustsdk::multiply(a, b);
}
