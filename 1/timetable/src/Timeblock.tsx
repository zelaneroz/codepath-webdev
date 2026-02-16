import React from "react";
type TimeblockProps=({eventName:string; location:string; color:string;})

const Timeblock = ({eventName,location,color}:TimeblockProps) => {
    return(
        <>
        <div className="block" style={{...styles.block, backgroundColor: color}}>
            <p style={styles.eventName}>{eventName}</p>
            <p style={styles.location}>{location}</p>
        </div>
        </>
    );
};

export default Timeblock

const styles={
    block:{
        backgroundColor:"blue",
        borderRadius:"8px",
        padding:"8px",
        color:"white",
        height:"100%",
        boxSizing:"border-box" as const,
    },
    eventName:{
        fontWeight:"bold",
        margin:0,
        fontSize:"15px",
    },
    location:{
        fontSize: "10px",
        margin:0,
        opacity:0.9,
    },
};