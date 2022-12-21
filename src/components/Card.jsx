import React, { useState } from 'react'

const Card = () => {
    const myArray = [
        {
          Id: 1,
          Image: "https://static.vecteezy.com/system/resources/thumbnails/012/960/074/small/api-app-coding-developer-laptop-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg",
          Title: "Web Development",
          Para: "Learn HTML,CSS,JAVASCRIPT",
          Btn: "Read Blog"
        },
        {
          Id: 2,
          Image: "https://static.vecteezy.com/system/resources/thumbnails/012/960/074/small/api-app-coding-developer-laptop-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg",
          Title: "App Development",
          Para: "Learn HTML,CSS,JAVASCRIPT",
          Btn: "Read Blog"
        },
        {
          Id: 3,
          Image: "https://static.vecteezy.com/system/resources/thumbnails/012/960/074/small/api-app-coding-developer-laptop-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg",
          Title: "App Development",
          Para: "Learn HTML,CSS,JAVASCRIPT",
          Btn: "Read Blog"
        },
      ]
      const [data] = useState(myArray);
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                {
                    data.map((items) => {
                        return (
                            <div className="card" key={items.Id}>
                                <img src={items.Image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{items.Title}</h5>
                                    <p className="card-text">{items.Para}</p>
                                    <a href="#" className="btn btn-primary">{items.Btn}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card