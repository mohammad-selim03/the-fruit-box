import { contactbanner, contactfruits, maplocation } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import Title from "@/components/DynamicComponents/Title";

const ContactUs = () => {
  return (
    <div>
      <div className="relative">
        <img src={contactbanner} alt="" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-20">
          <div className="max-h-[724px] w-[1120px] bg-secondaryTextColor text-white rounded-3xl px-[33px] py-[41px]">
            <div className="flex flex-col items-center gap-2 mx-auto">
              <div className="grid grid-cols-2 gap-[39px]  w-full">
                <div className="flex flex-col gap-[20px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-[28px]  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-yellow-200/50"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="px-[28px]  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-yellow-200/50"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="px-[28px]  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-yellow-200/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-[28px]  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-yellow-200/50"
                  />
                  <div className="flex flex-col gap-5 w-full">
                    <textarea
                      type="text"
                      placeholder="Comments"
                      className="px-[28px] w-full h-40  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-yellow-200/50"
                    />
                  </div>
                  <div className="mt-2.5">
                    <Button className="py-6 px-20 rounded-2xl w-full">
                      Submit
                    </Button>
                  </div>
                </div>
                <div>
                  <Title className="text-[48px] capitalize">
                    Ask us anything
                  </Title>
                  <p className="font-thin">
                    Our mission is simple: to bring the freshest, most
                    nutritious produce directly from our fields to your table.
                  </p>
                  <div className="flex flex-col gap-3 mt-5 font-thin">
                    <p className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_13863_3638)">
                            <path
                              d="M15.5 2.5C10.6688 2.5 6.75 6.41875 6.75 11.25C6.75 17.8125 15.5 27.5 15.5 27.5C15.5 27.5 24.25 17.8125 24.25 11.25C24.25 6.41875 20.3313 2.5 15.5 2.5ZM15.5 14.375C13.775 14.375 12.375 12.975 12.375 11.25C12.375 9.525 13.775 8.125 15.5 8.125C17.225 8.125 18.625 9.525 18.625 11.25C18.625 12.975 17.225 14.375 15.5 14.375Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_13863_3638">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Unit 115 11929 - 40th Street S.E. Calgary, Alberta T2Z 4M8
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_13863_3643)">
                            <path
                              d="M8.78125 13.4937C10.5813 17.0312 13.475 19.925 17.0188 21.725L19.7688 18.9688C20.1125 18.625 20.6063 18.525 21.0375 18.6625C22.4375 19.125 23.9438 19.375 25.5 19.375C26.1938 19.375 26.75 19.9312 26.75 20.625V25C26.75 25.6938 26.1938 26.25 25.5 26.25C13.7625 26.25 4.25 16.7375 4.25 5C4.25 4.30625 4.8125 3.75 5.5 3.75H9.875C10.5687 3.75 11.125 4.30625 11.125 5C11.125 6.55625 11.375 8.0625 11.8375 9.4625C11.975 9.89375 11.875 10.3875 11.5312 10.7312L8.78125 13.4937Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_13863_3643">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      587.351.5720
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_13863_3648)">
                            <path
                              d="M28.625 4.375H2.375C1.87772 4.375 1.40081 4.57254 1.04917 4.92417C0.697544 5.27581 0.5 5.75272 0.5 6.25L0.5 23.75C0.5 24.2473 0.697544 24.7242 1.04917 25.0758C1.40081 25.4275 1.87772 25.625 2.375 25.625H28.625C29.1223 25.625 29.5992 25.4275 29.9508 25.0758C30.3025 24.7242 30.5 24.2473 30.5 23.75V6.25C30.5 5.75272 30.3025 5.27581 29.9508 4.92417C29.5992 4.57254 29.1223 4.375 28.625 4.375ZM28.225 5.625L15.5 15.4625L2.775 5.625H28.225ZM1.75 23.4937V6.4125L11.3813 13.8562L1.75 23.4937ZM2.63125 24.375L12.375 14.6313L15.1125 16.75C15.2218 16.8341 15.3558 16.8797 15.4937 16.8797C15.6317 16.8797 15.7657 16.8341 15.875 16.75L18.625 14.6313L28.3687 24.375H2.63125ZM29.25 23.4937L19.6187 13.8562L29.25 6.4125V23.4937Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_13863_3648">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      info@thefruitbox.ca
                    </p>
                  </div>
                  <div className="py-4 mt-2">
                    <img src={maplocation} alt="" className="rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-96">
        <Container>
          <div className="flex items-center gap-5">
            <div className="flex flex-col w-[773px]">
              <p className="text-primaryBoldColor text-lg">
                View our fruit boxes now
              </p>
              <h1 className="text-[64px] font-bold pb-10">
                Assorted fresh fruit boxes <span className="text-secondaryTextColor">Delivered</span> to your office
              </h1>
              <Button className="py-5 px-10 rounded-xl shadow-black/20 shadow-md">
                View Fruit Boxes
              </Button>
            </div>
            <div>
              <img src={contactfruits} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
