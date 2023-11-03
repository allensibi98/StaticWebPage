import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import { TextField, InputAdornment, Grid } from '@mui/material';
import '../styles/MainContent.css';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import OverView from './OverView';
import Customers from './Customers';
import Product from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueClear, setSearchValue } from '../reducers/mainContentReducer';

export default function MainContent() {

    const dispatch = useDispatch();
    const { reload, mainContentData } = useSelector(({mainContentReducer}) => mainContentReducer);
    const { search } = mainContentData;
    const apiUrl = 'http://localhost:3001/StaticWebPage/api/search'

    // useEffect(() => {
    //     dispatch(setSearchValueClear());

    // }, [])

    const handleSearch = () => {
        axios.post(apiUrl, {search: search})
        .then(res => {
            console.log(res.data, 'rsss')
        })
        .catch(err => {
            console.log(err,'eer')
        })
    }
    const handleSearchValue = (e) => {
        dispatch(setSearchValue({
            search: e.target.value
        }))
    }

    return <>
        <div className='mainContent'>
            <div className='header'>
                <div className='UserName'>
                    <b>Hello Sharukh &#x1F44B;,</b>
                </div>
                <div className='searchArea'>
                    <TextField id="outlined-basic" size='small' placeholder='Search' variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }} value={search} onChange={(e) => handleSearchValue(e)} />
                        {/* <button onClick={() => handleSearch()} >Search</button> */}
                </div>
            </div>
            <div className='listItems'>
                <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-around' }} >
                    <Grid item sm={5} md={2}>
                        <ListItem
                            mainIcon={<MonetizationOnOutlinedIcon fontSize='large' sx={{ color: "rgba(0, 167, 70, 1)", alignSelf: 'center', width: '60%', height: '60%' }} />}
                            heading={"Earning"}
                            amount={"198K"}
                            percentage={"37.8"}
                            arrowIcon={<ArrowUpwardOutlinedIcon sx={{ fontSize: '12px' }} />}
                            circleBgColor={"rgba(222,255,237,1)"}
                            loss={false}
                        />
                    </Grid>
                    <Grid item sm={5} md={2}>
                        <ListItem
                            mainIcon={<ArticleRoundedIcon fontSize='large' sx={{ color: "rgba(160,0,254,1)", alignSelf: 'center', width: '60%', height: '60%' }} />}
                            heading={"Orders"}
                            amount={"2.4K"}
                            percentage={"2"}
                            arrowIcon={<ArrowDownwardOutlinedIcon sx={{ fontSize: '12px' }} />}
                            circleBgColor={"rgba(231,219,255,1)"}
                            loss={true}
                        />
                    </Grid>
                    <Grid item sm={5} md={2}>
                        <ListItem
                            mainIcon={<AccountBalanceWalletRoundedIcon fontSize='large' sx={{ color: "rgb(38,113,202,1)", alignSelf: 'center', width: '60%', height: '60%' }} />}
                            heading={"Balance"}
                            amount={"2.4K"}
                            percentage={"2"}
                            arrowIcon={<ArrowDownwardOutlinedIcon sx={{ fontSize: '12px' }} />}
                            circleBgColor={"rgba(204,242,255,1)"}
                            loss={true}
                        />
                    </Grid>
                    <Grid item sm={5} md={2}>
                        <ListItem
                            mainIcon={<ShoppingBagRoundedIcon fontSize='large' sx={{ color: "rgba(215,0,15,1)", alignSelf: 'center', width: '60%', height: '60%' }} />}
                            heading={"Total Sales"}
                            amount={"2.4K"}
                            percentage={"11"}
                            arrowIcon={<ArrowUpwardOutlinedIcon sx={{ fontSize: '12px' }} />}
                            circleBgColor={"rgba(255,180,219,1)"}
                            loss={false}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className='center-part'>
                <Grid container spacing={2} sx={{justifyContent: 'space-around'}}>
                    <Grid item sm={10} md={7}>
                        <OverView />
                    </Grid>
                    <Grid item sm={8} md={3}>
                        <Customers />
                    </Grid>
                </Grid>
            </div>
            <div className='footer'>
                <Product />
            </div>
        </div>
    </>
}