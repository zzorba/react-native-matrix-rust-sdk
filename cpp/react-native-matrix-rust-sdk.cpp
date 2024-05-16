#include "react-native-matrix-rust-sdk.h"

namespace matrixrustsdk {
	double multiply(double a, double b) {
		return a * b;
	}

	uint8_t installRustCrate(uint64_t rtPtr, uint8_t b) {
		// auto rt = *reinterpret_cast<facebook::jsi::Runtime *>(rtPtr);
		return false;
	}

	uint8_t cleanupRustCrate(uint64_t rtPtr, uint8_t b) {
		return false;
	}
}
