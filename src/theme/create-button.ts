import { Components, Theme } from "@mui/material"



const createButton = (): Components<Omit<Theme, "components">>['MuiButton'] => {

    return {
        styleOverrides: {
          root: ({ ownerState }) => ({
            padding: '10px 20px',
            minWidth: 'unset',
            borderRadius: '8px',
            fontWeight: '400',
            ...(ownerState.variant === 'contained' && {
                
            }),
            ...(ownerState.variant === 'outlined' && {
                borderRadius: '10px',
            }),
            ...(ownerState.variant === 'text' && {
                padding: '5px 7px',
                borderRadius: '15px'
            }),
          }),
        },
    }
}

export default createButton