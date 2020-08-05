// import config from 'react-native-config'
import devConfig from './index.dev'
import proConfig from './index.production'
console.log(__DEV__, devConfig, proConfig, config)

export const Config = __DEV__ ? { ...devConfig } : { ...proConfig }
