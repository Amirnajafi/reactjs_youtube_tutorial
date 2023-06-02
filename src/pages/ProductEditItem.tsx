import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../components/input/input";
import React, { useEffect } from "react";
import { IAddProduct, IEditProduct, editProduct, getProductItem } from "../service/products";

interface IData {
  
}
const ProductEditItem = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const [form , setForm] = React.useState<IEditProduct>({
      name : "",
      description : "",
      price : 0,
      category : "",
      id : "",
      user : {}
  });

  useEffect(()=>{
    getProductItem(id).then((res)=>{
        setForm(res)
    })
  } , [])

  const handleSubmitForm = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let data = {...form};
      data.price = parseInt(data.price.toString());
      delete data.user;
      editProduct(data).then((res)=>{
        navigate("/products")
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
              <Input value={form.name} onChange={handleInputChange} type="text" placeholder="Product Name" name='name' />
              <Input value={form.description} onChange={handleInputChange} type="text" placeholder="Description" name='description' />
              <Input value={form.price} onChange={handleInputChange} type="text" placeholder="Price" name='price' />
              <Input value={form.category} onChange={handleInputChange} type="text" placeholder="Category" name='category' />

              <button> Submit </button>
          </form>

      </div>
  )
}

export default ProductEditItem;
