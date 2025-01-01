"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const images = [
  'https://www.andishehpardaz.ir/wp-content/uploads/2020/06/hamrah2.png?text=Image+1',
  'https://www.andishehpardaz.ir/wp-content/uploads/2020/09/digi-kala3.png?text=Image+2',
  'https://www.andishehpardaz.ir/wp-content/uploads/2020/02/mes-m.png?text=Image+3',
  'https://www.andishehpardaz.ir/wp-content/uploads/2021/12/sarmaye-bank2.png?text=Image+4',
  'https://www.andishehpardaz.ir/wp-content/uploads/2021/11/mapna-group.png?text=Image+5',
  'https://andishehpardaz.ir/wp-content/uploads/2020/04/petroshimi-pars.png?text=Image+6',
  'https://andishehpardaz.ir/wp-content/uploads/2020/02/abe-khoozestan-m.png?text=Image+7',
  'https://andishehpardaz.ir/wp-content/uploads/2021/04/nak1.png?text=Image+8',
];

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {images.map((src, index) => (
        <Paper key={index} elevation={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={src} 
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </Paper>
      ))}
    </Box>
  );
}
