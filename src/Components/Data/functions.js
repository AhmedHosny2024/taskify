
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
        console.log("manager")
        data.push(a.filter((ele) => (ele.category==="Manager")));
    }

    return data.flat()
}
