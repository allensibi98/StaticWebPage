import React from 'react';
import { Paper } from '@mui/material';
import '../styles/ListItem.css';

export default function ListItem({ mainIcon, heading, amount, percentage, arrowIcon, circleBgColor, loss }) {
console.log(circleBgColor,'cc')

    return <>
        <div className='SingleListMain'>
            <Paper sx={{ height: '100%', borderRadius: '10px' }} elevation={3}>
                <div className='paper-main'>
                    <div className='IconAvatar'>
                        <div className='MainCircle' style={{backgroundColor: circleBgColor}}>
                            {mainIcon}
                        </div>
                    </div>
                    <div className='content'>
                        <div style={{ fontFamily: 'initial', color: 'rgba(183,183,183,1)' }}>{heading}</div>
                        <div><b style={{ fontSize: '3vh' }}>${amount}</b></div>
                        <div style={{ fontSize: '9px' }}>
                            <span style={{ color: loss ? "red" : "green" }}>{arrowIcon}{percentage}% </span>
                            this month
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    </>
}


