import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className='w-full px-4 py-2'>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <Link to='/' className='text-blue-600 font-medium hover:underline'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to='/products' className='text-blue-600 font-medium hover:underline'>Products</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <span className='text-gray-700 font-semibold whitespace-nowrap'>{props.name}</span>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default BreadCrumb;
