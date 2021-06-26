import {OnFetchProducts, ProductsRequested} from "../redux/actions";


const ProductService = [
    {
        id: 1,
        name: "Iphone 2G",
        price: 50,
        description: "molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed",
        image: `https://static.turbosquid.com/Preview/001311/864/BW/_600.jpg`,
    },
    {
        id: 2,
        name: "Iphone 3GS",
        price: 70,
        description: "sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae",
        image: `https://ilounge.ua/files/products/apple-iphone-3gs-16gb-black-1.1000x1000.jpg`,
    },
    {
        id: 3,
        name: "Iphone 4S",
        price: 80,
        description: "egestas integer eget aliquet nibh praesent tristique magna sit amet",
        image: `https://www.dhresource.com/0x0s/f2-albu-g5-M00-D1-44-rBVaI1nDd8WAHST-AADU29-H0_Q654.jpg/refubished-iphone-4s-16gb-100-iphone-ios.jpg`,
    },
    {
        id: 4,
        name: "Iphone 5S",
        price: 90,
        description: "id nibh tortor id aliquet lectus proin nibh nisl condimentum",
        image: `https://swipe.ua/images/31/iphone_5s_16gb_space_gray-63058331317164_small10.png`,
    },
    {
        id: 5,
        name: "Iphone 6S",
        price: 120,
        description: "platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras",
        image: `https://stylus.ua/thumbs/568x568/32/f0/428994.jpeg`,
    },
    {
        id: 6,
        name: "Iphone 7",
        price: 240,
        description: "massa ultricies mi quis hendrerit dolor magna eget est lorem",
        image: `https://gstore.ua/content/images/31/apple-iphone-7-plus-32gb-rg-68634242883112_small11.png`,
    },
    {
        id: 7,
        name: "Iphone 8",
        price: 360,
        description: "bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim",
        image: `https://www.apple.com/content/dam/newsroom/images/product/iphone/standard/iphone8_iphone8plus_product_red_front_back_041018_big.jpg/_jcr_content/renditions/large.jpg`,
    },
    {
        id: 8,
        name: "Iphone 10",
        price: 450,
        description: "tortor at auctor urna nunc id cursus metus aliquam eleifend",
        image: `https://stylus.ua/thumbs/390x390/f6/f7/839775.jpeg`,
    },
    {
        id: 9,
        name: "Iphone 11",
        price: 699,
        description: "porta nibh venenatis cras sed felis eget velit aliquet sagittis",
        image: `https://cdn0.it4profit.com/resize/940x-/catalog-products/190911080925130127/190916160012095003.png`,
    },
]

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductService)
        }, 1300);
    });
}

export const ProductsThunkCreator = () => (dispatch) => {
    dispatch(ProductsRequested(true))
    getData().then((res) => {
            dispatch(OnFetchProducts(res))
            dispatch(ProductsRequested(false))
        }
    )

}
