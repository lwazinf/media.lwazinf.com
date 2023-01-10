import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                className={`m-2 h-[70px] w-[70px] text-blue-300 hover:text-blue-500 transition-all duration-[2000ms]`}
              />
              <div className={`w-[2px] h-full rounded-md bg-blue-300`} />
            </>
          );
        })}
      </div>
      <div
        className={`flex relative overflow-hidden bg-black/5 w-full h-full flex-col items-center justify-start p-2 pt-16`}
      >
              <div className={`flex flex-col items-center justify-start w-full h-[78px] bg-white rounded-md mb-5`}/>
              <div className={`flex flex-col items-center justify-start w-full h-[78px] bg-white rounded-md mb-5`}/>
              <div className={`flex flex-col items-center justify-start w-full h-[78px] bg-white rounded-md mb-5`}/>
      </div>
    </div>
  );
};

// 👇👇👇 ================================ Aux Comp: RightPlate_

interface RightPlate_Props {}

const RightPlate_ = ({}: RightPlate_Props) => {
  return (
    <div
      className={`flex w-[450px] h-[400px] rounded-md flex-row items-center justify-center mx-2 p-2 bg-white shadow-md`}
    >
      <div
        className={`flex relative overflow-hidden w-full h-full rounded-md flex-row items-center justify-center transition-all duration-200`}
      >
        <div
          className={`flex absolute right-0 bottom-0 w-[80px] h-[30px] rounded-md flex-row items-center justify-center text-center bg-blue-300 hover:bg-blue-500 transition-all duration-400 cursor-pointer`}
          onClick={() => {
            console.log("Requesting Viewing..");
          }}
        >
          <p className={`font-medium text-white text-[14px]`}>Request</p>
        </div>
      </div>
    </div>
  );
};
