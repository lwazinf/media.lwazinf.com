import {
  faBolt,
  faCheckCircle,
  faCoins,
  faMapMarkerAlt,
  faPeopleGroup,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  return (
    <div
      className={`flex w-[800px] min-h-screen flex-row items-center justify-center`}
    >
      <LeftPlate_ />
      <RightPlate_ />
    </div>
  );
};

export default CenterStage_;

// 👇👇👇 ================================ Aux Comp: LeftPlate_

interface LeftPlate_Props {}

const LeftPlate_ = ({}: LeftPlate_Props) => {
  const userData_ = [2, 2, 2];
  return (
    <div
      className={`flex relative overflow-hidden w-[350px] h-[400px] rounded-md flex-row items-center justify-start mx-2 bg-white shadow-md`}
    >
      <div
        className={`flex relative overflow-hidden w-[80px] h-full flex-col items-center justify-start py-14`}
      >
        {userData_.map((obj) => {
          return (
            <>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`m-2 h-[70px] w-[70px] text-blue-300 transition-all duration-[2000ms]`}
              />
              <div className={`w-[2px] h-full rounded-md bg-blue-300`} />
            </>
          );
        })}
      </div>
      <div
        className={`flex relative overflow-hidden bg-black/5 w-full h-full flex-col items-center justify-start p-2 pt-[65px]`}
      >
        <div
          className={`flex flex-col items-center justify-start w-full h-[78px] bg-white/50 rounded-md rounded-tl-none mb-5`}
        />
        <div
          className={`flex flex-col items-center justify-start w-full h-[78px] bg-white/50 rounded-md rounded-tl-none mb-5`}
        />
        <div
          className={`flex flex-col items-center justify-start w-full h-[78px] bg-white/50 rounded-md rounded-tl-none mb-4`}
        />
      </div>
    </div>
  );
};

// 👇👇👇 ================================ Aux Comp: RightPlate_

interface RightPlate_Props {}

const RightPlate_ = ({}: RightPlate_Props) => {
  return (
    <div
      className={`flex w-[450px] h-[400px] rounded-md flex-row items-center justify-center mx-2 bg-white shadow-md`}
    >
      <div
        className={`flex relative overflow-hidden w-full h-full rounded-md flex-row items-center justify-center transition-all duration-200 bg-black/5`}
      >
        <ContentArea_ />
        <div
          className={`flex absolute right-0 bottom-0 w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-white hover:bg-blue-500/70 transition-all duration-400 cursor-pointer m-1`}
          onClick={() => {
            console.log("Requesting Viewing..");
          }}
        >
          <div
            className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center bg-blue-500/50 hover:bg-white transition-all duration-400 hover:text-blue-500/70 text-white`}
          >
            <p className={`font-medium text-[14px]`}>Request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 👇👇👇 ================================ Aux Comp: ContentArea_

interface ContentArea_Props {}

const ContentArea_ = ({}: ContentArea_Props) => {
  const [hoverData_, setHoverData_] = useState("");

  const [acc_, setAcc_] = useState(false);
  const [images_, setImages_] = useState(false);
  const [price_, setPrice_] = useState(false);
  const [map_, setMap_] = useState(false);
  const [students_, setStudents_] = useState(false);
  const [services_, setServices_] = useState(false);

  const acc = "Select your accreditation level..";
  const images = "Select 3 images of your student accom..";
  const price = "Provide a price per room..";
  const map = "Find your student accom on Google Maps..";
  const students = "How many rooms are available??";
  const services = "What services do you provide at your student accom?";
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full relative overflow-hidden`}
    >
      <div
        className={`flex flex-col justify-center items-center w-full h-[30px] absolute top-[80px] left-0 text-[15px] font-medium text-blue-400 transition-all duration-500 ${
          hoverData_.length > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        {hoverData_}
      </div>
      {[
        { data: acc, options: ['Prov.', 'Fully'] },
        { data: images, options: ['Select Image'] },
        { data: map, options: ['Select Address'] },
        { data: students, options: [] },
        { data: services, options: ['Internet', 'Electricity', 'Water'] },
        { data: price, options: [] },
      ].map((obj) => {
        return (
          <div
            className={`flex flex-row justify-center items-center w-full h-[80px] absolute bottom-10 left-0 text-[15px] font-medium text-blue-400 transition-all duration-500 ${
              hoverData_ == obj.data
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {obj.options.map((obj_) => {
              return (
                <div
                  className={`flex w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-white hover:bg-blue-500/70 transition-all duration-400 cursor-pointer m-1`}
                  onClick={() => {
                    console.log("Requesting Viewing..");
                  }}
                >
                  <div
                    className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center bg-blue-500/50 hover:bg-white transition-all duration-400 hover:text-blue-500/70 text-white`}
                  >
                    <p className={`font-medium text-[14px]`}>{obj_}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={`m-auto grid grid-cols-3 gap-2`}>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != acc
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : acc_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == acc
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != acc) {
              setHoverData_("Accreditation");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != acc) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != acc) {
              setHoverData_(acc);
            } else {
              setHoverData_("Accreditation");
            }
            // setAcc_(!acc_);
          }}
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != images
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : images_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == images
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != images) {
              setHoverData_("Images");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != images) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != images) {
              setHoverData_(images);
            } else {
              setHoverData_("Images");
            }
            // setImages_(!images_);
          }}
        >
          <FontAwesomeIcon
            icon={faCamera}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != map
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : map_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == map
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != map) {
              setHoverData_("Location");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != map) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != map) {
              setHoverData_(map);
            } else {
              setHoverData_("Location");
            }
            // setMap_(!map_);
          }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != students
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : students_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == students
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != students) {
              setHoverData_("Students");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != students) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != students) {
              setHoverData_(students);
            } else {
              setHoverData_("Students");
            }
            // setStudents_(!students_);
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != services
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : services_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == services
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != services) {
              setHoverData_("Services");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != services) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != services) {
              setHoverData_(services);
            } else {
              setHoverData_("Services");
            }
            // setServices_(!services_);
          }}
        >
          <FontAwesomeIcon
            icon={faBolt}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            hoverData_.split(" ").length > 1 && hoverData_ != price
              ? "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white opacity-50 pointer-events-none"
              : price_
              ? "bg-blue-500/80 hover:bg-blue-500/40 text-white hover:text-white"
              : hoverData_ == price
              ? "bg-blue-500/40 text-white"
              : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
          } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
          onMouseEnter={() => {
            if (hoverData_ != price) {
              setHoverData_("Price");
            }
          }}
          onMouseLeave={() => {
            if (hoverData_ != price) {
              setHoverData_("");
            }
          }}
          onClick={() => {
            if (hoverData_ != price) {
              setHoverData_(price);
            } else {
              setHoverData_("Price");
            }
            // setPrice_(!price_);
          }}
        >
          <FontAwesomeIcon
            icon={faCoins}
            className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
          />
        </div>
      </div>
    </div>
  );
};
