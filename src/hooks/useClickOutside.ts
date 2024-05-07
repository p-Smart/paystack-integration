import { MutableRefObject, useEffect, useRef } from "react"


const useClickOutside = (handler: Function): MutableRefObject<any> => {
    let domNode = useRef(null)

    useEffect( () => {
        let maybeHandler = (e: MouseEvent) => {
            if(!domNode || !domNode.current?.contains(e.target)){
                handler()
            }
        }

        document.addEventListener('mousedown', maybeHandler)

        return () => {
            document.removeEventListener('mousedown', maybeHandler)
        }
    })

    return domNode
}

export default useClickOutside