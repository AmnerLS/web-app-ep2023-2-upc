import http from "../../shared/services/http-common.js";

export class CollectionsApiService {
    getAll(){
        return http.get("/collections");
    }
    getById(id) {
        return http.get(`/collections/${id}`);
    }
}