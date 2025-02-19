import { fruitboxmodallogo } from "@/assets";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PropTypes from "prop-types";
import Button from "../DynamicComponents/Button";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export function SuccessModal({ isModalOpen, setIsModalOpen }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Dialog open={isModalOpen} className="rounded-xl">
      <DialogContent className="sm:max-w-[922px] h-[681px] bg-transparent p-5 rounded-2xl border-none">
        <div className="w-full h-full border-4 border-secondaryTextColor p-5   rounded-[50px] text-white">
          <div className="flex flex-col h-full items-center justify-center bg-secondaryTextColor p-10  rounded-3xl text-white">
            <div className="flex flex-col items-center">
              <img src={fruitboxmodallogo} alt="" />

              <div className="flex flex-col items-center gap-[26px] mt-[26px]">
                <p className="text-[40px]">Thank You for your order!</p>
                <p className="text-[20px] text-center">
                  We’re excited to add your office to our growing <br /> Fruit Box
                  Family
                </p>
                <p className="text-[20px] text-center">
                  Your order details have been sent to the email <br /> provide{" "}
                </p>
                <p className="text-[20px] text-center">
                  We’ll contact you shortly to confirm everything <br /> and arrange
                  payment option.
                </p>
                <Link onClick={() => handleNavigate()}>
                  <Button className="py-5 text-xl tracking-wider font-medium px-16 shadow-black/20 shadow-md">RETURN TO MAIN</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

SuccessModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};
