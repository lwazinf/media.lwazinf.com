import {
  faBolt,
  faCheckCircle,
  faCoins,
  faMapMarkerAlt,
  faPeopleGroup,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import {
  CurrentUser,
  CurrentElement,
  ImageFiles,
  AccValue,
  ImagesValue,
  PriceValue,
  MapValue,
  StudentsValue,
  ServicesValue,
  WhereAreWe,
} from "./atoms/atoms";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import PlacesAC_ from "./PlacesAC_";

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
  const [currentUser_, setCurrentUser_] = useRecoilState(CurrentUser);
  const [imageFiles_, setImageFiles_] = useRecoilState(ImageFiles);
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
  const [imageFiles_, setImageFiles_] = useRecoilState(ImageFiles);

  const [acc__, setAcc__] = useRecoilState(AccValue);
  const [images__, setImages__] = useRecoilState(ImagesValue);
  const [price__, setPrice__] = useRecoilState(PriceValue);
  const [map__, setMap__] = useRecoilState(MapValue);
  const [students__, setStudents__] = useRecoilState(StudentsValue);
  const [services__, setServices__] = useRecoilState(ServicesValue);

  const [whereAreWe_, setWhereAreWe_] = useRecoilState(WhereAreWe);
  const [currentElement_, setCurrentElement_] = useRecoilState(CurrentElement);

  const buttonMap_ = {
    Price: "set",
    Students: "set",
    Services: "set",
    Images: null,
    Acc: null,
    Map: "set",
  };

  return (
    <div
      className={`flex w-[450px] h-[400px] rounded-md flex-row items-center justify-center mx-2 bg-white shadow-md`}
    >
      <div
        className={`flex relative overflow-hidden w-full h-full rounded-md flex-row items-center justify-center transition-all duration-200 bg-black/0`}
      >
        {imageFiles_.length != 0 ? (
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[800ms] opacity-20`}
            src={imageFiles_[1]}
          />
        ) : (
          <div className={`absolute top-0 left-0 pointer-events-none`} />
        )}
        <div
          className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm ${
            imageFiles_.length == 0 ? "bg-black/5" : "bg-black/5"
          }`}
        />
        <ContentArea_ />
        <div
          className={`${
            currentElement_.length == 0
              ? "opacity-0"
              : buttonMap_[whereAreWe_] == null ||
                (whereAreWe_ == "Services" && services__.length < 1)
              ? "opacity-0"
              : "opacity-100"
          } flex absolute right-0 bottom-0 w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-blue-500/80 hover:bg-blue-500 transition-all duration-400 cursor-pointer m-1`}
          onClick={() => {
            setCurrentElement_("");
            console.log({
              acc: acc__,
              images: images__,
              price: price__,
              map: map__,
              students: students__,
              services: services__,
            });
          }}
        >
          <div
            className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center transition-all duration-400 hover:text-white text-white/70`}
          >
            {
              <p className={`font-medium text-[14px]`}>
                {buttonMap_[whereAreWe_]}
              </p>
            }
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
  const [accomObj_, setAccomObj_] = useState({});

  const [acc_, setAcc_] = useState(false);
  const [images_, setImages_] = useState(false);
  const [price_, setPrice_] = useState(false);
  const [map_, setMap_] = useState(false);
  const [students_, setStudents_] = useState(false);
  const [services_, setServices_] = useState(false);

  const [acc__, setAcc__] = useRecoilState(AccValue);
  const [images__, setImages__] = useRecoilState(ImagesValue);
  const [price__, setPrice__] = useRecoilState(PriceValue);
  const [map__, setMap__] = useRecoilState(MapValue);
  const [students__, setStudents__] = useRecoilState(StudentsValue);
  const [services__, setServices__] = useRecoilState(ServicesValue);

  const acc = "Select your accreditation level..";
  const images = "Select 3 images of your student accom..";
  const price = "Provide a price per room..";
  const map = "Find your student accom on Google Maps..";
  const students = "How many rooms are available??";
  const services = "What services do you provide at your student accom?";

  const [imageFiles_, setImageFiles_] = useRecoilState(ImageFiles);
  const [whereAreWe_, setWhereAreWe_] = useRecoilState(WhereAreWe);
  const [currentElement_, setCurrentElement_] = useRecoilState(CurrentElement);

  const onMutate = (e: any) => {
    if (e.target.files) {
      // setModal(true)
      const tempData_: any = [
        e.target.files[0],
        URL.createObjectURL(e.target.files[0]),
      ];
      setImageFiles_(tempData_);
      console.log(e.target.files[0]);
    } else {
      console.log("No Images Selected!");
    }
  };

  // const storeImage = async (image) => {
  //   return new Promise((resolve, reject) => {
  //     const storage = getStorage();
  //     const fileName = `${image.name}`;

  //     const storageRef = ref(storage, "images/" + fileName);

  //     const uploadTask = uploadBytesResumable(storageRef, image);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //         setModal(!modal);
  //       },
  //       (error) => {
  //         reject(error);
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           resolve(downloadURL);
  //           setImages(images.push(downloadURL));
  //           await addDoc(collection(db, "gridImages"), {
  //             dp: "https://images.pexels.com/photos/5711040/pexels-photo-5711040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //             timestamp: serverTimestamp(),
  //             userName: auth.currentUser != null ? auth.currentUser.email : null,
  //             UID: auth.currentUser != null ? auth.currentUser.uid : null,
  //             imageName: fileName,
  //             url: images[2],
  //             favorite: [],
  //           });
  //         });
  //       }
  //     );
  //   });
  // };

  const mockData_ = [
    {
      data: acc,
      optionType: "select",
      options: ["N/A", "Prov.", "Full"],
      name: "Acc",
      hoverData: "Accreditation",
      permission: acc_,
      icon: faCheckCircle,
    },
    {
      data: images,
      optionType: "images",
      options: ["Select"],
      name: "Images",
      hoverData: "Images",
      permission: images_,
      icon: faCamera,
    },
    {
      data: map,
      optionType: "map",
      options: ["Select"],
      name: "Map",
      hoverData: "Location",
      permission: map_,
      icon: faMapMarkerAlt,
    },
    {
      data: students,
      optionType: "input",
      options: [0],
      name: "Students",
      hoverData: "Students",
      permission: students_,
      icon: faPeopleGroup,
    },
    {
      data: services,
      optionType: "toggle",
      options: ["Internet", "Electricity", "Water"],
      name: "Services",
      hoverData: "Services",
      permission: services_,
      icon: faBolt,
    },
    {
      data: price,
      optionType: "input",
      options: [0],
      name: "Price",
      hoverData: "Pricing",
      permission: price_,
      icon: faCoins,
    },
  ];

  useEffect(() => {
    setImages__(imageFiles_);
  }, [imageFiles_]);

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
              if (obj.optionType == "images") {
                return (
                  <label htmlFor="images">
                    <div
                      className={`flex w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-blue-500/40 hover:bg-blue-500 transition-all duration-400 cursor-pointer m-1`}
                      onClick={() => {
                        if (obj.data == images) {
                          setAccomObj_({ ...accomObj_, Images: imageFiles_ });
                          setImages_(!images);
                          setImages__(imageFiles_);
                          setHoverData_("");
                          setCurrentElement_("");
                        }
                      }}
                      key={obj_}
                    >
                      <div
                        className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center transition-all duration-400 text-white/70 hover:text-white`}
                      >
                        <p className={`font-medium text-[14px]`}>{obj_}</p>
                      </div>
                    </div>
                  </label>
                );
              }
              if (obj.optionType == "map") {
                return (
                  <div
                    className={`flex w-full h-full flex-row items-center justify-center text-center transition-all duration-400`}
                    // onClick={() => {
                    //   if (obj.data == map) {
                    //       setAccomObj_({ ...accomObj_, Map: obj_ });
                    //       setMap_(!map_);
                    //       setHoverData_("");
                    //       setCurrentElement_("");
                    //   }
                    // }}
                    key={obj_}
                  >
                    <PlacesAC_ />
                  </div>
                );
              }
              if (obj.optionType == "toggle") {
                return (
                  <div
                    className={`${
                      services__.includes(obj_)
                        ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                        : "hover:bg-blue-500/40 bg-white/50 hover:text-white text-blue-300"
                    } flex w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center transition-all duration-400 cursor-pointer m-1`}
                    onClick={() => {
                      if (obj.data == services) {
                        setAccomObj_({ ...accomObj_, Services: obj_ });
                        if (services__.includes(obj_)) {
                          setServices__(
                            services__.filter(function (e: any) {
                              return e !== obj_;
                            })
                          );
                          if (services__.length == 1) {
                            setAccomObj_(
                              Object.entries(accomObj_)
                                .filter(([key, _]) => key !== "Services")
                                .reduce(
                                  (res, [key, value]) => ({
                                    ...res,
                                    [key]: value,
                                  }),
                                  {}
                                )
                            );
                          }
                        } else {
                          setServices__([...services__, obj_]);
                        }
                        // setServices_(!services_);
                        // setHoverData_("");
                        // setCurrentElement_("");
                      }
                    }}
                    key={obj_}
                  >
                    <div
                      className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center transition-all duration-400`}
                    >
                      <p className={`font-medium text-[14px]`}>{obj_}</p>
                    </div>
                  </div>
                );
              }
              if (obj.optionType == "input") {
                return (
                  <div
                    className={`flex rounded-md flex-row items-center justify-center text-center transition-all duration-400`}
                    onClick={() => {
                      if (obj.data == students) {
                        // setAccomObj_({ ...accomObj_, Students: obj_ });
                        // setStudents_(!students_);
                        // setHoverData_("");
                        // setCurrentElement_("");
                      } else if (obj.data == price) {
                        // setAccomObj_({ ...accomObj_, Price: obj_ });
                        // setPrice_(!price_);
                        // setHoverData_("");
                        // setCurrentElement_("");
                      }
                    }}
                    key={obj_}
                  >
                    <input
                      type={`text`}
                      className={``}
                      value={obj.data == students ? students__ : price__}
                      placeholder={`${
                        obj.data == students
                          ? "No. of students.."
                          : "Price of rent.."
                      }`}
                      onChange={(e) => {
                        if (obj.data == students) {
                          return setStudents__(e.target.value);
                        } else {
                          return setPrice__(e.target.value);
                        }
                      }}
                    />
                  </div>
                );
              }
              return (
                <div
                  className={`flex w-[81px] h-[31px] rounded-md flex-row items-center justify-center text-center bg-blue-500/40 hover:bg-blue-500 hover:text-white text-blue-300 transition-all duration-400 cursor-pointer m-1`}
                  onClick={() => {
                    if (obj.data == acc) {
                      setAccomObj_({ ...accomObj_, Acc: obj_ });
                      setAcc_(!acc_);
                      setAcc__(obj_.toString());
                      setHoverData_("");
                      setCurrentElement_("");
                    }
                  }}
                  key={obj_}
                >
                  <div
                    className={`flex w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center transition-all duration-400 text-white/70 hover:text-white`}
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
              className={`backdrop-blur-sm ${
                obj.name == "Service" && services__.length != 0
                  ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                  : obj.name == "Price" && price__.length != 0
                  ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                  : obj.name == "Students" && students__.length != 0
                  ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                  : Object.keys(accomObj_).includes(obj.name) &&
                    currentElement_ != obj.name &&
                    hoverData_ == "Remove selection?" // Selected
                  ? "bg-blue-500/40 text-white"
                  : Object.keys(accomObj_).includes(obj.name) // Selected
                  ? "bg-blue-500/80 hover:bg-red-500/40 text-white"
                  : currentElement_ == obj.name // On Focus
                  ? "bg-blue-500/80 hover:bg-blue-500/60 text-white"
                  : "bg-white hover:bg-blue-500/40 text-blue-300 hover:text-white"
              } ${
                currentElement_ == obj.name || currentElement_.length < 2
                  ? "opacity-100"
                  : "opacity-50"
              } transition-all duration-400 rounded-md cursor-pointer w-[80px] h-[80px] flex flex-row items-center justify-center`}
              onMouseEnter={() => {
                if (currentElement_.length > 0) {
                } else if (Object.keys(accomObj_).includes(obj.name)) {
                  setHoverData_("Remove selection?!");
                } else {
                  setHoverData_(obj.hoverData);
                }
              }}
              onMouseLeave={() => {
                if (currentElement_.length > 0) {
                } else if (Object.keys(accomObj_).includes(obj.name)) {
                  setHoverData_("");
                } else {
                  setHoverData_("");
                }
              }}
              onClick={() => {
                if (obj.name == currentElement_ || currentElement_ == "") {
                  if (imageFiles_.length != 0 && obj.name == "Images") {
                    setImageFiles_([]);
                  }
                  if (obj.name == "Acc") {
                    setAcc_(!acc_);
                    setAcc__('')
                  }
                  if (obj.name == "Students") {
                    setAccomObj_(
                      Object.entries(accomObj_)
                        .filter(([key, _]) => key !== "Students")
                        .reduce(
                          (res, [key, value]) => ({ ...res, [key]: value }),
                          {}
                        )
                    );
                    setStudents__("");
                    setCurrentElement_("");
                    setWhereAreWe_("");
                  }
                  if (obj.name == "Price") {
                    setAccomObj_(
                      Object.entries(accomObj_)
                        .filter(([key, _]) => key !== "Price")
                        .reduce(
                          (res, [key, value]) => ({ ...res, [key]: value }),
                          {}
                        )
                    );
                    setPrice__("");
                    setCurrentElement_("");
                    setWhereAreWe_("");
                  }
                  if (obj.name == "Services" && services__.length != 0) {
                    setServices__([]);
                    setAccomObj_(
                      Object.entries(accomObj_)
                        .filter(([key, _]) => key !== "Services")
                        .reduce(
                          (res, [key, value]) => ({ ...res, [key]: value }),
                          {}
                        )
                    );
                    setCurrentElement_("");
                    setWhereAreWe_("");
                    setHoverData_(obj.hoverData);
                  }
                  if (Object.keys(accomObj_).includes(obj.name)) {
                    setAccomObj_(
                      Object.entries(accomObj_)
                        .filter(([key, _]) => key !== obj.name)
                        .reduce(
                          (res, [key, value]) => ({ ...res, [key]: value }),
                          {}
                        )
                    );
                    setCurrentElement_("");
                    setWhereAreWe_("");
                    setHoverData_(obj.hoverData);
                  } else {
                    if (currentElement_ == obj.name) {
                      setCurrentElement_("");
                      setWhereAreWe_("");
                      setHoverData_(obj.hoverData);
                    } else {
                      setCurrentElement_(obj.name);
                      setWhereAreWe_(obj.name);
                      setHoverData_(obj.data);
                    }
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
      <input
        className="formInputFile"
        type="file"
        id="images"
        max="6"
        accept=".jpg,.png,.jpeg"
        onChange={onMutate}
        multiple
        required
        hidden
      />
    </div>
  );
};
