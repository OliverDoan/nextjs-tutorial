import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();

    return{
        props:{users:data}
    }
}

export default function AllUsers({users}) {
    return (
        <div>
            <h1>All users</h1>
            {users.map((user)=>(
                <Link href={"/users/"+user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}
