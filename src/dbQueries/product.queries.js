export const getAllProductsQuery = "SELECT * from product"
export const getProductsByIdQuery = "SELECT * from product WHERE id = $1"
export const getProductsByNameQuery = "SELECT * from product WHERE name = $1"
export const addProductQuery = "INSERT INTO product (name, description, price) VALUES ($1, $2, $3) RETURNING *"
export const updateProductQuery = "UPDATE product SET name=$2, description=$3, price=$4 WHERE id=$1"
export const deleteProductQuery = "DELETE from product WHERE id = $1"