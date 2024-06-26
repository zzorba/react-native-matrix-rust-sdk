import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  installRustCrate(runtime: boolean): boolean;
  cleanupRustCrate(runtime: boolean): boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('MatrixRustSdk');
