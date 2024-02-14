import React from 'react'
import styles from  "./Product_card_section/ProductcardStyle.module.css"
import { Link } from 'react-router-dom'

const ViewProduct = ({products}) => {

  return (
    <div className={styles.mainCard}>
        <h1>Best Sellers</h1>
        <Link to={`/products/${products[0]?.name}`} ><p> View All ➡️</p></Link>
    </div>
  )
}

export default ViewProduct
