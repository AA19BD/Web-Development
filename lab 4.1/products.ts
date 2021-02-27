
import { Url } from 'url';

export interface Product {
    name: string,
    price: number,
    rating: number,
    image: Url,
    link: Url,
    description: string

}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    rating:3,
    image: 'https://m.media-amazon.com/images/I/51n24DedexL._FMwebp__.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-XR-128GB-Blue/dp/B07VPRGXXV/ref=sr_1_1?dchild=1&keywords=iphone+xr&qid=1614382495&sr=8-1',
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    rating:4,
    image: 'https://m.media-amazon.com/images/I/71uuDYxn3XL._FMwebp__.jpg',
    link:'https://www.amazon.com/dp/B08L5PYTWY/ref=fs_a_iwp2_3',
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    rating:1,
    image:'https://m.media-amazon.com/images/I/81hCytKTUTL._FMwebp__.jpg',
    link:'https://www.amazon.com/dp/B0875RT5WS/ref=fs_a_iwp2_4',
    description: ''
  },
  {   id:4,
      name: '2020 Apple MacBook Air',
      price: 999,
      description: ' MacBook Air with Apple M1 ',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5M7S6K?ref_=Oct_s9_apbd_onr_hd_bw_b2N0e&pf_rd_r=17YH9P53SN7BDF2QST9S&pf_rd_p=b2e34a42-7eb2-50c2-8561-292e13c797df&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=565108'
    },
    { 
      id:5,
      name: 'MSI laptop',
      price: 1307,
      description: 'MSI GL65 Leopard 10SFK-062 15.6" ',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81ftUqDdYFL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/MSI-Leopard-10SFK-062-i7-10750H-RTX2070/dp/B085B3GFRL?ref_=Oct_s9_apbd_omg_hd_bw_b2N0e&pf_rd_r=17YH9P53SN7BDF2QST9S&pf_rd_p=079802f4-7ae7-5199-a84a-6dbb4331abf2&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=565108'
    },
    {
      id:6,
      name: 'Samsung Galaxy S21',
      price: 999,
      description: 'Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android',
      rating: 4,
      image:'https://images-na.ssl-images-amazon.com/images/I/61O45C5qASL._AC_SX679_.jpg',
      link:'https://www.amazon.com/dp/B08N2MSSZY/ref=va_live_carousel?pf_rd_r=TSY7Q2N38KPBFQDPV5R7&pf_rd_p=14936841-ca05-4835-b3bf-87617ecd98a6&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-dp-sims&pd_rd_w=AKfiz&pd_rd_r=cd3d1548-0ed4-4b12-ae50-3c1c462530bb&pd_rd_wg=odHFL&linkCode=ilv&tag=thisistecht0b-20&ascsubtag=YT_Video_Editing_session_Gear_Samsung_Galaxy_S21_Ultra_210224054211&pd_rd_i=B08N2MSSZY'
    },
    {
      id:7,
      name: 'S21 Plus',
      price: 914,
      description: 'Samsung Galaxy S21 Plus ',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81u8oHzGLmL._AC_SX679_.jpg',
      link:'https://www.amazon.com/dp/B08QXFPWXH/ref=va_live_carousel?pf_rd_r=05SHBXFY9YBCXDZ8JA7R&pf_rd_p=14936841-ca05-4835-b3bf-87617ecd98a6&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-dp-sims&pd_rd_w=59dh9&pd_rd_r=dcb6752e-717c-4a0a-9ee3-8a91e7acc29a&pd_rd_wg=ud8GK&linkCode=ilv&tag=thisistecht0b-20&ascsubtag=YT_Video_Editing_session_Gear_Samsung_Galaxy_S21_Ultra_210224054211&pd_rd_i=B08QXFPWXH'
    },
    {
      id:8,
      name: 'Apple Watch Series 3 ',
      price: 300,
      description: 'Space Gray Aluminum Case with Black Sport Band',
      rating: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SX679_.jpg',
      link:'https://www.amazon.com/Apple-Watch-GPS-38mm-Space-Aluminium/dp/B07K39FRSL/ref=sr_1_2?dchild=1&keywords=apple&qid=1614148648&sr=8-2'
    },
    {
      id:9,
      name: ' Digital Pencil for Apple iPad Pro',
      price: 50,
      description: '4th Generation Stylus Pen ',
      rating: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/61vp1JZ74dL._AC_SX679_.jpg',
      link:'https://www.amazon.com/EDIVIA-Rejection-Plastic-Digital-Drawing/dp/B082G93G79/ref=sr_1_1_sspa?dchild=1&keywords=apple&qid=1614148746&sr=8-1-spons&psc=1&smid=A1YAGQBGXVT2E5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNDhSVjgzUDNJM1EmZW5jcnlwdGVkSWQ9QTA1NzM5NDFGVjFJSEpGRVpPWUEmZW5jcnlwdGVkQWRJZD1BMDEzODg3MjNCSlhCTEM1N0dVVU4md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
    },
    {
      id:10,
      name: 'Apple AirPods Pro',
      price: 200,
      description: 'Apple AirPods Pro',
      rating: 3.4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=sr_1_3?dchild=1&keywords=apple&qid=1614148746&sr=8-3'
    },
    {
      id:11,
      name: 'New Apple AirPods Max ',
      price: 500,
      description: 'Headphones',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81jqUPkIVRL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/dp/B08PZHYWJS/ref=fs_a_mdt2_us0'
    },
    {
      id:12,
      name: 'Apple TV 4K',
      price: 500,
      description: 'TV',
      rating: 3,
      image:'https://images-na.ssl-images-amazon.com/images/I/51Y-Dulc3bL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/Apple-TV-64GB-Latest-Model/dp/B075NHCSS4/ref=sr_1_7?dchild=1&keywords=apple&qid=1614148746&sr=8-7'
    },

    {
      id:13,
      name: 'Apple Magic Keyboard',
      price: 400,
      description: 'Keyboard for iPad Air',
      rating: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71pBL3qCPXL._AC_SX679_.jpg',
      link: 'https://www.amazon.com/Magic-Keyboard-11-inch-iPad-Generation/dp/B0863BQJMS/ref=sr_1_9?dchild=1&keywords=apple&qid=1614148746&sr=8-9'
    },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/