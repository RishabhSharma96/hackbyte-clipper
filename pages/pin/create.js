import React from "react";
import Head from "next/head";

import CreateVideo from "../../components/CreateVideo";
import Header from "../../components/Header";

const Create = () => {
    return (
        <>
            <Head>
                <title>Clipper</title>
                <meta name="description" content="Clipper - Short video platform" />
                <link
                    rel="icon"
                    href="https://th.bing.com/th/id/R.67bc88bb600a54112e8a669a30121273?rik=vsc22vMfmcSGfg&pid=ImgRaw&r=0"
                />
            </Head>
            <Header isShow={false} />
            <CreateVideo />
        </>
    );
};

export default Create;
