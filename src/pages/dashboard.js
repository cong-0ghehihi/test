import { useEffect, useState } from "../lib"


const DashBoard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                setProducts(data)
                // console.log(data);
            })
    }, [])

    useEffect(() => {
        const deleteBtn = document.querySelectorAll(".delete-btn");
        // console.log(deleteBtn);
        deleteBtn.forEach(function(btn){
            btn.onclick= function(){
                
                const cf  =confirm("Xóa nha??")
                if(cf){
                    const id = btn.dataset.id
            console.log(id);

                    handleDeleteProduct(id)
                    location.reload();
                    alert("Xóa thành công")
                }
            }
           })
    })
    
    const handleDeleteProduct =function(id)  {
        fetch("http://localhost:3000/products/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    return /*html*/`
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Product name
            </th>
            <th scope="col" class="px-6 py-3">
                Color
            </th>
            <th scope="col" class="px-6 py-3">
            Category
            </th>
            <th scope="col" class="w-1/6 px-6 py-3">
            Description
        </th>
        <th scope="col" class="px-6 py-3">
            Rate
        </th>
            <th scope="col" class="px-6 py-3">
                Price
            </th>
            <th scope="col" class="w-[10%] px-6 py-3">
                <span  class="">Action</span>
            </th>
        </tr>
    </thead>
    <tbody>
      ${products.map((p) =>
      /*html*/`
    
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               ${p.product_name}
            </th>
            <td class="px-6 py-4">
            ${p.color}
            </td>
            <td class="px-6 py-4">
            ${p.category}
            </td>
            <td class="px-6 py-4 w-24">
            ${p.description}
        </td>
        <td class="px-6 py-4">
        ${p.rate}
        </td>
            <td class="px-6 py-4">
            ${p.price}
            </td>
            <td  class="px-6 py-4 text-right">
                <a href="/detail/${p.id}" class="pr-6 bg-red font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <button data-id="${p.id}" class="delete-btn font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
            </td>
        </tr>
        `
    ).join("")}
    </tbody>
</table>
</div>

    `
}
export default DashBoard