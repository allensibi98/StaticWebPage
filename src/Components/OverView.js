import React, { useState } from 'react';
import { Paper, Autocomplete, TextField } from '@mui/material';
import '../styles/OverView.css';
import Chart from 'react-apexcharts';

export default function OverView() {

    const option = [{ label: "Quarterly", id: 1 }, { label: "Halfly", id: 2 }, { label: "Yearly", id: 3 }];
    const [value, setValue] = useState(option[0]);
    const chartVal = {
        series: [{
            name: 'Overview',
            data: [3.3, 3.1, 4.0, 5.1, 4.0, 3.6, 5.1, 6, 5.3, 3.6, 5, 2.9]
        }],
        options: {
            chart: {
                // height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                    barHeight: '100%',
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 5.5,
                            color: 'rgba(242,239,255,1)'
                        },
                    {
                        from: 5.7,
                        to: 10,
                        color: 'rgba(90,50,234,1)'
                    }],
                        backgroundBarColors: [],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 0,
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return '';
                },
                // offsetY: -20,
                // style: {
                //     fontSize: '12px',
                //     colors: ["#304758"]
                // }
            },

            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                show: false,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                // labels: {
                //     show: false,
                //     formatter: function (val) {
                //         return val + "%";
                //     }
                // }

            },
            // title: {
            //     // text: 'Monthly Inflation in Argentina, 2002',
            //     floating: true,
            //     offsetY: 330,
            //     align: 'center',
            //     style: {
            //         color: '#444'
            //     }
            // }
        },


    };

    return <>
        <div className='overview-main'>
            <Paper sx={{ height: '100%', borderRadius: '10px' }} elevation={3}>
                <div className='overview-header'>
                    <div className='overview-headings'>
                        <b>Overview</b>
                        <p style={{ fontFamily: 'initial', color: 'rgba(183,183,183,1)' }}>Monthly Earning</p>
                    </div>
                    <div className='overview-dropDown'>
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
                            sx={{ color: 'rgba(183,183,183,1)' }}
                            renderInput={(params) => <TextField {...params} />}
                            size='small'
                        />
                    </div>
                </div>
                <div className='overview-chart'>
                    <Chart options={chartVal.options} series={chartVal.series} type="bar" height='100%'
                    />
                </div>
            </Paper>
        </div>
    </>
}