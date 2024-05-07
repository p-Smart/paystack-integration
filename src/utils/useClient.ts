


const useClient = (func: Function): any => {

    return (
        typeof window !== 'undefined' ?
        func && func() :
        null
    )
}

export default useClient