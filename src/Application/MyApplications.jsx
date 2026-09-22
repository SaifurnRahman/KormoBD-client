import React, { Suspense } from 'react';
import ApplicationList from './ApplicationsList';
import useAuth from '../hooks/useAuth';
import { myApplicationsPromise } from '../api/applicationApi';

const MyApplications = () => {

    const {user} = useAuth();

    return (
        <div>
            <Suspense fallback={<p>loading........</p>}>
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;