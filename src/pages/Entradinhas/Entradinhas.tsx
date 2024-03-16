import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "../Hamburgers/Hamburgers.style";
import {
    ProductCardContent,
    ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";
import { ButtonAppettizers } from "./Entradinhas.style";

export default function Entradinhas() {
    const [isLoading, setIsloading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState({});


    const priceFormat = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    const getCategories = async () => {
        const url = "http://localhost:8000/categories"
        setIsloading(true);
        try {
            const response = await fetch(url)
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('cabô');
            setIsloading(false);
        }
    };

    const getAppetizers = async () => {
        const url = "http://localhost:8000/appetizers"
        setIsloading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            setProducts(data);

            const selectedPrices = {
                data.forEach((product, index) => {
                    selectedPrices[index] = "small";
                }
                )
            }


            setSelected(selectedPrices);

        } catch (error) {
            console.log(error);

        } finally {
            console.log('finnaly');
            setIsloading(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);


    useEffect(() => {
        getAppetizers();
    }, []);

    const handleChange = (index: number, price: string) => {
        setSelected({ selected, [index]: price });
    }

    return (
        <Layout>
            <h1>Entradinhas</h1>
            <ProductCategories>
                {isLoading ? (<p>Carregando</p>)
                    : (
                        categories.map((item, index) => (
                            <CategoryList key={index} data={item} />

                        ))
                    )}

            </ProductCategories>
            <ProductWrapper>
                {isLoading
                    ? (<p>Carregando</p>)
                    : (
                        products.map((product, index) => (
                            <ProductCard key={index}>
                                <ProductCardContent>
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <ButtonAppettizers>
                                        <div>
                                            <input type="radio" id={`price_small_${index}`}
                                                value="small"
                                                checked={selected[index] === "small"}
                                                onChange={() => handleChange(index, "small")}
                                            />
                                            <label htmlFor={`price_small_${index}`}>Pequeno</label>

                                            <input type="radio" id={`price_large_${index}`}
                                                value="large"
                                                checked={selected[index] === "large"}
                                                onChange={() => handleChange(index, "large")}
                                            />
                                            <label htmlFor={`price_large_${index}`}>Grande</label>
                                        </div>
                                    </ButtonAppettizers>
                                    <Button onClick={() => { }}>Adicionar</Button>
                                </ProductCardContent>
                                <ProductCardPrice>
                                    {priceFormat(product.values[selected[index]])}
                                </ProductCardPrice>
                                <img src={product.image} alt={product.title} />
                            </ProductCard>
                        ))
                    )
                }
            </ProductWrapper>
        </Layout>
    );
}