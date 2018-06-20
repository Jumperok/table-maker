import { fetchData } from '../api'

export const getData = async (cb) => {
  try {
    const data = await fetchData()
    cb(data)
    return data
  } catch (err) {
    
  }
}