import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../index.css";
// import  artikels  from "../data";

const Tablen = () => {
  
    const [product, setProduct] = useState([
      { id: 1, price: 6, menge: 4, artikel: "Hose" },
      { id: 2, price: 5, menge: 6, artikel: "Hemd" },
      { id: 3, price:4, menge: 6, artikel: "tshirt" },
      { id: 4, price: 6, menge: 6, artikel: "jake" },
  ]);
    const handelChange = (e) => {
      
      setProduct(e.target.value);
    };

    return (
        <div className="tabl">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Menge</th>
                        <th>Summe</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                              <tr>
                                    <td>{item.artikel}</td>
                                    <td>
                                        <input
                                            value={item.price}
                                            type="number"
                                             id="price"
                                            onChange={handelChange}
                                            className="inpt"
                                        />
                                    </td>
                                    <td>
                                        <input
                                           value={item.menge}
                                           type="number"
                                            id="menge"
                                           onChange={handelChange}
                                           className="inpt"
                                        />
                                    </td>

                                    <td>{item.price * item.menge}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}

                    <tr className="centr">
                        <td colSpan={3}>Total</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Tablen;

// const [menge,setMenge]=useState(0)
// // const [product3,setProduct3]=useState(0)
// console.log(price * 2);
// console.log(menge);
// // console.log(product3);

// const summe = +price* +menge
// console.log(summe);

//  <tr>
//                 <td>Hose</td>
//                 <td>
//                     <input
//                         value={price}
//                         type="number"
//                         onChange={e=>setPrice(e.target.value)}
//                         className="inpt"
//                     />
//                 </td>
//                 <td>
//                     <input
//                         value={menge}
//                         type="number"
//                         onChange={e=>setMenge(e.target.value )}
//                         className="inpt"
//                     />
//                 </td>

//                 <td>{summe}</td>
//             </tr>
