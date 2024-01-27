import React from 'react';

interface ICategory {
  value: any;
}

const Category: React.FC<ICategory> = ({ value }) => {
  return (
    <div className=" justify-items-center font-semibold bg-slate-700 text-white rounded-full text-sm group-hover:bg-lightbrown group-hover:text-black">
      <h3 className="py-2 px-6 ">{value.category.title}</h3>
    </div>
  );
};

export default Category;
