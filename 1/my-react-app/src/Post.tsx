import React from "react";
type PostProps = {
  name: string
  message: string
//   likes: number
}

const Post = ({name,message}:PostProps) => {
    return(
        <div>
            <div style={styles.card} className="card">
                <h3 style={styles.name}>{name}</h3>
                <p style={styles.message}>{message}</p>
            </div>
        </div>
    );
};
export default Post;

const styles={
    card: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "24px auto",
    textAlign: "center" as const,
  },
  name: {
    color: "#22c55e",
    marginBottom: "12px",
  },
  message: {
    color: "#333",
    marginBottom: "16px",
  },
//   likes: {
//     fontSize: "18px",
//   },
}

