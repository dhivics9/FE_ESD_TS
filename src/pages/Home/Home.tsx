import { Button } from "../../components/elements/Button/Button";
import ButtonGroup from "../../components/ui/ButtonGroup/ButtonGroup";
import HeadingBanner from "../../components/ui/HeadingBanner/HeadingBanner";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";
import { ValuesData } from "../../components/ui/ValueSection/ValueData";
import ValueList from "../../components/ui/ValueSection/ValueList";
import HeaderImage from "/header-image.webp";
import EventView from "./../../components/ui/EventsSection/EventList";
import { techEvents } from "../../components/ui/EventsSection/EventData";
import AlumniList from "../../components/ui/AlumniSection/AlumniList";

// Home Component
const Home = () => {
  return (
    <>
      {/* Header Section */}
      <header className="container-layout">
        <div className="flex flex-col items-center gap-12">
          <HeadingBanner
            paragraph={
              "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
            }
          >
            Unleashing Innovation through <br /> Digital Product
          </HeadingBanner>
          <ButtonGroup>
            <Button variant="secondary">Partner With Us</Button>
            <Button variant="primary"> Register as Client</Button>
          </ButtonGroup>
        </div>
        <div className={`w-full max-sm:h-80`} id="Header-Img">
          <img
            src={HeaderImage}
            className="hidden h-auto w-full sm:block"
            alt=""
          />
        </div>
      </header>

      {/* Value Section  */}
      <div className="container-layout">
        <SectionHeading>
          <div className="space-y-3">
            <SectionHeading.HeadingTop>
              Unlocking Value Through Cutting-Edge Solutions
            </SectionHeading.HeadingTop>
            <SectionHeading.HeadingBottom>
              Empowering Students with Practical Skills{" "}
              <br className="hidden md:flex" /> and Innovation
            </SectionHeading.HeadingBottom>
          </div>
          <SectionHeading.ParagraphBottom>
            Discover Everything about Software and Digital Product in Enterprise
            Software <br className="hidden md:flex" /> Development Laboratory in
            Information System, Telkom University
          </SectionHeading.ParagraphBottom>
        </SectionHeading>
        <ValueList values={ValuesData} />
      </div>

      {/* Quote section */}
      <div className="bg-[--gray-50]">
        <div className="container-layout">
          <SectionHeading>
            <div className="space-y-3">
              <SectionHeading.HeadingTop>
                Unlocking Value Through Cutting-Edge Solutions
              </SectionHeading.HeadingTop>
              <SectionHeading.HeadingBottom>
                Get to know Our Events and Participate in it
              </SectionHeading.HeadingBottom>
            </div>
          </SectionHeading>
          <EventView events={techEvents} />
        </div>
      </div>

      {/* Project Section */}
      <div className="container-layout">
        <div className="flex w-full flex-col items-center space-y-[16px]">
          {/* <ProductList products={ProductData} /> */}
        </div>
      </div>

      {/* Alumni Section */}
      {/* Quote section */}
      <div className="bg-[--gray-50] py-[32px]">
        <div className="container-layout ">
          <SectionHeading>
            <div className="space-y-3">
              <SectionHeading.HeadingTop>
                Our Members Have Collaborated with Various Leading Tech
              </SectionHeading.HeadingTop>
              <SectionHeading.HeadingBottom>
                What Alumni Said About ESD Laboratory
              </SectionHeading.HeadingBottom>
            </div>
          </SectionHeading>
          <AlumniList alumnis={techEvents} />
        </div>
      </div>
    </>
  );
};

export default Home;
