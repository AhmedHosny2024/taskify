const moment = require('moment');

// Create a Moment.js object with the current date

export function Mysort(a){
    return a.sort((p1, p2) => (p1.index > p2.index) ? 1 : (p1.index < p2.index) ? -1 : 0);
}
export function checkCategory(a,category){
    let data=[]
    if(category[0])
    {
        data.push(a.filter((ele) => (ele.category==="Intern")));
    }

    if(category[1]){
        data.push(a.filter((ele) => (ele.category==="Junior")));
    }

    if(category[2]){

        data.push(a.filter((ele) => (ele.category==="Senior")));
    }

    if(category[3]){
        data.push(a.filter((ele) => (ele.category==="Manager")));
    }

    return data.flat()
}
export function chekDate(a,start,end){
    let data=[]
    if(start)
    {
        let startdate=new Date(start)
        startdate = moment(startdate);

        // Format the date in 'yyyy-mm-dd' format
        startdate = startdate.format('YYYY-MM-DD');
        data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')>=startdate)))
        a=data
    }
    if(end)
    {
    let enddate = new Date(end)
    enddate = moment(enddate);
    // Format the date in 'yyyy-mm-dd' format
    enddate = enddate.format('YYYY-MM-DD');
       data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')<=enddate)))
    }
    return data.flat()
}
export function checkall(a,category,start,end){
    let data=[]
    if(category[0])
    {
        data.push(a.filter((ele) => (ele.category==="Intern")));
    }
    
    if(category[1]){
        data.push(a.filter((ele) => (ele.category==="Junior")));
    }

    if(category[2]){

        data.push(a.filter((ele) => (ele.category==="Senior")));
    }

    if(category[3]){
        data.push(a.filter((ele) => (ele.category==="Manager")));
    }
    a=data.flat()
    if(start)
    {
        let startdate=new Date(start)
        startdate = moment(startdate);

        // Format the date in 'yyyy-mm-dd' format
        startdate = startdate.format('YYYY-MM-DD');
        data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')>=startdate)))
        a=data
    }
    if(end)
    {
        let enddate = new Date(end)
        enddate = moment(enddate);
        // Format the date in 'yyyy-mm-dd' format
        enddate = enddate.format('YYYY-MM-DD');
           data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')<=enddate)))
    }
    return data.flat()
}
export function searchByVal(a,val){
    let data=[]
    val=val.toLowerCase()
    data=a.filter((ele)=>(ele.title.toLowerCase().includes(val)||ele.disc.toLowerCase().includes(val)))
    return data.flat()
}

export function Today(a){
    let date = new Date()
    date = moment(date);
    // Format the date in 'yyyy-mm-dd' format
    date = date.format('YYYY-MM-DD');
    const data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')===date)))
    return data
}
export function Yesterday(a){
    let date = new Date()
    date = moment(date);
    // Format the date in 'yyyy-mm-dd' format
    date = date.format('YYYY-MM-DD');
    const data=(a.filter((ele) => (moment(new Date(ele.date)).format('YYYY-MM-DD')<date)))
    return data
}