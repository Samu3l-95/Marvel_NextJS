import { useEffect, useState } from "react";
import { GetApi } from "../pages/api/Api";

export const ControllerContentPage = () => {
  const [data, setData] = useState();

  const dataApi = () => {
    GetApi().then((res) => {
      setData(res?.data?.results);
    });
  };

  useEffect(() => {
    dataApi();
  }, []);

  return { data, dataApi };
};
