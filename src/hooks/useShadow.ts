import { useLayoutContext } from "@/app/context"



const useShadow = (opacity: number) => {
    const {themeMode} = useLayoutContext()

    return themeMode==='light' ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`
}

const shadow = useShadow

export default shadow