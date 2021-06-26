import React from 'react'

export function Card(props) {
    return (
        <CardBox>
            <div className="inner-body">
                <RestaurantLogo logo={props.image} />
                <div className="body-block">
                    <div className="inner-body">
                        <RestaurantName name={props.name} />
                    </div>
                    <RestaurantDetails details={props.details} />
                    <div className="inner-body">
                        {[...Array(4)].map((n,i) => (
                            <RestaurantRatings 
                            key={i}
                            selected={i<props.starSelected}
                            onClick={() => props.updateStars(props.id, i+1)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </CardBox>
    )
}

let CardBox = props => <div className="card-body">{props.children}</div>

let RestaurantLogo = props => <img src={props.logo} alt="Logo" className="restaurant-logo" />

let RestaurantName = props => <div className="restaurant-name">{props.name}</div>

let RestaurantDetails = props => <div className="restaurant-details">{props.details}</div>

let RestaurantRatings = ({selected=false, onClick=()=>{}}) => <div className={selected ? "star-selected" : "star"} onClick={onClick}></div>