import http from "../../shared/services/http-common.js";

export class ProductsApiService {
    getAll(){
        return http.get("/products");
    }
    getById(id) {
        return http.get(`/products/${id}`);
    }
    getByParam(param, value) {
        return http.get(`/products?${param}=${value}`);
    }
}