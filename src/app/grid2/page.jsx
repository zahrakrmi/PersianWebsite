import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function ColumnsGrid2() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} className='flex justify-evenly '>
                <Grid item xs={5} className='rounded-lg p-5 '>
                    <Item>
                        <Image
                            src='https://www.andishehpardaz.ir/wp-content/uploads/2023/09/g11.png'
                            width={400}
                            height={400}
                            alt="img1"
                        />
                        <h2 className='font-bold p-3 text-2xl'>سامانه مدیریت داخلی</h2>
                        <p className='text-lg p-2'>مدیریت کمیسیون معاملات (خرید و تدارکات)</p>
                        <p className='text-lg p-2'>مدیریت تامین کنندگان</p>
                        <p className='text-lg p-2'> مدیریت قراردادها </p>
                        <p className='text-lg p-2'>مدیریت امور حقوقی و املاک </p>
                    </Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>
                        <Image
                            src='https://www.andishehpardaz.ir/wp-content/uploads/2023/09/g12.png'
                            width={400}
                            height={400}
                            alt="img1"
                        />
                        <h2 className='font-bold p-3 text-2xl'>پورتال تامین کنندگان</h2>
                        <p className='text-lg p-2'>امکان ثبت نام در پورتال تامین کنندگان</p>
                        <p className='text-lg p-2'>ارزیابی و قرار گرفتن در وندورلیست</p>
                        <p className='text-lg p-2'>امکان شرکت در معاملات شما</p>
                        <p className='text-lg p-2'>ارسال پیشنهاد قیمت به سازمان شما</p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
