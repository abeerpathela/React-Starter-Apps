import React from "react";
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import './Card.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ course, likedCourses, setLikedCourses }) {
    function clickHandler() {
        console.log("Button clicked", { courseId: course.id, likedCourses }); // Debug log
        if (!course.id) {
            toast.error("Course ID is undefined");
            return;
        }
        if (likedCourses.includes(course.id)) {
            setLikedCourses((previouslyLikedCourses) =>
                previouslyLikedCourses.filter((idOfPreviouslyLikedCourses) => idOfPreviouslyLikedCourses !== course.id)
            );
            toast.warning("Like removed");
        } else {
            setLikedCourses((previouslyLikedCourses) => [...previouslyLikedCourses, course.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="card">
            <ToastContainer position="top-right" autoClose={2000} />
            <div>
                <img src={course.image.url} alt={course.title} />
                <div className="buttonWalaDiv">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? (
                            <FcLike fontSize="1.75rem" />
                        ) : (
                            <FcLikePlaceholder fontSize="1.75rem" />
                        )}
                    </button>
                </div>
            </div>
            <div>
                <p className="title">{course.title}</p>
                <p className="description">{course.description.length>100?(course.description.substr(0,100))+'....':(course.description) }</p>
            </div>
        </div>
    );
}

export default Card;