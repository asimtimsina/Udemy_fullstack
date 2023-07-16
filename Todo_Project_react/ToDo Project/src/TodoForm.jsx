import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useState } from 'react';
import { IconButton } from '@mui/material';


export default function TodoForm({ addfunc }) {



    const [item, setItem] = useState("")

    const handleChange = (evt) => {
        setItem(evt.target.value)

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addfunc(item);
        setItem("");
    }

    return (

        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" onChange={handleChange} value={item} variant="outlined"
                    InputProps={{

                        endAdornment: < InputAdornment position="end"  >
                            <IconButton type='submit'><Create /></IconButton>
                        </InputAdornment>

                    }}

                />
            </form>

        </ListItem >
    )


}

