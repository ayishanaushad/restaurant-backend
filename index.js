//1. import json-server
const jsonserver=require('json-server')

//2. create a server application using jsonserver
const server=jsonserver.create()

//3. set up path  for db.json file
const router=jsonserver.router('db.json')

//4.return a midleware used by the jsonserver
const midleware=jsonserver.defaults()

//5.setup a port no:
const port=process.env.port  ||  3001

//6.use in server 
server.use(midleware)
server.use(router)

//7.to run the port 
server.listen(port,()=>{
    console.log('listening on the port '+port);
})