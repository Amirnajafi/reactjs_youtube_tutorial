import React from 'react'
import { Button, Input } from '../components';
import { IAddProduct, addNewProduct } from '../service/products';
import {useNavigate} from 'react-router-dom'
const AddProducts = () => {
    const navigate = useNavigate();
    const [form , setForm] = React.useState<IAddProduct>({
        name : "",
        description : "",
        price : 0,
        category : "",
    });

    const handleSubmitForm = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let data = {...form};
        data.price = parseInt(data.price.toString());
        addNewProduct(data).then((res) => {
            if(res.status === 201){
                navigate("/products")
            }
        })
    }
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value : string = e.target.value;
        setForm({...form , [name] : value})
    }

    return (
        <div className='container' style={{
            display : "flex",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            width:"100%",
        }}>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmitForm} style={{width : "100%" , display : "flex" , flexDirection : "column" , gap : "5px"}}>
                <Input onChange={handleInputChange} type="text" placeholder="Product Name" name='name' />
                <Input onChange={handleInputChange} type="text" placeholder="Description" name='description' />
                <Input onChange={handleInputChange} type="text" placeholder="Price" name='price' />
                <Input onChange={handleInputChange} type="text" placeholder="Category" name='category' />

                <button> Submit </button>
            </form>

        </div>
    )
}

export default AddProducts;


