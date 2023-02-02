import ProductsCard from "./ProductsCard";

export default function ProductList({data}) {
    return(
        <>

        {
            data?.map((item, index) => (
                <ProductsCard  key={index} item = {item}/>
            ))
        }
            
        </>
    )
}