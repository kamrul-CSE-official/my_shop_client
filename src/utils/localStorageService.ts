const isBrowser = typeof window !== 'undefined';

const getFromLocalStorage = async (key: string): Promise<string | null> => {
    if (isBrowser) {
        return await localStorage.getItem(key);
    }
    return null;
};

const setIntoLocalStorage = (key: string, value: string): void => {
    if (isBrowser) {
        localStorage.setItem(key, value);
    }
};

const removeFromLocalStorage = (key: string): void => {
    if (isBrowser) {
        localStorage.removeItem(key);
    }
};

const localStorageService = {
    getFromLocalStorage,
    setIntoLocalStorage,
    removeFromLocalStorage,
};

export default localStorageService;
