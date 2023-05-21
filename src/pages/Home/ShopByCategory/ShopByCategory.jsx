import { useEffect, useState } from "react";
import "./ShopByCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [subCategoryToys, setSubCategoryToys] = useState([]);

  useEffect(() => {
    fetch("https://animal-arkade-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        const filteredData = data.filter((item) => {
          return item.subCategory === "Teddy Bear";
        });
        setSubCategoryToys(filteredData);
      });
  }, []);

  const handleTab = (subCategory) => {
    const filteredData = toys.filter((item) => {
      return item.subCategory === subCategory;
    });
    setSubCategoryToys(filteredData);
  };

  return (
    <div>
      <h1 className="text-center mt-5 pt-5 mb-5">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTab("Teddy Bear")}>Teddy Bear</Tab>
          <Tab onClick={() => handleTab("Horse")}>Horse</Tab>
          <Tab onClick={() => handleTab("Cat")}>Cat</Tab>
        </TabList>

        <TabPanel>
          <div className="toys">
            {subCategoryToys.map((toy) => {
              return <ToyCard key={toy._id} toy={toy}></ToyCard>;
            })}
          </div>
        </TabPanel>
        <TabPanel className="toys">
          <div className="toys">
            {subCategoryToys.map((toy) => {
              return <ToyCard key={toy._id} toy={toy}></ToyCard>;
            })}
          </div>
        </TabPanel>
        <TabPanel className="toys">
          <div className="toys">
            {subCategoryToys.map((toy) => {
              return <ToyCard key={toy._id} toy={toy}></ToyCard>;
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
