import { Components, Theme } from "@mui/material"



const createTextField = (): Components<Omit<Theme, "components">>['MuiTextField'] => {

    return {
        styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.variant === 'standard' && {
                    
              }),
            }),
          }
    }
}


export default createTextField