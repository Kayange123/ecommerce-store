import { getBillboards, getProducts } from "@/actions/actions";
import Billboard from "@/components/Billboard/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/product/ProductList";

export const revalidate = 0;

export default async function HomePage() {
  const billboards = await getBillboards();

  const randomIndex = Math.floor(Math.random() * billboards?.length);

  const billboard = billboards[randomIndex];
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
}
