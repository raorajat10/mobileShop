// import { notFound } from "next/navigation"

// const products = [
//   {
//     id: 1,
//     name: "Galaxy S24 Ultra",
//     brand: "samsung",
//     price: "₹1199",
//   },
//   {
//     id: 2,
//     name: "iPhone 15 Pro Max",
//     brand: "apple",
//     price: "₹1299",
//   },
//   // Add more products here...
// ]

// export default function BrandPage({ params }: { params: { brand: string } }) {
//   const brandName = params.brand.toLowerCase()

//   const filtered = products.filter(
//     (p) => p.brand.toLowerCase() === brandName
//   )

//   if (filtered.length === 0) return notFound()

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold capitalize mb-4">
//         {brandName} Products
//       </h1>
//       <ul className="space-y-4">
//         {filtered.map((product) => (
//           <li key={product.id} className="p-4 rounded bg-gray-100 shadow">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-sm text-gray-600">{product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
