import React from "react";

function Filter({ filterData, category, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="flex justify-center items-center mx-auto gap-3 bg-gray-700 py-4 flex-wrap">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            onClick={() => filterHandler(data.title)}
            className={`text-white border-2 border-solid hover:bg-gray-500 bg-gray-800 rounded-[5px] px-8 py-2 font-bold text-lg ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
