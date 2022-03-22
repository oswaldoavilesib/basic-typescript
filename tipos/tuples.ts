(() => {

    const hero:[string,number,boolean] = ['DR Strange',100,true]

    hero[1] = 50
    hero[0] = "iron"

    console.log({hero})
})()