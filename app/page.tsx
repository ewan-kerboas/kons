import Image from "next/image";
import { gql } from "../utils/gql";
import type { ShopifyExtension, ShopifyProduct } from "../types";
import { formatPrice } from "../utils/formatPrice";
import Link from "next/link";
import { useEffect } from "react";
import HeaderSubscription from "../components/Home/headerSubscription";
import LottieSection from "../components/Home/lottieSection";
import BoxTabs from "../components/Home/boxTabs";
import Newsletter from "../components/newsletter";

type GraphQLResponse = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
  };
  extensions: ShopifyExtension;
};

const getProducts = async (): Promise<GraphQLResponse> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: gql`
        query ProductsQuery {
          products(first: 6) {
            nodes {
              description
              featuredImage {
                altText
                height
                id
                url
                width
              }
              handle
              id
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
              title
            }
          }
        }
      `,
    }),
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  return res.json();
};

const HomePage = async () => {
  const json = await getProducts();

  return (
    <main>
      <section className="h-[80vh] bg-bottom bg-header bg-cover relative">
        <HeaderSubscription />
      </section>
      <section className="mt-[150px] md:mt-[50px] py-[50px] md:px-[100px]">
        <LottieSection />
      </section>
      <section className="px-[30px] py-[50px] md:py-[100px md:px-[40px] lg:px-[80px] flex flex-col">
        <div className="w-full lg:w-2/3 xl:w-1/2 gap-[15px] flex flex-col mx-auto">
          <h2 className="font-bold leading-[216%] md:leading-[170%] text-[24px] md:text-[30px] lg:text-[40px] lg:leading-[130%] text-center  text-transparent bg-clip-text bg-gradient-to-r from-white to-lightViolet">
            NOS PRODUITS
          </h2>
          <p className="text-lightGray text-[16px] leading-[170%] lg:text-[20px] lg:leading-[136%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempor lobortis tincidunt. Vestibulum suscipit, est quis vestibulum
            rhoncus, lacus felis iaculis justo, nec tincidunt odio urna vitae
            lacus. Aliquam vehicula libero sit amet ex ultricies aliquam. In in
            nisl lacinia, ullamcorper nunc vitae, molestie justo. Nulla congue
            bibendum sem.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-[50px] mt-[30px] md:mt-[50px] max-w-full">
          <div className="md:col-span-4 rounded-[10px] bg-[#23222E] flex flex-col group">
            <div className="h-[280px] bg-[#272633] rounded-t-[10px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#272633] to-[#191820] opacity-1 group-hover:opacity-0 transition-opacity rounded-t-[10px]" />
            </div>

            <div className="flex flex-col gap-[15px] md:gap-[20px]  p-[20px] md:p-[30px]">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green text-[18px] md:text-[20px] lg:text-[24px] font-bold">
                PAQUET DE FEUILLE
              </h4>
              <p className="text-[14px] text-lightGray leading-[200%] md:leading-[180%] md:text-[12px] lg:text-[18px] lg:leading-[150%] xl:text-[20px] xl:leading-[136%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tempor lobortis tincidunt. Vestibulum suscipit
              </p>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[10px] bg-[#23222E] flex flex-col group">
            <div className="h-[280px] bg-[#272633] rounded-t-[10px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#272633] to-[#191820] opacity-1 group-hover:opacity-0 transition-opacity rounded-t-[10px]" />
            </div>

            <div className="flex flex-col gap-[15px] md:gap-[20px]  p-[20px] md:p-[30px]">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green text-[18px] md:text-[20px] lg:text-[24px] font-bold">
                PAQUET DE FEUILLE
              </h4>
              <p className="text-[14px] text-lightGray leading-[200%] md:leading-[180%] md:text-[12px] lg:text-[18px] lg:leading-[150%] xl:text-[20px] xl:leading-[136%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tempor lobortis tincidunt. Vestibulum suscipit
              </p>
            </div>
          </div>
          <div className="md:col-span-4 rounded-[10px] bg-[#23222E] flex flex-col group">
            <div className="h-[280px] bg-[#272633] rounded-t-[10px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#272633] to-[#191820] opacity-1 group-hover:opacity-0 transition-opacity rounded-t-[10px]" />
            </div>

            <div className="flex flex-col gap-[15px] md:gap-[20px]  p-[20px] md:p-[30px]">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green text-[18px] md:text-[20px] lg:text-[24px] font-bold">
                PAQUET DE FEUILLE
              </h4>
              <p className="text-[14px] text-lightGray leading-[200%] md:leading-[180%] md:text-[12px] lg:text-[18px] lg:leading-[150%] xl:text-[20px] xl:leading-[136%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tempor lobortis tincidunt. Vestibulum suscipit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[30px] py-[50px] md:px-[40px] md:pt-0 md:pb-[100px] lg:px-[80px] lg:py-[100px] flex flex-col">
        <h2 className="font-bold leading-[216%] md:leading-[170%] text-[24px] md:text-[30px] lg:text-[40px] lg:leading-[130%] text-center  text-transparent bg-clip-text bg-gradient-to-r from-white to-lightViolet">
          NOS BOX
        </h2>
        <BoxTabs />
      </section>
      <section className="px-[20px] py-[50px] md:px-[80px] md:py-[50px]">
        <Newsletter />
      </section>


      {/* <div className="px-5">
        <ul className="grid grid-cols-12 gap-4 pb-12">
          {json.data.products.nodes.map((product) => {
            const prodId = product.id.split("/").pop();

            return (
              <li
                key={product.id}
                className="border border-slate-200 rounded-md overflow-hidden col-span-full md:col-span-6 lg:col-span-4"
              >
                <div>
                  <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    width={product.featuredImage.width}
                    height={product.featuredImage.height}
                    className="h-96 w-full object-cover"
                    placeholder="blur"
                    blurDataURL={product.featuredImage.url}
                  />
                </div>

                <div className="p-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-400 font-bold py-1 px-3 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}

                  <h3 className="font-medium mt-3 text-3xl">{product.title}</h3>

                  <h4>
                    {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{" "}
                    {product.priceRangeV2.minVariantPrice.currencyCode}
                  </h4>

                  <p className="mt-2 mb-4">{product.description}</p>

                  <Link
                    href={`/product/${prodId}`}
                    className="border border-blue-600 inline-block p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white ease-in-out duration-150"
                  >
                    View Product
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
    </main>
  );
};

export default HomePage;
