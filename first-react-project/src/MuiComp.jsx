
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';


import { useState } from "react";

export default function MuiComp() {

    const [value, setValue] = useState("2");

    const [FirstName, setFirstName] = useState("");

    const updateFName = (e) => {
        setFirstName(e.target.value);
    }


    const [volume, setVolume] = useState(50);

    const handleVolume = (e, newval) => {
        setVolume(newval)
    }

    return (

        <div>

            <Button variant="text" onClick={() => alert('Hi')}>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button color="success" size="small" variant="contained">Outlined</Button>
            <Button size='large' color="error" variant="contained">Outlined</Button>




            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>

            <Typography component="legend">Controlled Rating: {value}</Typography>

            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    console.log(newValue);
                    setValue(newValue);

                }}
            />
            <br />
            {/* Form Demo */}
            <p>674. Material Forms</p>
            <p>FirstName: {FirstName}</p>
            <TextField id="outlined-basic" label="FirstName" value={FirstName} onChange={updateFName} variant="outlined" />
            <TextField id="outlined-basic" label="LastName" placeholder='test' variant="filled" />

            <Box sx={{ border: "1px solid red", m: 2, p: 2 }}>
                <p>Volume Slider: {volume}</p>
                <Slider value={volume} onChange={handleVolume} />
            </Box>

            {/* 675. The SX Prop and Custom Styles */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>


    )

}