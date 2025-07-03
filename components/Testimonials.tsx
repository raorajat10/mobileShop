// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { Quote } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function TestimonialsSlider() {
//   const testimonials = [
//     {
//       name: "Ankit Sharma",
//       role: "Zonal Sales Manager, Samsung India",
//       companyLogo: "/logos/samsung.png",
//       image: "/managers/ankit-sharma.jpg",
//       testimonial:
//         "YashMobiles is one of our most trusted partners in Rajasthan. Their commitment to genuine products and customer satisfaction aligns perfectly with our mission.",
//     },
//     {
//       name: "Pooja Verma",
//       role: "Area Sales Manager, Apple India",
//       companyLogo: "/logos/apple.png",
//       image: "/managers/pooja-verma.jpg",
//       testimonial:
//         "The team at YashMobiles maintains high standards in customer service and product delivery. We are proud to collaborate with them.",
//     },
//     {
//       name: "Pooja Verma",
//       role: "Area Sales Manager, Apple India",
//       companyLogo: "/logos/apple.png",
//       image: "/managers/pooja-verma.jpg",
//       testimonial:
//         "The team at YashMobiles maintains high standards in customer service and product delivery. We are proud to collaborate with them.",
//     },
//     {
//       name: "Pooja Verma",
//       role: "Area Sales Manager, Apple India",
//       companyLogo: "/logos/apple.png",
//       image: "/managers/pooja-verma.jpg",
//       testimonial:
//         "The team at YashMobiles maintains high standards in customer service and product delivery. We are proud to collaborate with them.",
//     },
//     {
//       name: "Pooja Verma",
//       role: "Area Sales Manager, Apple India",
//       companyLogo: "/logos/apple.png",
//       image: "/managers/pooja-verma.jpg",
//       testimonial:
//         "The team at YashMobiles maintains high standards in customer service and product delivery. We are proud to collaborate with them.",
//     },
//     {
//       name: "Rahul Joshi",
//       role: "Regional Manager, OnePlus India",
//       companyLogo: "/logos/oneplus.png",
//       image: "/managers/rahul-joshi.jpg",
//       testimonial:
//         "Our collaboration with YashMobiles has consistently driven customer trust for OnePlus in the Jaipur region. They understand what premium service truly means.",
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-20 relative fade-in-section">
//       <div className="mx-auto px-6 lg:px-12 max-w-7xl">
//         <div className="text-center mb-12">
//           <Badge variant="secondary" className="mb-4 glass-card animate-shimmer">
//             <Quote className="w-3 h-3 mr-1" />
//             What Our Partners Say
//           </Badge>
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
//             Testimonials from Zone Managers
//           </h2>
//           <p className="text-gray-700 md:text-lg max-w-2xl mx-auto font-medium">
//             Hear from our partner company managers about why they trust YashMobiles for authentic distribution and customer-first service.
//           </p>
//         </div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="pb-8"
//         >
//           {testimonials.map((t, idx) => (
//             <SwiperSlide key={idx}>
//               <Card className="glass-card glass-card-hover flex flex-col h-full">
//                 <CardHeader className="flex items-center space-x-4">
//                   <Image
//                     src={t.image}
//                     alt={t.name}
//                     width={60}
//                     height={60}
//                     className="rounded-full object-cover"
//                   />
//                   <div>
//                     <CardTitle className="text-gray-800">{t.name}</CardTitle>
//                     <div className="flex items-center space-x-2">
//                       <Image
//                         src={t.companyLogo}
//                         alt={`${t.role} Logo`}
//                         width={20}
//                         height={20}
//                         className="object-contain"
//                       />
//                       <p className="text-xs text-gray-600">{t.role}</p>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-700 font-medium">{t.testimonial}</p>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
