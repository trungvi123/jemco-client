import axiosClient from "./axiosClient";

const productApi = {
    getAllProduct: () => {
        const url = 'product/';
        return axiosClient.get(url);
    },
    createProduct: (payload) => {
        const url = 'product/';
        return axiosClient.post(url,payload);
    },
}

export default productApi