import React from 'react'

export function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} />
            <h2>{props.contact.name}</h2>
            <p>mobile: {props.contact.mobile}</p>
            <p>email: {props.contact.email}</p>
        </div>
    )
}


// export function ContactCard(props) {
//     return (
//         <div className="contact-card">
//             <img src={props.imgUrl} />
//             <h2>{props.name}</h2>
//             <p>mobile: {props.mobile}</p>
//             <p>email: {props.email}</p>
//         </div>
//     )
// }



// export function ContactCard() {
//     return (
//         <div className="contact-card">
//             <img src="http://placekitten.com/99/99" />
//             <h2>Maggie Magnamson</h2>
//             <p>mobile: (212) 555-1234</p>
//             <p>email: maggie@catnap.meow</p>
//         </div>
//     )
// }
