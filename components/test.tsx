import { useEffect, useState } from "react";
interface Data {
  id: number;
  name: string;
  gender: string;
  age: number;
}

const Test = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <p className="text-white text-[100px]">Data:</p>
      {data.map((data, index) => (
        <div key={index}>
          <p>{data.name}</p>
          <p>{data.gender}</p>
          <p>{data.age}</p>
        </div>
      ))}
    </>
  );
};

export default Test;
