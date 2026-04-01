export enum BiometricStrength {
  Strong = 'strong',
  Weak = 'weak',
}

export type BiometryType =
  | 'Biometrics'
  | 'FaceID'
  | 'TouchID'
  | 'Fingerprint'
  | 'None'
  | 'Unknown';

export type RiskLevel = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'UNKNOWN';
