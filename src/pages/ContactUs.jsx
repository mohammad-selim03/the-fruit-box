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

        const map = L.map("map").setView(calgaryOffice, 15);

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
            className="absolute -top-28 left-16 max-w-[284px]"
          />
          <div className="absolute flex flex-col gap-3 text-[#38302F] w-[792px] mx-[280px] ml-96 z-20">
            <Title
              className="capitalize font-bold text-center md:text-[35px] text-[35px]"
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
            <p className="pb-10 text-center font-bold">
              Become the office hero! Energize your workplace with fresh fruit
              deliveries.
            </p>
            <Contact />
          </div>

          <div className="absolute -top-20 z-10">
            <div>
              <img src={aboutbg} alt="" className="w-full h-full" />
              <img
                src={contactpageimg}
                alt=""
                className="absolute top-40 right-0"
              />

              <div className="absolute top-[60%] left-[10%] flex items-center justify-between">
                <div className="text-white w-[772px] text-left">
                  <Title>
                    CONNECT
                    <span className="text-primaryLightColor">WITH US</span>
                  </Title>
                  <p className="font-thin text-primaryLightColor -mt-2">
                    Reliable Office Fruit Delivery.
                  </p>
                  <div className="font-thin mt-2 flex flex-col gap-3">
                    <p className="grid grid-cols-2 gap-5">
                      <span>The Fruit Box Ltd.</span>
                      <span>Office: 587.351.5720</span>
                      <span>#115, 11929 – 40th Street S.E.</span>
                      <span>mail: info @ thefruitbox.ca</span>
                    </p>
                    <span>Calgary, Alberta </span>
                    <span>T2Z 4M8 </span>
                  </div>
                </div>
                <div className="w-[560px]">
                  <div
                    id="map"
                    className="rounded-lg border border-gray-200 shadow-lg z-30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <div className=" py-20 pt-[1800px] grid grid-cols-3 items-start gap-10">
              <div className="col-span-2">
                <p className="text-primaryBoldColor">
                  View our fruit boxes now
                </p>
                <Title className="capitalize  leading-noe">
                  Assorted fresh fruit boxes{" "}
                  <span className="text-secondaryTextColor">Delivered</span> to
                  your office
                </Title>
                <Link to={"/fruit-box"} className="py-5">
                  <Button className="py-6 px-20 ">View Fruit Boxes</Button>
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
