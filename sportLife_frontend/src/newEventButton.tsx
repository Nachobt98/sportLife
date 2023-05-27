
import { Button, ButtonBase, Grid, Box } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";


const NewButton= ({}) => {
    const navigate = useNavigate()
    return(
        <Box
        sx={{
            display: "flex",
            justifyContent:"center",
            margin:"20px"
        }
           

        }
        >
        
            <Button
            //onClick={() => navigate('/')}
            variant="outlined"
            //href="#outlined-buttons"
            size="large"
            >         
            Nuevo Evento
            </Button>

        </Box>
        
    )

}

export default NewButton;