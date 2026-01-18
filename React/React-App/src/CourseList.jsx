import Course from './Course';
import useFetch from './useFetch';

function CourseList() {

    const [courses, dummy, error] = useFetch('http://localhost:3000/courses')

    function handleDelete(id) {
        const newCourses = courses.filter((course) => course.id != id);
        setCourses(newCourses);
    }

    // courses.sort((x, y) => y.price - x.price);
    // const valueCourses = courses.filter((course) => course.price < 200);

    if (!courses) {
        return (
            <>
                {!error && <center><img src="data/assets/loading.gif"></img></center>}
                {error && <p>{error}</p>}
            </>
        )
    }
    const coursesList = courses.map(
        (course) => <Course key={course.id}
            name={course.name}
            price={course.price}
            image={course.image}
            rating={course.rating}
            id={course.id}
            delete={handleDelete}
        />
    )
    return (
        <>
            {coursesList}
            <button onClick={() => setDummy(false)}>Dummy Button</button>
        </>

    );
}

export default CourseList

//npx json-server --watch data/dummyData.json --port 3000 --static ./data