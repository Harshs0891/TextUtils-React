import React from 'react'

export default function Alert(props) {
    // const Capitalise = (word) =>{
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
