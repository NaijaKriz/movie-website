import React from 'react'
import SideBar from '../SideBar'
import { Movies } from '../../../Data/MovieData';
import { HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import { CategoriesData } from '../../../Data/CategoriesData';

function Categories() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded w-full sm:w-auto">
            <HiPlusCircle /> Create
          </button>
        </div>

        <Table2 data={CategoriesData} admin={true} />
      </div>
    </SideBar>
  );
}

export default Categories