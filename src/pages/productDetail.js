import { useEffect, useState } from "../lib"

const ProductDetail = (id)  => {
const [product, setProduct] = useState({})

useEffect(function (){
  fetch("http://localhost:3000/products/" + id)
  .then((res)=>res.json())
  .then(data => setProduct(data))
},[])
// console.log(product);
useEffect(()=>{
  const updateBtn= document.querySelector("#btn-update")
  updateBtn.onclick =(e)=>{
    e.preventDefault()
    console.log(updateBtn);
    handleUpdateProduct()
    alert("Cập nhật thành công!!")
  }
})

const handleUpdateProduct =() =>{
  const formData = new  FormData(document.querySelector("#update-form"));
  const data={
    product_name : formData( 'product-name'),
    color: formData('color') ,
    category: formData( 'category'),
    description: formData( 'description'),
    rate: formData('rate'),
    price: formData('price')
  }
fetch("http://localhost:3000/products/" + id,{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data)
})
  
}

  return/*html*/`
    <form action="" id="update-form"  class="w-full max-w-lg mx-auto mt-14">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Product Name
      </label>
      <input class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" name="product-name" type="text" placeholder="Product name" value="${product.product_name}">
    
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label
      id="color"
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Color
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Color" value="${product.color}">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Category
      </label>
      <div class="relative">
        <select  class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option ${product.category=="Laptop"?"selected":"" } value="Laptop">Laptop</option>
          <option  ${product.category=="Mobile"?"selected":"" }
          value="Mobile">Mobile</option>
          <option  ${product.category=="Tablet"?"selected":"" }
          value="Tablet">Tablet</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
       
    </div>
    
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Description
    </label>
   <textarea class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> ${product.description}</textarea>
     
  </div>
  
</div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Price
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Price" value="${product.price}">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Rate
      </label>
      <div class="relative">
        <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option ${product.rate==1?"selected":""} value="1">1</option>
          <option ${product.rate==2?"selected":""} value="2">2</option>
          <option ${product.rate==3?"selected":""} value="3">3</option>
          <option ${product.rate==4?"selected":""} value="4">4</option>
          <option ${product.rate==5?"selected":""} value="5">5</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
   
  </div>
  <button class="btn-update mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cập nhật</button>
</form>
    `
}
export default  ProductDetail