import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

interface Header_Props {
    
}
 
const Header_ = ({}:Header_Props) => {
    const logout = async () => {
        return await signOut(auth).then(() => {
            console.log('user signed in..')
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return ( 
        <div className={`flex flex-col justify-center items-center fixed right-0 top-0 w-[80px] min-h-screen bg-white/50`}>
            <FontAwesomeIcon
                icon={faLeaf}
                className={`m-3 mb-1 h-[20px] w-[20px] text-green-500/80 hover:text-green-500/50 transition-all duration-200 absolute top-3 cursor-pointer`}
                onClick={async () => {
                    await logout()
                    // console.log(auth.currentUser)
                }}
              />
        </div>
     );
}
 
export default Header_;