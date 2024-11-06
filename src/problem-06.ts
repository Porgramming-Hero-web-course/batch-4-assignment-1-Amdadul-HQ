interface Profile {
    name:string,
    age:number,
    email:string,
}

const updateProfile = (obj:Profile,key: Partial<Profile>):Profile => {
    return {...obj,...key}
}