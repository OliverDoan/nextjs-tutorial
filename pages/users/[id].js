import React from 'react';


export const getStaticPaths= async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths= data.map((user)=>{
        return{
            params:{ id: user.id.toString() },
        };
    });

    return{
        paths,
        fallback:false,
    };

};

export const getStaticProps= async(context)=>{
    const id=context.params.id;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data=await res.json();

    return{
        props:{user:data}
    };
};
export default function DetailUser({user}) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email:{user.email}</p>
            <p>Website:{user.website}</p>
            <p>Address:{user.address.street},{user.address.city}</p>
            <p>Company:{user.company.name}</p>
        </div>
    )
}
