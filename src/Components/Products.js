import { Autocomplete, InputAdornment, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../styles/Product.css';
import SearchIcon from '@mui/icons-material/Search';

export default function Product() {

    const option = [{ label: 'Last 30 days', id: 1 }, { label: 'Last 3 months', id: 2 }, { label: 'Last 6 months', id: 3 }, { label: 'Last year', id: 4 }];
    const [value, setValue] = useState(option[0]);
    const rowValues = [
        {
            productName: 'Abstract 3D',
            subName: 'Lorem Ipsum sorem polee',
            stock: '32 stocks',
            price: '$34',
            TotalSales: '20',
            image: require('../images/pic3.jpg'),
        },
        {
            productName: 'Sarphens Illustration',
            subName: 'Lorem Ipsum sorem polee',
            stock: '32 stocks',
            price: '$50',
            TotalSales: '20',
            image: require('../images/pic1.jpg')
        }
    ]

    return <>
        <div className='product-main'>
            <Paper sx={{ height: '100%', borderRadius: '10px' }} elevation={3}>
                <div className='product-header'>
                    <div className='product-heading'>
                        <h4>Product Sell</h4>
                    </div>
                    <div className='search-drop'>

                        <TextField id="outlined-basic" size='small' placeholder='Search' variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ width: '40%', marginRight: '1vw' }}
                        />
                        <Autocomplete
                            value={value}
                            // onChange={(event: any, newValue: string | null) => {
                            //     setValue(newValue);
                            // }}
                            // inputValue={inputValue}
                            // onInputChange={(event, newInputValue) => {
                            //     setInputValue(newInputValue);
                            // }}
                            id="controllable-states-demo"
                            options={option}
                            sx={{ backgroundColor: 'rgba(250,251,255,1)', width: '32%'}}
                            renderInput={(params) => <TextField {...params} />}
                            size='small'
                        />

                    </div>
                </div>
                <div className='table'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: 'rgba(183, 183, 183, 1)', width: '60%' }}>Product Name</TableCell>
                                <TableCell sx={{ color: 'rgba(183, 183, 183, 1)', width: '20%', textAlign: 'center' }}>Stock</TableCell>
                                <TableCell sx={{ color: 'rgba(183, 183, 183, 1)', textAlign: 'center' }}>Price</TableCell>
                                <TableCell sx={{ color: 'rgba(183, 183, 183, 1)', textAlign: 'center' }}>Total Sales</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowValues.map((item, ind) => <TableRow key={ind}>
                                <TableCell>
                                    <div className='table-dynamic-rowmain'>
                                        <div className='img-table'>
                                            <img src={item.image} width='100%' style={{borderRadius: '10px'}} />
                                        </div>
                                        <div className='table-row-heading'>
                                            <b>{item.productName}</b>
                                            <div style={{color: 'rgba(183, 183, 183, 1)'}}>{item.subName}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell sx={{textAlign: 'center'}}>{item.stock}</TableCell>
                                <TableCell sx={{textAlign: 'center'}}>{item.price}</TableCell>
                                <TableCell sx={{textAlign: 'center'}}>{item.TotalSales}</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        </div>
    </>
}