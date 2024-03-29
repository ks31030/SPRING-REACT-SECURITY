import React, {useState} from "react";
import axios from "axios";

function AddProduct({onAddProduct}) {
    const [newProduct, setNewProduct] = useState({name: '', price: 0});

    // //get axios api
    // useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //         await axios.get(
    //             'http://localhost:8081/api/item'
    //         )
    //     } catch(error) {
    //         console.log("데이터가 잘못되었습니다.", error);
    //     }
    // };
    // fetchData();
    // }, []);

    //post axios api
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewProduct((prevProduct) => ({...prevProduct, [name]: value}));
    };

    const handleAddProduct = async () => {
        try{
            //input값 보내 줄 post 작성
            const response = await axios.post(
                'http://localhost:8081/api/item',
                newProduct, {withCredentials: true}
            )
            //변경된 데이터값 저장
            onAddProduct((prevProduct) => [...prevProduct, response.data]);
            //저장 후 값 초기화
            setNewProduct({name: '', price: 0});
        } catch(error) {
            console.log('error', error);
        }
    };

    return (
        <div>
            <h2>상품 추가</h2>
            <div>
                <label>상품명 : </label>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label>r가 격 : </label>
                <input type="number" name="price" value={newProduct.name} onChange={handleInputChange}/>
            </div>
            <button onClick={handleAddProduct}>상품 추가</button>
        </div>
    )
}
export default AddProduct;