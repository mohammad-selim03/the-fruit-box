import { contactfruits, contactpageimg, reminder } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import Title from "@/components/DynamicComponents/Title";
import "leaflet/dist/leaflet.css";
import { aboutbg } from "@/assets";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Contact from "@/components/HomePageComponents/Contact";
import { Link } from "react-router";
import { useEffect } from "react";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";
const ContactUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !mapLoaded) {
      import("leaflet").then((L) => {
        if (!document.getElementById("map")) return;

        const calgaryOffice = [51.0447, -113.9317];

        const map = L.map("map").setView(calgaryOffice, 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Set default Google Maps-like marker
        const defaultMarker = L.icon({
          iconUrl: markerIcon,
          shadowUrl: markerShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        L.marker(calgaryOffice, { icon: defaultMarker })
          .addTo(map)
          .bindPopup(
            "<b>The Fruit Box Ltd.</b><br>#115, 11929 – 40th Street S.E.<br>Calgary, Alberta T2Z 4M8"
          )
          .openPopup();

        setTimeout(() => {
          map.invalidateSize();
        }, 500);

        setMapLoaded(true);
      });
    }
  }, [mapLoaded]);

  return (
    <div>
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
          <div className="absolute flex flex-col gap-3 text-[#38302F] max-w-[792px] mx-[280px] ml-0 px-5 xl:ml-96 z-20 mt-40 md:mt-48 xl:mt-0 w-full">
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
            <p className="pb-3 lg:pb-10 text-center font-bold">
              Become the office hero! Energize your workplace with fresh fruit
              deliveries.
            </p>
            <div className="w-full">
              <Contact />
            </div>
          </div>

          <div className="absolute top-[35%] lg:top-[25%] 2xl:-top-0 z-10">
            <div>
              <img
                src={aboutbg}
                alt=""
                className="w-full h-[800px] md:h-full"
              />
              <img
                src={contactpageimg}
                alt=""
                className="absolute top-[30%] md:top-[10%] right-0 w-32 sm:w-[20%] max-w-[50%]"
              />
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-start justify-between w-[80%]">
                <div className="text-white max-w-[772px] text-left w-full -mt-10 sm:mt-0">
                  <Title
                    className="text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]"
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
                  <p className="font-thin text-primaryLightColor -mt-2">
                    Reliable Office Fruit Delivery.
                  </p>
                  <div className="font-thin mt-[32px] flex flex-col gap-3">
                    <p className="grid grid-cols-2 gap-5 text-xs sm:text-sm">
                      <span>The Fruit Box Ltd.</span>
                      <span>Office: 587.351.5720</span>
                      <span>#115, 11929 – 40th Street S.E.</span>
                      <span>mail: info @ thefruitbox.ca</span>
                    </p>
                    <span className="text-xs sm:text-sm">Calgary, Alberta </span>
                    <span className="text-xs sm:text-sm">T2Z 4M8 </span>
                  </div>
                </div>
                <div className="w-[350px] sm:w-[300px] md:w-[400px] h-[460px] md:h-[560px] lg:w-[560px] mt-2">
                  <div
                    id="map"
                    className="rounded-lg border border-gray-200 shadow-lg z-30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <div className="pt-[1900px] px-5 xl:px-0 sm:pt-[1800px] grid grid-cols-1 lg:grid-cols-3 items-start gap-10">
              <div className="col-span-2">
                <p className="text-primaryBoldColor">
                  View our fruit boxes now
                </p>
                <Title className="capitalize  leading-noe">
                  Assorted fresh fruit boxes{" "}
                  <span className="text-secondaryTextColor">Delivered</span> to
                  your office
                </Title>
                <Link to={"/fruit-box"} className="py-2 md:py-5">
                  <Button className="py-2 xl:py-6 px-5 xl:px-20 ">View Fruit Boxes</Button>
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
