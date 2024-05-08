import axios from 'axios'

const fetchProducts = async (token: string) => {
    const config = token
        ? {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
        : {}

    const response = await axios.get(
        'http://localhost:3000/home/allProducts',
        config
    )
    return response.data
}

export default fetchProducts
