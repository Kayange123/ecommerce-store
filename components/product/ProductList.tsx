import { IProduct } from "@/common.types"
import NoResults from "../ui/NoResults";
import ProductCard from "./ProductCard";

interface ProductListProps {
    data: IProduct[];
    title: string;
}

const ProductList = ({data, title}: ProductListProps) => {
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-lg lg:text-xl">{title}</h3>
        {data.length===0 && <NoResults />}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4" >
            {data.map((item)=>(
                <div key={item.id}>
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList;