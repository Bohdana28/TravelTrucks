import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import Loader from  '../Loader/Loader.jsx'



export default function Layout() {
    return (
        <>
            <Header/>

            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet/>

                </Suspense>

                
            </main>
            
        </>
    );
}