import { IProduct } from "../../service/products"

interface IProductsItemProps {
    data : IProduct
    onRemove ?: (id : string) => void
}
export default IProductsItemProps