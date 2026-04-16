import React, { useState } from "react";
import Card from "./card";
import './Cards.css';
function Cards(props){
    const [likedCourses,setLikedCourses]=useState([]);
    let category=props.category;
    let courses=props.courses;
    let allCourses=[];
    function getAllCourses(){    
        if(category==="All"){                                  // return an array in which allcourses data is present
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    };


    return(
        <div className="cards-grid">
            {!courses ? (
                <div><p>No data found</p></div>
            ):
            (
                getAllCourses().map( (course) => {
                   return( <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>);
                })
            )
        }
        </div>
    );
}

export default Cards;