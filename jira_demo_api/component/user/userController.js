let con=require('../../config/config');

// Add User
exports.addUser=(req,res)=>{

    var email=req.body.email;
    var pwd=req.body.password;
    var utid=req.body.user_type;
    console.log('req.body',req.body);
    var qry="insert into user( `email`, `pwd`, `utid`) values('"+ email +"','"+ pwd +"',"+ utid +")";
   // var qry="insert into emp(fname,lname,img) values('"+ fname +"','"+ lname +"','"+ img +"') ";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('insert....');
        var qry1 = "SELECT uid,utid FROM `user` order by uid desc limit 1";
        con.query(qry1,(error,result) => {
            if(error) throw error;
            res.status(200).json({status:"ok",message:"Registered Sucessfully", response:result});
        });
    });
};

// show all users
exports.showUser=(req,res)=>{
    let qry="select * from user";
   // let qry="select * from emp";
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// delete user
exports.deleteUser=(req,res)=>{
    console.log('req.body',req.body);
    let id=req.body.uid;
    let qry="delete from user where uid="+id;
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw  error;
        res.send(result);
        console.log('delete');
    });
};

// Find user by id for edit
exports.editUser=(req,res)=>{
    console.log('req.body',req.params);
    let id=req.params.id;
    let qry="select * from user where uid="+id;
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// Update User
exports.updateUser=(req,res)=>{
    let id=req.body.uid;
    var email=req.body.email;
    var pwd=req.body.pwd;
    var utid=req.body.utid;
    console.log('req.body',req.body);
    let qry="update user set email='"+ email +"',pwd='"+ pwd +"',utid ='"+ utid +"' where uid='"+ id +"'";
    console.log(qry);


    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('update....');
        res.send(result);
    });

};

// Show All Employee
exports.showEmployee=(req,res)=>{
    let qry="select uid,email from  user where utid in ( select utid from user_type where type !=  'admin')";
    console.log(qry);


    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });

};
