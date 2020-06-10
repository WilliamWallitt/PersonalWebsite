import React from 'react'
import * as $ from "jquery";

function API_Request_Handler(props) {

    const get_data = () => {
        $.ajax({
            url: this.props.url,
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },
            success: data => {
                alert("success")
                return data
            }
        })
    }

    return (
        <h1>{get_data()}</h1>
    )

}

export default API_Request_Handler