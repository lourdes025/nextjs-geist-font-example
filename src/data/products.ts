import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Conjunto de Encaje Elegante',
    description: 'Hermoso conjunto de sujetador y braguita en encaje delicado. Perfecto para ocasiones especiales con un toque de elegancia y sensualidad.',
    price: 89.99,
    imageUrl: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    category: 'sets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Blanco', 'Rosa'],
    featured: true
  },
  {
    id: '2',
    title: 'Sujetador Push-Up Premium',
    description: 'Sujetador con realce natural que proporciona comodidad y elegancia. Diseño sofisticado con detalles únicos.',
    price: 45.99,
    imageUrl: 'https://images.pexels.com/photos/6311370/pexels-photo-6311370.jpeg',
    category: 'bras',
    sizes: ['32B', '34B', '36B', '32C', '34C', '36C'],
    colors: ['Negro', 'Nude', 'Blanco'],
    featured: true
  },
  {
    id: '3',
    title: 'Braguita de Encaje Francesa',
    description: 'Braguita clásica con encaje francés de alta calidad. Comodidad y estilo en una sola prenda.',
    price: 25.99,
    imageUrl: 'https://images.pexels.com/photos/6311378/pexels-photo-6311378.jpeg',
    category: 'panties',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Blanco', 'Rosa', 'Azul'],
    featured: false
  },
  {
    id: '4',
    title: 'Camisón de Seda Luxury',
    description: 'Camisón en seda natural con detalles bordados. Perfecto para noches especiales con máximo confort.',
    price: 120.99,
    imageUrl: 'https://images.pexels.com/photos/6311384/pexels-photo-6311384.jpeg',
    category: 'sleepwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Champagne', 'Rosa'],
    featured: true
  },
  {
    id: '5',
    title: 'Conjunto Deportivo Elegante',
    description: 'Conjunto deportivo con soporte y estilo. Ideal para actividades físicas sin renunciar a la elegancia.',
    price: 65.99,
    imageUrl: 'https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg',
    category: 'sets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Gris', 'Blanco'],
    featured: false
  },
  {
    id: '6',
    title: 'Sujetador Sin Aros Comfort',
    description: 'Sujetador ultra cómodo sin aros, perfecto para el uso diario. Suavidad y soporte natural.',
    price: 35.99,
    imageUrl: 'https://images.pexels.com/photos/6311372/pexels-photo-6311372.jpeg',
    category: 'bras',
    sizes: ['32A', '34A', '36A', '32B', '34B', '36B'],
    colors: ['Nude', 'Blanco', 'Negro'],
    featured: false
  },
  {
    id: '7',
    title: 'Tanga de Microfibra',
    description: 'Tanga invisible en microfibra suave. Comodidad absoluta sin marcas visibles.',
    price: 18.99,
    imageUrl: 'https://images.pexels.com/photos/6311380/pexels-photo-6311380.jpeg',
    category: 'panties',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Nude', 'Negro', 'Blanco'],
    featured: false
  },
  {
    id: '8',
    title: 'Pijama de Algodón Premium',
    description: 'Pijama de dos piezas en algodón 100% orgánico. Suavidad y transpirabilidad para un descanso perfecto.',
    price: 75.99,
    imageUrl: 'https://images.pexels.com/photos/6311386/pexels-photo-6311386.jpeg',
    category: 'sleepwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rosa', 'Azul', 'Blanco'],
    featured: true
  }
];

export const categories = [
  { id: 'bras', name: 'Sujetadores', description: 'Comodidad y elegancia para cada día' },
  { id: 'panties', name: 'Braguitas', description: 'Suavidad y estilo en cada detalle' },
  { id: 'sleepwear', name: 'Ropa de Dormir', description: 'Confort y sensualidad para tus noches' },
  { id: 'sets', name: 'Conjuntos', description: 'Elegancia completa en perfecta armonía' }
];
