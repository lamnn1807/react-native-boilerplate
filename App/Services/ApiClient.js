import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Config } from 'App/Config'

const ApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

ApiClient.interceptors.request.use(
  async (config) => {
    const baseURL = (await AsyncStorage.getItem('@apiServer')) || config.baseURL
    const authToken = await AsyncStorage.getItem('@authToken')
    // Do something before request is sent
    const headers = {
      ...config.headers,
      Authorization: `Bearer ${authToken}`,
    }
    const params = {
      ...config.params,
    }
    return {
      ...config,
      baseURL,
      headers,
      params,
    }
  },
  (error) => {
    // Do something with request error
    console.log('error', { ...error })
    return Promise.reject(error)
  }
)

export default ApiClient
