"use client";
import Sidebar from "@/Components/Sidebar";
import CardSection from "@/Components/CardSection";
import { useState } from "react";
import { QueryStateType } from "@/types/ComponentPropsType";

const ScreenComponentWrapper = () => {

  const [query, setQuery] = useState<QueryStateType>({
    Countrycode: null,
    Catcode: null,
  });

  const handleQueryFilter = (filter: QueryStateType ): void => {

    setQuery((prevState) => ({ ...prevState, ...filter }));
  };

  return (
    <section className="grid grid-cols-5 gap-1 max-sm:grid-cols-3">
      <div className=" col-span-1 ">
        <Sidebar handleQueryFilter={handleQueryFilter} />
      </div>
      <div className=" col-span-4 max-sm:col-span-2">
        <CardSection queryState={query} />
      </div>
    </section>
  );
};

export default ScreenComponentWrapper;
