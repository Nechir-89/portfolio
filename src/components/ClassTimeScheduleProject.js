import React from "react"
import Footer from "./Footer/Footer";
import Header from "./classTimeProject/Header";
import Body from "./classTimeProject/Body";

export default function ClassTimeScheduleProject() {
    return (
        <div className="classTimeProject">
            <main>
               <Header />
               <Body />
            </main>
            <Footer />
        </div>
    );
}