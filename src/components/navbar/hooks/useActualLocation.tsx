import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

/*
useActualLocation is a wrapper around useLocation.
This forces a rerender after the location has changed as it seems that the location is not up-to-date otherwise.
More info: https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
 */
export default function useActualLocation() {
    const [toggler, setToggler] = useState(false); // Workaround to force rerender on location change
    const location = useLocation();
    useEffect(() => {
        setToggler(!toggler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return location;
}