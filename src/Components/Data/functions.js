
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
        data=(a.filter((ele) => (new Date(ele.date)>=startdate)))
        a=data
    }
    if(end)
    {
    let enddate = new Date(end)
       data=(a.filter((ele) => (new Date(ele.date)<=enddate)))
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
        data=(a.filter((ele) => (new Date(ele.date)>=startdate)))
        a=data
    }
    if(end)
    {
    let enddate = new Date(end)
       data=(a.filter((ele) => (new Date(ele.date)<=enddate)))
    }
    return data.flat()
}