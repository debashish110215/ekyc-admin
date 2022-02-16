import { useState } from "react";
import DTable from "../components/DTable";
import Table from "../components/Table";
import {FaUserPlus} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'

const Clients = () => {
  const [tblData, setTblData] = useState([
    {
      id: 1,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 2,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Theresa Webb",
      fatherName: "Albert Flores",
      gender: "Male",
      likeness: "85%",
      status: "Pending",
    },
    {
      id: 3,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Esther Howard",
      fatherName: "Kristin Watson",
      gender: "female",
      likeness: "45%",
      status: "Failed",
    },
    {
      id: 4,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 5,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Ronald Richards",
      gender: "female",
      likeness: "100%",
      status: "passed",
    },
    {
      id: 6,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Cameron Williamson",
      gender: "male",
      likeness: "40%",
      status: "Failed",
    },
    {
      id: 7,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 8,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Cameron Williamson",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 9,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Esther Howard",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 10,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Arlene McCoy",
      fatherName: "Annette Black",
      gender: "female",
      likeness: "25%",
      status: "Failed",
    },
    {
      id: 11,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Kathryn Murphy",
      gender: "male",
      likeness: "15%",
      status: "Pending",
    },
    {
      id: 12,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Marvin McKinney",
      fatherName: "Savannah Nguyen",
      gender: "female",
      likeness: "97%",
      status: "passed",
    },
    {
      id: 13,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Dianne Russell",
      fatherName: "Marvin McKinney",
      gender: "female",
      likeness: "20%",
      status: "Failed",
    },
    {
      id: 14,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 15,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Theresa Webb",
      fatherName: "Albert Flores",
      gender: "Male",
      likeness: "85%",
      status: "Pending",
    },
    {
      id: 16,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Esther Howard",
      fatherName: "Kristin Watson",
      gender: "female",
      likeness: "45%",
      status: "Failed",
    },
    {
      id: 17,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 18,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Ronald Richards",
      gender: "female",
      likeness: "100%",
      status: "passed",
    },
    {
      id: 19,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Cameron Williamson",
      gender: "male",
      likeness: "40%",
      status: "Failed",
    },
    {
      id: 20,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 21,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Cameron Williamson",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 22,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Esther Howard",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 23,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Arlene McCoy",
      fatherName: "Annette Black",
      gender: "female",
      likeness: "25%",
      status: "Failed",
    },
    {
      id: 24,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Kathryn Murphy",
      gender: "male",
      likeness: "15%",
      status: "Pending",
    },
    {
      id: 25,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Marvin McKinney",
      fatherName: "Savannah Nguyen",
      gender: "female",
      likeness: "97%",
      status: "passed",
    },
    {
      id: 26,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Dianne Russell",
      fatherName: "Marvin McKinney",
      gender: "female",
      likeness: "20%",
      status: "Failed",
    },
    {
      id: 27,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 28,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Theresa Webb",
      fatherName: "Albert Flores",
      gender: "Male",
      likeness: "85%",
      status: "Pending",
    },
    {
      id: 29,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Esther Howard",
      fatherName: "Kristin Watson",
      gender: "female",
      likeness: "45%",
      status: "Failed",
    },
    {
      id: 30,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 31,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Ronald Richards",
      gender: "female",
      likeness: "100%",
      status: "passed",
    },
    {
      id: 32,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Cameron Williamson",
      gender: "male",
      likeness: "40%",
      status: "Failed",
    },
    {
      id: 33,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Floyd Miles",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 34,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Cameron Williamson",
      fatherName: "Dianne Russell",
      gender: "female",
      likeness: "95%",
      status: "passed",
    },
    {
      id: 35,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Eleanor Pena",
      fatherName: "Esther Howard",
      gender: "female",
      likeness: "95%",
      status: "Pending",
    },
    {
      id: 36,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Arlene McCoy",
      fatherName: "Annette Black",
      gender: "female",
      likeness: "25%",
      status: "Failed",
    },
    {
      id: 37,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Kathryn Murphy",
      gender: "male",
      likeness: "15%",
      status: "Pending",
    },
    {
      id: 38,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Marvin McKinney",
      fatherName: "Savannah Nguyen",
      gender: "female",
      likeness: "97%",
      status: "passed",
    },
    {
      id: 39,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Dianne Russell",
      fatherName: "Marvin McKinney",
      gender: "female",
      likeness: "20%",
      status: "Failed",
    },
    {
      id: 40,
      phoneNum: "123-4567-890",
      nrcNum: "12/OUKAMA(N)123456",
      fullName: "Jerome Bell",
      fatherName: "Dianne Russell",
      gender: "male",
      likeness: "95%",
      status: "passed",
    },
  ]);
  const [tblColumns, setTblColumns] = useState([
    {
      Header: "Phone Number",
      accessor: "phoneNum",
      sortType: 'basic'
    },
    {
      Header: "NRC Number",
      accessor: "nrcNum",
      sortType: 'basic'
    },
    {
      Header: "Full Name",
      accessor: ({ fullName }: any) => (
        <a href="#" className="text-sky-600 underline">
          {fullName}
        </a>
      ),
      sortType: 'basic'
    },
    {
      Header: "Father’s name",
      accessor: "fatherName",
      sortType: 'basic'
    },
    {
      Header: "Gender",
      accessor: "gender",
      sortType: 'basic'
    },
    {
      Header: "% of likeness",
      accessor: "likeness",
      sortType: 'basic'
    },
    {
      Header: "Status",
      accessor: ({ status }) => getStatus(status),
      sortType: 'basic'
    },
  ]);
  const getStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "passed":
        return (
          <span className="bg-green-200 text-green-800 py-1.5 px-3 rounded-full text-xs">
            Passed
          </span>
        );
      case "pending":
        return (
          <span className="bg-yellow-200 text-yellow-800 py-1.5 px-3 rounded-full text-xs">
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="bg-red-200 text-red-800 py-1.5 px-3 rounded-full text-xs">
            Failed
          </span>
        );
      default:
        return "";
    }
  };

  return (
    <div className="bg-white mt-4 mx-4 rounded-lg p-8 shadow">
      <div className="flex justify-between">
        <h2 className="text-sky-800 text-2xl font-medium  ">Client List</h2>
        <div className="w-40">
          <button className="btn btn-outline-info flex w-full justify-center"> <FaUserPlus className='text-lg mr-1 whitespace-nowrap '/> Add new</button>
        </div>
      </div>
      <div className="flex justify-between">             
        <div className='mt-6'>
          <label className="relative block  w-80">
            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
             <GoSearch className='text-gray-400'/>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border
               border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
               focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search by Name / NRC Number or Passport"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className='flex  w-80 items-baseline mt-6'>
          <label htmlFor="nrcNumber" className='mr-3 whitespace-nowrap'>Filter by</label>
          <select name="" id="" className="input-control">
            <option value="">value one</option>
            <option value="">value two</option>
            <option value="">value three</option>
            <option value="">value four</option>
            <option value="">value five</option>
          </select>
        </div>
      </div>
      <div>
        <Table
          tableColumns={tblColumns}
          tableData={tblData}
          isSortedBy={true}
          isPaginatedBy={true}
        />
      </div>
    </div>
  );
};

export default Clients;
