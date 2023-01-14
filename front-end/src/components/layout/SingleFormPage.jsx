import React from 'react';
import { Container } from '@mui/material';

const SingleFormPage = (props) => {

    return (
        <Container 
            sx={{ 
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${props.imageURL})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }} 
        >
            {props.children}
        </Container>
    )
}

export default SingleFormPage;