import { SxProps, useTheme, Breakpoint as MUIBreakPoint } from "@mui/material"


const sortMediaQueries = (obj: SxProps): SxProps => {
    const mediaKeys = Object.keys(obj).filter(key => key.startsWith('@media'));
    mediaKeys.sort((a, b) => {
        const widthA = parseFloat(a.match(/max-width:(\d+(\.\d+)?)px/)[1]);
        const widthB = parseFloat(b.match(/max-width:(\d+(\.\d+)?)px/)[1]);
        return widthB - widthA; // Sort in descending order of width
    });

    const sortedObj = {};
    mediaKeys.forEach(key => {
        sortedObj[key] = obj[key];
    });

    Object.keys(obj).forEach(key => {
        if (!key.startsWith('@media')) {
            sortedObj[key] = obj[key];
        }
    });

    return sortedObj;
}


const setValueAtPath = (path: string, value: any, obj: any): void => {
    const keys = path.split('->')
    let currentObj = obj
  
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]
      currentObj = currentObj[key] = currentObj[key] || {}
    }
  
    currentObj[keys[keys.length - 1]] = value
}

const removeLastPath = (path: string): string  => {
    const brokenPath = path.split('->')
    brokenPath.pop()
    const newPath = brokenPath.join('->')
    return newPath
}

type Breakpoint = MUIBreakPoint | 'default'

const useMediaQuery = (styles: SxProps): SxProps => {
    const theme = useTheme()
    const breakpoints: Breakpoint[] = ['default', 'xl', 'lg', 'md', 'sm', 'xs']

    const newStyles = {}
    const iterateStyles = (styles: any, path: string = '') => {
        for (const prop in styles){
            const style = styles[prop]
            const currentPath = path ? `${path}->${prop}` : prop

            // Check if it's an object or not
            if(typeof style === 'object' && style !== null && !Array.isArray(style) && !(style instanceof Function)){
                iterateStyles(style, currentPath)
            }
            else{
                if(breakpoints.includes(prop as Breakpoint)){
                    if(prop==='default'){
                        setValueAtPath(removeLastPath(currentPath), style, newStyles)
                    }
                    else{
                        const mediaQuery = theme.breakpoints.down(prop as MUIBreakPoint)

                        const newPath = `${mediaQuery}->${removeLastPath(currentPath)}`
                        setValueAtPath(newPath, style, newStyles)
                    }
                }
                else{
                    setValueAtPath(currentPath, style, newStyles)
                }
            }
        }
    }

    iterateStyles(styles)
    return sortMediaQueries(newStyles)
}


const withMediaQuery = useMediaQuery


export default withMediaQuery