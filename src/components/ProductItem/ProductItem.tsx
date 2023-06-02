import React, { Suspense, lazy, memo, useContext } from 'react'
import IProductItemProps from './ProductItem.types'
import { Link } from 'react-router-dom';
// import FormattedTime from '../FormattedTime';
const FormattedTime = lazy(() => import('../FormattedTime/FormattedTime'));

const Header = (props : IProductItemProps) => {
    const {data , onRemove} = props;


    const handleRemoveItem = () => {
        onRemove(data.id)
    }
    return (
        <div className='productItem'>
            <div>
                <Link to={`/products/${data.id}`} className='name'>{data.name}</Link>    
                <span className='user'>{data.user.name} {data.user.family}</span>    
            </div>
            <div style={{flexDirection : "row"}}>
                <div>
                    <span className='price'>{data.price}</span>    
                    <span className='cat'>{data.category}</span>    
                </div>
                <div>
                    <button onClick={handleRemoveItem} style={{color :"red"}}>delete</button>
                    <Link to={`/products/edit/${data.id}`}>edit</Link>
                </div>
                <Suspense fallback={<div>Loading...</div>}>

                    <FormattedTime stringDate={"2022-01-01"} />
                </Suspense>
            </div>
        </div>
    )
}

export default memo(Header)