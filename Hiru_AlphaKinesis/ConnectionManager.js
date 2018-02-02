module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["Hiru002"] = {
        host: process.env.EndPoint_Hiru002,
        port: 3306,
        user: "test",
        password: "12345678",
        database: "Hiru002",
    };
    
    };