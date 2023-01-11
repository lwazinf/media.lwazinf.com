import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { Navi } from "./atoms/atoms";

interface LoginPage_Props {}

const LoginPage_ = ({}: LoginPage_Props) => {
  const [navi_, setNavi_] = useRecoilState(Navi);
  return (
    <div
      className={`flex relative overflow-hidden w-[350px] h-[400px] rounded-md flex-row items-center justify-start mx-2`}
    >
      <div className={`m-auto grid grid-cols-2 gap-2`}>
        <div
          className={`flex relative w-[70px] h-[70px] flex-row items-center justify-center transition-all duration-200 text-[20px] hover:text-[24px]`}
          onClick={() => {
            setNavi_("centerStage");
          }}
        >
          <div
            className={`flex relative overflow-hidden w-[70px] h-[70px] hover:w-[60px] hover:h-[60px] rounded-md flex-row items-center justify-center bg-white shadow-md cursor-pointer transition-all duration-400`}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className={`m-3 text-black/50 transition-all duration-400`}
            />
          </div>
        </div>
        <div
          className={`flex relative w-[70px] h-[70px] flex-row items-center justify-center transition-all duration-200 text-[20px] hover:text-[24px]`}
          onClick={() => {
            setNavi_("centerStage");
          }}
        >
          <div
            className={`flex relative overflow-hidden w-[70px] h-[70px] hover:w-[60px] hover:h-[60px] rounded-md flex-row items-center justify-center bg-white shadow-md cursor-pointer transition-all duration-400`}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className={`m-3 text-black/50 transition-all duration-400`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage_;
