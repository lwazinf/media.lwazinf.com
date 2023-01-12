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

import { useRecoilState } from "recoil";
import { CurrentUser } from "./atoms/atoms";
import { auth } from "../firebase";

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
  const userData_ = [0, 1, 2];
  const [currentUser_, setCurrentUser_] = useRecoilState(CurrentUser)
  return (
    <div
      className={`flex relative overflow-hidden w-[350px] h-[400px] rounded-md flex-row items-center justify-start mx-2 bg-white shadow-md`}
    >
      <div
        className={`flex relative overflow-hidden w-[80px] h-full flex-col items-center justify-center py-16`}
      >
        {userData_.map((obj) => {
          return (
            <div
              key={obj}
              className={`
            flex flex-col w-full h-full items-center justify-center
            `}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`m-3 mb-1 h-[20px] w-[20px] text-blue-300 transition-all duration-[2000ms]`}
              />
              <div className={`w-[2px] h-full rounded-md bg-blue-300`} />
            </div>
          );
        })}
      </div>
      <div
        className={`flex relative overflow-hidden bg-black/5 w-full h-full flex-col items-center justify-center px-2 pt-10`}
      >
        {userData_.map((obj) => {
          return (
            <div
              className={`flex flex-col items-center justify-start w-full h-[78px] bg-white/50 rounded-md rounded-tl-none mb-5`}
              key={obj}
            />
          );
        })}
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
  const [currentElement_, setCurrentElement_] = useState("");
  const [accomObj_, setAccomObj_] = useState({});

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

  const mockData_ = [
    {
      data: acc,
      options: ["N/A", "Prov.", "Full"],
      name: "Acc",
      hoverData: "Accreditation",
      permission: acc_,
      icon: faCheckCircle,
    },
    {
      data: images,
      options: ["Select"],
      name: "Images",
      hoverData: "Images",
      permission: images_,
      icon: faCamera,
    },
    {
      data: map,
      options: ["Select"],
      name: "Map",
      hoverData: "Location",
      permission: map_,
      icon: faMapMarkerAlt,
    },
    {
      data: students,
      options: [],
      name: "Students",
      hoverData: "Students",
      permission: students_,
      icon: faPeopleGroup,
    },
    {
      data: services,
      options: ["Internet", "Electricity", "Water"],
      name: "Services",
      hoverData: "Services",
      permission: services_,
      icon: faBolt,
    },
    {
      data: price,
      options: [],
      name: "Price",
      hoverData: "Pricing",
      permission: price_,
      icon: faCoins,
    },
  ];

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

      {mockData_.map((obj) => {
        return (
          <div
            className={`flex flex-row justify-center items-center w-full h-[80px] absolute left-0 text-[15px] font-medium text-blue-400 transition-all duration-500 ${
              currentElement_ == obj.name
                ? "opacity-100 pointer-events-auto bottom-10"
                : "opacity-0 pointer-events-none bottom-5"
            }`}
            key={obj.data}
          >
            {obj.options.map((obj_) => {
              return (
                <div
                  className={`flex w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-white hover:bg-blue-500/70 transition-all duration-400 cursor-pointer m-1`}
                  onClick={() => {
                    if (obj.data == acc) {
                      setAccomObj_({ ...accomObj_, Acc: obj_ });
                      setAcc_(!acc_);
                      setHoverData_('')
                      setCurrentElement_("");
                    } else if (obj.data == images) {
                      setAccomObj_({ ...accomObj_, Images: obj_ });
                      setImages_(!images);
                      setHoverData_('')
                      setCurrentElement_("");
                    } else if (obj.data == map) {
                      setAccomObj_({ ...accomObj_, Map: obj_ });
                      setMap_(!map_);
                      setHoverData_('')
                      setCurrentElement_("");
                    } else if (obj.data == students) {
                      setAccomObj_({ ...accomObj_, Students: obj_ });
                      setStudents_(!students_);
                      setHoverData_('')
                      setCurrentElement_("");
                    } else if (obj.data == price) {
                      setAccomObj_({ ...accomObj_, Price: obj_ });
                      setPrice_(!price_);
                      setHoverData_('')
                      setCurrentElement_("");
                    } else {
                      setAccomObj_({ ...accomObj_, Services: obj_ });
                      setServices_(!services_);
                      setHoverData_('')
                      setCurrentElement_("");
                    }
                  }}
                  key={obj_}
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
        {mockData_.map((obj) => {
          return (
            <div
              className={`${
                Object.keys(accomObj_).includes(obj.name) &&
                currentElement_ != obj.name &&
                hoverData_ == "Remove selection?" // Selected
                  ? "bg-blue-500/40 text-white"
                  : Object.keys(accomObj_).includes(obj.name) // Selected
                  ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                  : currentElement_ == obj.name // On Focus
                  ? "bg-blue-500/80 hover:bg-blue-500/60 text-white"
                  : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
              } ${currentElement_ == obj.name || currentElement_.length < 2 ? 'opacity-100' : 'opacity-50'} transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
              onMouseEnter={() => {
                if(currentElement_.length > 0){

                }else if(Object.keys(accomObj_).includes(obj.name)){
                  setHoverData_('Remove selection?!')
              }else{
                  setHoverData_(obj.hoverData)
                }
              }}
              onMouseLeave={() => {
                if(currentElement_.length > 0){

                }else if(Object.keys(accomObj_).includes(obj.name)){
                  setHoverData_('')
                }else{
                  setHoverData_('')
                }
              }}
              onClick={() => {
                console.log(auth.currentUser)
                if(Object.keys(accomObj_).includes(obj.name)){
                  setAccomObj_(
                    Object.entries(accomObj_)
                      .filter(([key, _]) => key !== obj.name)
                      .reduce(
                        (res, [key, value]) => ({ ...res, [key]: value }),
                        {}
                      )
                  );
                  setHoverData_(obj.hoverData)
                }else{
                  if(currentElement_ == obj.name){
                    setCurrentElement_('')
                  setHoverData_(obj.hoverData)
                  }else{
                    setCurrentElement_(obj.name)
                    setHoverData_(obj.data)
                  }
                }
              }}
              key={obj.name}
            >
              <FontAwesomeIcon
                icon={obj.icon}
                className={`m-2 h-[25px] w-[25px] transition-all duration-200`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
