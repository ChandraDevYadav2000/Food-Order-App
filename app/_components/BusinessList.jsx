"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi';

function BusinessList({category_}) {
    const params = useSearchParams();
    const [category, setCategory] = useState('all');

    useEffect(() => {
        params&&setCategory(params.get('category'))
        params&&getBusinessList(params.get('category'))
    }, [params]);

    const getBusinessList = (category_) => {
        GlobalApi.GetBusiness(category_).then(resp => {
            console.log(resp);
        });
    };

    return (
        <div>
            BusinessList {category}
        </div>
    );
}

export default BusinessList;
