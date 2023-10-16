import React from 'react';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import '../styles/DashBoard.css';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DashBoard() {

    const menus = ["Dashboard", "Product", "Customers", "Income", "Promote", "Help"];
    const Icons = [<DashboardCustomizeOutlinedIcon fontSize='small' sx={{ color: "white" }} />, <Inventory2OutlinedIcon fontSize='small' sx={{ color: "white" }} />, <PersonOutlineOutlinedIcon fontSize='small' sx={{ color: "white" }} />, <WalletOutlinedIcon fontSize='small' sx={{ color: "white" }} />, <BrightnessLowOutlinedIcon fontSize='small' sx={{ color: "white" }} />, <LiveHelpOutlinedIcon fontSize='small' sx={{ color: "white" }} />];

    return <>
        <div className='mc-main'>
            <div className='mc-header'>
                <div className='dsh-icon'>
                    <TokenOutlinedIcon sx={{ color: "white" }} />
                </div>
                <div className='dsh-title' style={{ marginLeft: '3px' }}>
                    <h4 style={{ color: 'white' }}>Dashboard</h4>
                </div>
            </div>
            <div className='mc-body'>
                {menus.map((item, ind) => <div key={ind} className={'dsh-menuItem-' + ind}>
                    <div className='menuLeftIcon' style={{ marginRight: '5px' }}>
                        {Icons[ind]}
                    </div>
                    <div className='menuContent' style={{ marginLeft: '5px' }}>
                        <h6 style={{ color: 'white' }}>{item}</h6>
                    </div>
                    <div className='menuRightIcon'>
                        {ind != 0 && <div>
                            <KeyboardArrowRightOutlinedIcon fontSize='small' sx={{ color: 'white' }} />
                        </div>}
                    </div>
                </div>)}

            </div>
            <div className='mc-footer'>
                <div className='aside-user'>
                    <div className='footer-img-name'>
                        <img src='avatar.png' width='30%' height='30%' />
                        <div style={{marginLeft: '1vh', alignSelf: 'center'}}>
                            <div style={{ color: 'white' }}>Evana</div>
                            <div style={{color: 'rgba(183, 183, 183, 1)', fontSize: '1vw'}}>Project Manager</div>
                        </div>
                    </div>
                    <div className='footer-arrow'>
                        <KeyboardArrowDownIcon sx={{color: 'rgba(183, 183, 183, 1)'}} />
                    </div>
                </div>
            </div>
        </div>
    </>
}