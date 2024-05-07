

export const updateLocalStorage = (object: string='userSettings', newData: Object | any) => {
    var currentStore: Object
    const currentStoreJson =  window.localStorage.getItem(object)
    if(typeof currentStoreJson === 'string'){
        currentStore = JSON.parse(currentStoreJson)
    }
    
    const updatedStore = {...currentStore, ...newData}
    const updatedStoreJson = JSON.stringify(updatedStore)
    return window.localStorage.setItem(object, updatedStoreJson)
}


export const fetchFromLocalStorage = (object: string='userSettings'): any => {
    var currentStore: Object
    const currentStoreJson =  window.localStorage.getItem(object)
    if(typeof currentStoreJson === 'string'){
        currentStore = JSON.parse(currentStoreJson) || null
        return currentStore
    }
    return currentStoreJson
    
}