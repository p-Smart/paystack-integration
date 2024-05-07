import { FC, Ref, forwardRef } from "react"
import { ButtonProps, CircularProgress, Button as MUIButton } from "@mui/material"
import Link from "next/link";



interface IButton extends ButtonProps {
    title: string;
    loading?: boolean;
}


const Button = forwardRef((props: IButton, ref) => {
    const {sx, ...restProps} = props

    return (
        <MUIButton
        disabled={props.loading}
        variant="contained"
        sx={{
            alignSelf: 'flex-start',
            textTransform: 'unset',
            '&.Mui-disabled': {
                backgroundColor: 'primary.lighter',
                color: 'neutral.50'
            },
            ...sx
        }}

        ref={ref as Ref<HTMLButtonElement>}
        {...restProps}
        >
        {
        !props.loading ?
        props.title
        :
        <CircularProgress size={20} sx={{color: 'neutral.300'}} />
        }
        </MUIButton>
    )
})


export default Button


Button.displayName = 'Button'