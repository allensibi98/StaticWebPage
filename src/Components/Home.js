import React from 'react';
import DashBoard from './DashBoard';
import MainContent from './MainContent';

export default function Home() {

    return <>
        <div style={{ display: 'flex' }}>
            <DashBoard />
            <MainContent />
        </div>
    </>
}