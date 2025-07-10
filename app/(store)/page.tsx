import ProductsView from '@/components/ui/ProductsView';
import { getAllCategories } from '@/sanity/lib/products/getAllCategories';
import {getAllProducts} from '@/sanity/lib/products/getAllProducts'


export default async function Home() {

  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log (
    crypto.randomUUID().slice(0, 5) + `>>> Rendered the home page cache with ${products.length} 
    products and ${categories.length} categories`
  );
  
  return (
    <div>
     <h1>Welcome to My Store</h1>

     <div className='flex flex-1 items-center justify-top min-h-screen gb-gray-100 p-4'>
      <ProductsView products={products} categories={categories} />
     </div>
    </div>
  );
}
 