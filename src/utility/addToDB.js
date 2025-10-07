const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readlist");

    if(storedBookSTR)
    {
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData
    }
    else{
        return []
    }
}

const AddtoStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id))
    {
        alert('Book Already Exists')
        return
    }
    else
    {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data)

    }
}

export {AddtoStoredDB,getStoredBook};