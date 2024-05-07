import { Components, Theme } from "@mui/material"



const createDialog = (): Components<Omit<Theme, "components">>['MuiDialog'] => {

    return {
        styleOverrides: {
            root: ({ ownerState }) => ({
                '& .MuiPaper-root': {
                    padding: '20px',
                    borderRadius: '2px',
                    width: '100%',
                },
                '& .MuiPaper-root.MuiDialog-paper': {
                    maxWidth: '1150px'
                },
                width: '100%'
            }),
          }
    }
}


export default createDialog