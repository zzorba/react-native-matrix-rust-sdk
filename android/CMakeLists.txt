cmake_minimum_required(VERSION 3.9.0)
project(react-native-matrix-rust-sdk)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 14)


if(NOT DEFINED REACT_NATIVE_PATH)
    set(REACT_NATIVE_PATH "../node_modules/react-native")
endif()

if(NOT DEFINED REACT_ANDROID_DIR)
    set(REACT_ANDROID_DIR "${REACT_NATIVE_PATH}/ReactAndroid")
endif()

# include_directories(
#     ${REACT_NATIVE_PATH}/React
#     ${REACT_NATIVE_PATH}/React/Base
#     ${REACT_NATIVE_PATH}/ReactCommon     # API
#     ${REACT_NATIVE_PATH}/ReactCommon/jsi # API/src
# )

# Specifies a path to native header files.
include_directories(
    ../cpp
)

# add_library(jsi ALIAS ReactAndroid::jsi)

add_library(
    ${CMAKE_PROJECT_NAME} SHARED
    ../cpp/react-native-matrix-rust-sdk.cpp
    cpp-adapter.cpp
)

# link_libraries(jsi)
# target_link_libraries(${CMAKE_PROJECT_NAME} jsi)
