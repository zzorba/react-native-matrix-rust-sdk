#ifdef __cplusplus
#import "react-native-matrix-rust-sdk.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMatrixRustSdkSpec.h"

@interface MatrixRustSdk : NSObject <NativeMatrixRustSdkSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MatrixRustSdk : NSObject <RCTBridgeModule>
#endif

@end
