import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
    render() {
        let category = this.props.category;
        return (
            <tr>
                <th colSpan="4">
                    {category}
                </th>
            </tr>
        )
    }
}
