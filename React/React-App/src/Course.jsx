const course1 = "HTML"

function Course(){
    const styles ={
        backgroundColor: "yellow"
    }
    return(
        <div style={styles}>
            <img src="" alt=""/>
            <h3>{course1}</h3>
            <p>This is Code IO's HTML course</p>
        </div>
    );
}

export default Course