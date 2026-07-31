import React, { Suspense } from 'react';
import Hero from './Hero';
import HotJobs from './HotJobs';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

const Home = () => {

    
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback={<p className="text-center py-20 text-lg">Loading jobs...</p>}>
                <HotJobs jobsPromise={jobsPromise} ></HotJobs>
            </Suspense>
            
        </div>
    );
};

export default Home;