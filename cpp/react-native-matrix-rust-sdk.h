#ifndef MATRIXRUSTSDK_H
#define MATRIXRUSTSDK_H
#include <cstdint>

namespace matrixrustsdk {
  double multiply(double a, double b);
  uint8_t installRustCrate(uint64_t rtPtr, uint8_t b);
  uint8_t cleanupRustCrate(uint64_t rtPtr, uint8_t b);
}

#endif /* MATRIXRUSTSDK_H */
