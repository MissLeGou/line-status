import { useEffect, useState } from "react";

const useGetLineData = () => {
  const [loading, setLoading] = useState(false);
  const [linesData, setLinesData] = useState([]);

  useEffect(() => {
    const headers = new Headers({
      app_key: `${process.env.REACT_APP_APP_KEY}`,
    });

    const getLineData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_LINE_DATA_URL}`, {
          headers,
        });

        if (response?.status !== 200) {
          setLinesData([]);
          return;
        }

        const json = await response.json();

        setLinesData(json);
      } catch (error) {
        console.log(`error`, { error });
        setLinesData([]);
      } finally {
        setLoading(false);
      }
    };

    getLineData();
  }, []);

  return [linesData, loading];
};

export { useGetLineData };
