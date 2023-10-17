import React from 'react';
import { Paper } from '@mui/material';
import '../styles/Customers.css';
import Chart from 'react-apexcharts';

export default function Customers() {

    const chartVal = {
        series: [65, 40, 15],
        options: {
            chart: {
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            // legend: {
            //     show: false
            // },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: false,
                                // showAlways: true,
                                // label: '65%'
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 900,
                options: {
                    chart: {
                        width: 270
                    },
                    legend: {
                        // position: 'bottom'
                        show: false
                    }
                }
            }]
        },
    };

    return <>
        <div className='customers-main'>
            <Paper sx={{ height: '100%', borderRadius: '10px' }} elevation={3}>
                <div className='header'>
                    <div className='headings'>
                        <b>Customers</b>
                        <p style={{ fontFamily: 'initial', color: 'rgba(183,183,183,1)' }}>Customers that buy products</p>
                    </div>
                </div>
                <div className='customer-chart'>
                    <Chart options={chartVal.options} series={chartVal.series} type="donut" />
                </div>
            </Paper>
        </div>
    </>
}