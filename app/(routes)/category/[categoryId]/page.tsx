import { getCategory, getProducts, getSizes } from "@/actions/actions";
import Billboard from "@/components/Billboard/Billboard";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import Filters from "@/components/ui/Filters";
import MobileFilters from "@/components/ui/MobileFilters";
import NoResults from "@/components/ui/NoResults";

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    sizeId: searchParams.sizeId,
    categoryId: params.categoryId,
  });
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-20 p-4">
          <div className="lg:grid lg:gap-x-8 lg:grid-cols-5">
            <MobileFilters sizes={sizes} />
            <div className="hidden lg:block">
              <Filters valueKey="sizeId" name="sizes" data={sizes} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                  <ProductCard product={product} key={product?.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
