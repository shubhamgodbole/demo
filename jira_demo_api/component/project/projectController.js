let con=require('../../config/config');

// Add Project
exports.addProject=(req,res)=>{

    var title=req.body.title;
    var desc=req.body.desc;
    var uid=req.body.uid;
    console.log('req.body',req.body);
    var qry="insert into project( `title`, `description`, `uid`) values('"+ title +"','"+ desc +"',"+ uid +")";
    // var qry="insert into emp(fname,lname,img) values('"+ fname +"','"+ lname +"','"+ img +"') ";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('insert....');
        res.status(200).json({status:"ok",message:"Created New Project Sucessfuly"});
    });
};

// show all projects
exports.showProject=(req,res)=>{
   // let qry="select * from project";
     let qry="SELECT project.pid,project.title,project.description FROM `project` ,user,user_type where project.uid = user.uid and user.utid = user_type.utid and user_type.type = 'admin' ";
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// Find project by id for edit
exports.findProject=(req,res)=>{
    console.log('req.body',req.params);
    let id=req.params.id;
    let qry="select * from project where pid="+id;
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// Update Project
exports.updateProject=(req,res)=>{
    let uid=req.body.uid;
    let pid=req.body.pid;
    var title=req.body.title;
    var desc=req.body.description;
    console.log('req.body',req.body);
    let qry="update project set title='"+ title +"',description='"+ desc +"' where pid='"+ pid +"'";
    console.log(qry);


    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('update....');
        res.status(200).json({status:"ok",message:"Project is updated Sucessfuly"});
    });

};

// delete Project
exports.deleteProject=(req,res)=>{
    console.log('req.body',req.params);
    let id=req.params.id;
    let qry="delete from project where pid="+id;
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw  error;
        res.status(200).json({status:"ok",message:"Project is deleted Sucessfuly"});
        console.log('delete');
    });
};

// Find project by user
exports.findProjectUser=(req,res)=>{
    console.log('req.body',req.params);
    let id=req.params.id;
    let qry="SELECT project.pid,project.title,project.description FROM project ,user where user.uid = project.uid and user.uid = '"+ id +"'  ";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};
