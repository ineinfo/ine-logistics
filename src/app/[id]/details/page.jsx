"use client";

import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
};

export default Page;
