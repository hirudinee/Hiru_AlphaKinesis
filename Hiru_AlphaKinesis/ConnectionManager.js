module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["hirutest"] = {
        host: process.env.EndPoint_hirutest,
        port: 3306,
        user: "test",
        password: "12345678",
        database: "hiru",
    };
    
    };