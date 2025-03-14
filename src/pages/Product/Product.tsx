import { useState } from "react";
import { Button } from "../../components/elements/Button/Button";
import HeadingBanner from "../../components/ui/HeadingBanner/HeadingBanner";
import ProductList from "../../components/ui/ProductSection/ProductList";
// import { ProductData } from '../../components/ui/ProductSection/ProductData';
import { useGetAllProducts } from "../../services/product/product.query";

const tabNames: string[] = [
  "All",
  "Internal Projects",
  "External Projects",
  "Redesign",
  "Community Projects",
];

const Product = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const { data: ProductData } = useGetAllProducts();
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div
      className="container-layout overflow-x-hidden pt-[0px]"
      id="headerProduct"
    >
      {/* Hero Header Product Section */}
      <div className="flex flex-col items-center gap-[48px] self-stretch pt-[50px]">
        <div className="flex max-w-[1300px] flex-col items-center px-8">
          <img src={"/"} className="rounded-xl shadow-2xl" alt="" />
        </div>

        <div className="flex max-w-[1300] flex-col items-center gap-8 px-8">
          <HeadingBanner
            paragraph={
              " Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
            }
          >
            Products of EISD Laboratory
          </HeadingBanner>
        </div>
      </div>
      {/* End of Hero Header Product Section */}

      {/* Button Tab Section */}
      <div
        id="tab"
        className="flex gap-3 p-3 max-md:w-screen max-md:overflow-scroll"
      >
        {tabNames.map((tabName) => (
          <Button
            className="min-w-[200px]"
            key={tabName}
            variant={activeTab === tabName ? "primary" : "secondary"}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </Button>
        ))}
      </div>
      {/* End of Button Tab Section */}

      {/* Project Section */}
      {ProductData?.length > 0 && <ProductList products={ProductData} />}
      {/* End of Project Section */}
    </div>
  );
};

export default Product;
