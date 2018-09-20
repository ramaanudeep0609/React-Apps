/**
 * Created by rpuvvada on 9/20/18.
 */
import React, { Component } from 'react';

class Products extends Component {
    render(){
        let list = this.props.productList;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Product title</th>
                        <th>Product description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    list.map( (item,i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <span>{item.name}</span>
                                    { item.new && <sup className="newTag">New</sup> }
                                    { item.free && <sup className="freeTag">Free</sup> }
                                </td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Products;