var student=
{
    sname:"radhika",
    age:20,
    gender:"male",
    hasPassed:false,
    greetstudent:function()
    {
        console.log("welcome"+" "+this.sname)
    }
}
console.log(student.greetstudent);