show dbs
use bms
db
show dbs
db.createCollection("Student");
db.Student.insert({_id:1,StudName:"MegJoshi",Grade:"4thyear",Major:"CSE",Hobbies:"Swimming",Section:"C",USN:"146"})
db.Student.find({StudName:"MegJoshi"});
db.Student.insert({_id:2,StudName:"Niyathi Kumbale",Grade:"4thyear",Major:"CSE",Hobbies:"Singing",Section:"C",USN:"147"})
db.Student.insert({_id:3,StudName:"Omar",Grade:"4thyear",Major:"CSE",Hobbies:"Gaming",Section:"C",USN:"140"})
db.Student.insert({_id:4,StudName:"Nikhil",Grade:"4thyear",Major:"CSE",Hobbies:"Guitar",Section:"C",USN:"053"})
db.Student.find();

db.createCollection("Faculty");
db.Faculty.insert({_id:1,FacName:"Umadevi V",FID:"BM001",Dept:"CSE",Sex:"F",Interest:"Computer Vision", Room:"401"})
db.Faculty.insert({_id:2,FacName:"Latha NR",FID:"BM001",Dept:"CSE",Sex:"F",Interest:"Computer Vision", Room:"401"})
