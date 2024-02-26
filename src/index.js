import fs from 'fs';
import { toRupiah } from 'to-rupiah';

function generateProduct(total) {
  const products = [];
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Toys', 'Sports'];

  for (let i = 1; i <= total; i++) {
    const product = {
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 10,
      category: categories[Math.floor(Math.random() * categories.length)]
    };
    product.priceFormatted = toRupiah(product.price, { formal: false, symbol: 'IDR' });
    products.push(product);
  }

  const jsonData = JSON.stringify(products, null, 2);
  const fileName = 'products.json';

  fs.writeFile(fileName, jsonData, (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    
    // console.log(`Product data has been saved to ${fileName}`);
  });

  return products;
}

export { generateProduct };
