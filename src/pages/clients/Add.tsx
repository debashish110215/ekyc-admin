import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import ClientFrom from '@/components/clients/ClientForm';
import nid_front from '@/assets/images/nid_front.png';
import nid_back from '@/assets/images/nid_back.png';
import profile_img from '@/assets/images/profile.png';

const Add = () => {
  return (
    <div className='bg-white mt-4 mx-4 rounded-lg p-8 shadow'>
      <div className='flex justify-end'>

        <Link to='/client/list' className='btn btn-outline-light'>
          <BiArrowBack className='inline-block' /> Back to list
        </Link>
      </div>

      <div>
        <div>
          <h2 className='text-sky-700 text-2xl font-semibold'>Add New User</h2>
          <div className='flex space-x-24 mt-8'>
            <div>
              <img src={nid_front} alt='nid front side' />
            </div>
            <div>
              <img src={nid_back} alt='nid back side' />
            </div>
            <div>
              <img src={profile_img} alt='user profile img' />
            </div>
          </div>
        </div>

        <div className='mt-12 w-1/2 mx-auto text-gray-600'>
          <h4 className='text-center text-2xl font-medium '>Client Summary</h4>
          <ClientFrom />
        </div>
      </div>
    </div>
  );
};

export default Add;
