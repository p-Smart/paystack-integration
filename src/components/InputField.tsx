import { useLayoutContext } from "@/app/context";
import shadow from "@/hooks/useShadow";
import { Box, CircularProgress, FormControlLabel, FormLabel, IconButton, InputAdornment, TextField as MUITextField, MenuItem, Radio, RadioGroup, Stack, TextFieldProps, Typography } from "@mui/material"
import { ChangeEvent, FC, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import imgicon from '@/assets/icons/imgs.svg'
import { AiOutlineCloudUpload } from "react-icons/ai"
import Button from "./Button";
import DropZone from "./DropZone";


export type TextFieldChangeEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

type InputField = {
    onChange: (value: any, e: TextFieldChangeEvent) => void;
    loading?: boolean;
    list?: Array<{[key: string]: any}>;
    radioList?: Array<{[key: string]: any}>;
    dropZone?: boolean;
} & TextFieldProps


const InputField: FC<InputField> = (props) => {
    const {themeMode} = useLayoutContext()
    const {type, list, radioList, dropZone, loading, onChange, sx, ...restProps} = props

    const handleChange = (e: TextFieldChangeEvent) => {
        if(e.target.value !== ''){
            if((props.type==='number') && (!(/^[0-9]*\.?[0-9]*$/).test(e.target.value))){
                return null
            }
            if((props.type==='tel') && !(/^[0-9+]+$/.test(e.target.value))){
                return null
            }
        }
        return onChange(e.target.value, e)
    }

    const [passVisible, setPassVisible] = useState(false)
    const VisibilityIcon = passVisible ? FaEye : FaEyeSlash

    if(radioList){
        return (
            <Stack
            sx={{
                p: '10px',
                boxShadow: `0 0 2px ${shadow(.125)}`,
                borderRadius: '8px',
                border: '1px solid',
                borderColor: shadow(0.23),
                gap: '10px'
            }}
            >
            <FormLabel
            sx= {{
                color: 'neutral.500',
                fontSize: '.9rem'
            }}
            >
            {props.title}
            </FormLabel>
            <RadioGroup
            value={props.value}
            onChange={(e) => onChange(e.target.value, e)}
            >
                {
                radioList.map( (item, k) => (
                    <FormControlLabel
                    key={k}
                    value={item.value}
                    control={<Radio />} 
                    label={item.label}
                    />
                ) )
                }
            </RadioGroup>
            </Stack>
        )
    }

    if(dropZone){
        return (
            <DropZone
            title={props.title}
            src={props.value as any}
            setSrc={(file) => onChange(file as any)}
            />
        )
    }

    return (
        <MUITextField
        variant="outlined"
        label={props.title}
        onChange={handleChange}
        select={Boolean(list)}
        type={type==='password' ?  (passVisible ? "text" : "password") : (type!=='number' ? type : 'text')}
        disabled={loading}
        InputLabelProps={{
            sx: {
                color: 'neutral.500',
                fontSize: '.9rem'
            }
        }}
        sx={{
            '& .MuiSvgIcon-root': {
                color: 'neutral.900',
            },
            ...sx
        }}

        {...props.type==='password' && {
            InputProps: {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        onClick={() => setPassVisible(!passVisible)}
                        edge="end"
                        sx={{
                            color: 'primary.main'
                        }}
                        >
                            <VisibilityIcon size={18} />
                        </IconButton>
                    </InputAdornment>
                ),
            }
        }}

        {
        ...loading && {
            InputProps: {
                startAdornment: (
                    <InputAdornment position="start">
                        <CircularProgress size={30} />
                    </InputAdornment>
                ),
            }
        }
        }

        {...restProps}
        >
        {
        list &&
        list.map((option, k) => (
            <MenuItem
            key={k}
            value={option.value}
            >
                {option.label}
            </MenuItem>
            ))
        }
        </MUITextField>
    )
}


export default InputField