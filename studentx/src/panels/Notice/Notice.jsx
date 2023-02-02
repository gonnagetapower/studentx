import React from "react";
import { useRouter } from "@happysanta/router";
import { Header, Navigation } from "../../components";

import dots from './../../img/3dots.svg';

import './Notice.css'

const Notice = () => {

    const router = useRouter()

    return (
        <>
            <Header>
                <div className="notice-header">
                    <div onClick={() => router.popPage()} className="arrow-left"></div>
                    <h1 className="notice-header__title">Уведомления</h1>
                    <img className="chatRoom__dots" src={dots} alt="" />
                </div>
            </Header>
            <Navigation />
        </>
    )
}

export default Notice;