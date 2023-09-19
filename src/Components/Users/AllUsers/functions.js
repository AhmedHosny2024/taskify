export function SearchByUser(a,word)
{
     let name=word.toLowerCase().trim();
    const data= a.filter((ele) => (ele.name.toLowerCase().includes(name)));
    console.log(name)
    a.map((a)=>console.log(a.name.toLowerCase()))
    return data
}