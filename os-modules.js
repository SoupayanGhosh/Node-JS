const os = require ('os')

// info about the current user
const user = os.userInfo()


//method return the system uptime in secs
console.log('The system uptime is ${os.uptime()}seconds')

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
       freeMem:os.freemem(),

}

console.log(currentOS)



