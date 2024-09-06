declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL?: string;
    ENV?: 'development' | 'production';
  }

  export const Config: NativeConfig;
  export default Config;
}
