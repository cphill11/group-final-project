import React from "react";
import '../index.css';

const Rating = (props) => {
    const checked = () => {
        console.log(props.starCount);
        if (props.starCount === 1) {
            return (
                <h2>Rating:</h2>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>
            )

        } else if (props.starCount === 2) {
            return (
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>
            )

        } else if (props.starCount === 3) {
            return (
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>
            )

        } else if (props.starCount === 4) {
            return (
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>
            )

        } else if (props.starCount === 5) {
            return (
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>
            )

        }


    }

// const displayOne = () =>
//     {
//     <span class = "fa fa-star checked"></span>
//     }
                // if ((i === 0) || (i < 1)) {
                //     return (
                //         <span class = "fa fa-star checked"></span>
                //     )
                // } if ((i > 0) && (i < 2)) {
                //     return (
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>
                //     )
                // } if ((i > 1) && (i < 3)) {
                //     return (
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>
                //     )
                // } if ((i > 2) && (i < 4)) {
                //     return (
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>
                //     )
                // } if (i === 4) {
                //     return (
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>,
                //         <span class = "fa fa-star checked"></span>
                //     )
                // }
            // }
    // }
    // const unChecked = () => {
    //     console.log(props.starCount);
    //         for (let i = 5; i > props.starCount; i++) {
    //             return (
    //                 <span class = "fa fa-star unchecked"></span>
    //             )
    //         }
    // }
    return (
        <div>
            {checked()}
            {/* {unChecked()} */}
        </div>
    )
}

// 5 - rating = unchecked

// for {


// }

// for {

// }

export default Rating;