import { contactfruits, contactpageimg, reminder } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import Title from "@/components/DynamicComponents/Title";
import "leaflet/dist/leaflet.css";
import { aboutbg } from "@/assets";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Contact from "@/components/HomePageComponents/Contact";
import { Link } from "react-router";
// import { useEffect } from "react";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import { useState } from "react";
// import L from "leaflet";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  // const [mapLoaded, setMapLoaded] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && !mapLoaded) {
  //     if (!document.getElementById("map")) return;

  //     const calgaryOffice = [50.943723, -113.978194]; // Extracted from Google Maps iframe

  //     const map = L.map("map").setView(calgaryOffice, 15);

  //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //       maxZoom: 19,
  //       attribution: "© OpenStreetMap contributors",
  //     }).addTo(map);

  //     // Custom Marker Icon
  //     const defaultMarker = L.icon({
  //       iconUrl:
  //         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  //       shadowUrl:
  //         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  //       iconSize: [25, 41],
  //       iconAnchor: [12, 41],
  //       popupAnchor: [1, -34],
  //       shadowSize: [41, 41],
  //     });

  //     // Add Marker
  //     L.marker(calgaryOffice, { icon: defaultMarker })
  //       .addTo(map)
  //       .bindPopup(
  //         "<b>The Fruit Box Ltd.</b><br>#115, 11929 – 40th Street S.E.<br>Calgary, Alberta T2Z 4M8"
  //       )
  //       .openPopup();

  //     setTimeout(() => {
  //       map.invalidateSize();
  //     }, 500);

  //     setMapLoaded(true);
  //   }
  // }, [mapLoaded]);

  return (
    <div>
      <Helmet>
        <title>Contact us</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <DynamicBanner
          title="CONTACT US"
          semiTitle="We’re a super friendly company."
        />
        <div className="relative">
          <img
            src={reminder}
            alt=""
            className="absolute -top-0 sm:-top-12 -left-0 xl:-top-28 xl:left-16 w-40 md:w-[284px] max-w-[284px]"
          />
          <div className="absolute flex flex-col gap-3 text-[#38302F] max-w-[792px] mx-[280px]   ml-0 px-5 xl:ml-96 z-20 mt-40 md:mt-48 xl:mt-0 w-full">
            <Title
              className="capitalize font-bold text-center text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]]"
              style={{ stroke: "#38302F", webkitTextStroke: "2px #38302F" }}
            >
              OFFICE FRUIT{" "}
              <span
                style={{ stroke: "black", webkitTextStroke: "2px #4C9811" }}
                className="text-secondaryTextColor"
              >
                ENQUIRY
              </span>
            </Title>
            <p className="pb-3 lg:pb-10 text-center font-bold text-sm md:text-base">
              Become the office hero! Energize your workplace with fresh fruit
              deliveries.
            </p>
            <div className="w-full">
              <Contact />
            </div>
          </div>

          <div className="absolute top-[35%] md:top-[38%] lg:top-[32%] 2xl:top-20 z-10">
            <div>
              <img
                src={aboutbg}
                alt=""
                className="w-full h-[800px] md:h-full"
              />
              <img
                src={contactpageimg}
                alt=""
                className="absolute top-[15%] md:top-[10%] right-0 w-32 sm:w-[20%] max-w-[50%]"
              />
              <div className="absolute top-[68%] sm:top-[65%] left-1/2 -translate-x-1/2 flex items-start justify-between w-[95%] sm:w-[80%] -mt-20 pt-3">
                <div className="text-white max-w-[772px] text-left w-full -mt-10 sm:mt-0">
                  <Title
                    className="text-sm sm:text-[24px]  md:text-[30px] lg:text-[50px] xl:text-[64px] tracking-wide md:tracking-normal"
                    style={{ stroke: "white", webkitTextStroke: "2px white" }}
                  >
                    CONNECT{" "}
                    <span
                      className="text-primaryLightColor"
                      style={{
                        stroke: "#FFB500",
                        webkitTextStroke: "2px #FFB500",
                      }}
                    >
                      WITH US
                    </span>
                  </Title>
                  <p className="font-thin text-primaryLightColor text-xs md:text-base md:mt-10">
                    Reliable Office Fruit Delivery.
                  </p>
                  <div className="font-thin mt-[10px] flex flex-col gap-1 md:gap-3">
                    <p className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 text-xs sm:text-sm">
                      <span>The Fruit Box Ltd.</span>
                      <span>Office: 587.351.5720</span>
                      <span>#115, 11929 – 40th Street S.E.</span>
                      <span>mail: info @ thefruitbox.ca</span>
                    </p>
                    <span className="text-xs sm:text-sm">
                      Calgary, Alberta{" "}
                    </span>
                    <span className="text-xs sm:text-sm">T2Z 4M8 </span>
                  </div>
                </div>
                <div className="w-[400px] h-[700px] md:h-[560px] lg:w-[560px] mt-2 overflow-hidden rounded-md">
                  <div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {/* Responsive iframe container */}
                      <div
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%", // 16:9 aspect ratio (height/width * 100)
                          height: 0,
                          overflow: "hidden",
                          border: "3px solid black",
                          borderRadius: "15px",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545.0123077244!2d-113.97819361676204!3d50.94372338225178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371776579d04f79%3A0x725b809400a01a7d!2s11929%2040%20St%20SE%20%23115%2C%20Calgary%2C%20AB%20T2Z%204M8%2C%20Canada!5e1!3m2!1sen!2sbd!4v1740656574079!5m2!1sen!2sbd"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            minHeight: "150px",
                            border: 0,
                          }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <div className="pt-[2000px]   lg:pt-[1600px] min-[1090px]:pt-[1800px] xl:pt-[1800px] min-[1400px]:pt-[2200px] 2xl:pt-[1800px] px-5 xl:px-0 grid grid-cols-1 lg:grid-cols-3 items-start gap-10">
              <div className="col-span-2">
                <p className="text-primaryBoldColor">
                  View our fruit boxes now
                </p>
                <Title className="capitalize text-[28px] md:text-[44px] lg:text-[64px] leading-noe">
                  Assorted fresh fruit boxes{" "}
                  <span className="text-secondaryTextColor">Delivered</span> to
                  your office
                </Title>
                <Link to={"/fruit-box"} className="py-2 md:py-5">
                  <Button className="py-2 xl:py-6 px-5 xl:px-20 ">
                    View Fruit Boxes
                  </Button>
                </Link>
              </div>
              <div>
                <img src={contactfruits} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
