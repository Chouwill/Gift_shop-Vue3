import request from "../utils/request";

const api_path = import.meta.env.VITE_APP_PATH;

/**
 *取得產品列表
 *
 * */
export const getProducts = (page) =>
  request.get(`/api/${api_path}/products?page=${page}`);