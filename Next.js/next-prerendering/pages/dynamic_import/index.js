import dynamic from "next/dynamic";

const Dynamic = () => {
    const Dynamic = dynamic(() => import('../Dynamic'))
    console.log(Dynamic)
    return <h1>Dynamic Import </h1>
};

export default Dynamic;