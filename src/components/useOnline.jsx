import { useEffect, useState } from "react";

const useOnline = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        
        window.addEventListener("online", (event) => { 
            setOnlineStatus(true);
           });
        
        window.addEventListener("offline", (event) => { 
            setOnlineStatus(false);
           });

    }, []);
    

    return onlineStatus;
}

export default useOnline;