let con=require('../../config/config');

// Login User
exports.login=(req,res)=>{

    var email=req.body.email;
    var pwd=req.body.pwd;
    console.log('req.body',req.body);
    var qry="select * from user where user.email='"+  email +"' and pwd='"+ pwd +"'";
    // var qry="insert into emp(fname,lname,img) values('"+ fname +"','"+ lname +"','"+ img +"') ";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        if(result.length > 0) {
            console.log('result', result);
            /*var utid = result['RowDataPacket'].utid;
            console.log('utid', utid)
            var qry="select type from user_type where utid='"+ utid +"'";
            con.query(qry,(error,result) => {
                if(error) throw error;

            });*/
            res.status(200).json({status:"ok",response:result});
        }
        else {
            res.status(404).json({status:"not found",message:'invalid email or password'});
        }
    });
};