"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GroupsIcon from '@mui/icons-material/Groups';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SchoolIcon from '@mui/icons-material/School';
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

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <FactCheckIcon className='text-3xl'/>
            <h2 className='font-bold text-[#56adac] p-3'>مدیریت برگزاری معاملات</h2>
            <p>کنترل و مدیریت امور خرید، تدارکات و بازرگانی، برگزاری الکترونیکی مناقصات و مزایدات و تعیین برنده اول و دوم و حتی سوم...</p>
            </Item>
        </Grid>
        <Grid item xs={8}>
        <Item>
            <GroupsIcon className='text-4xl'/>
            <h2 className='font-bold text-[#56adac] p-3'>مدیریت تامین کنندگان</h2>
            <p>مدیریت جامع منابع، پیمانکاران، مشاوران و تامین کنندگان با امکان انجام ارزیابی های کیفی و فنی به صورت پویا و فروش الکترونیک اسناد</p>
            </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{marginTop:'20px'}}>
        <Grid item xs={8}>
          <Item>
            <NoteAltIcon className='text-3xl'/>
            <h2 className='font-bold text-[#56adac] p-3'>مدیریت امور قراردادها</h2>
            <p>کنترل و رسیدگی به انواع قراردادها ازجمله صورت وضعیت، تعدیل، خاتمه، افزایش و کاهش قرارداد و سایر فرآیندها در نرم افزار قراردادهای درگاه</p>
            </Item>
        </Grid>
        <Grid item xs={8}>
        <Item>
            <SchoolIcon/>
            <h2 className='font-bold text-[#56adac] p-3'>دعاوی حقوقی و املاک</h2>
            <p>مدیریت جامع منابع، پیمانکاران، مشاوران و تامین کنندگان با امکان انجام ارزیابی های کیفی و فنی به صورت پویا و فروش الکترونیک اسناد</p>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
