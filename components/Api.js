import {useState, useEffect} from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';


const Api = ()=>{

   const [coinArray, setCoinArray] = useState([])
   const [loading, setLoading] =useState(true);


   useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&price_change_percentage=1h%2C24h%2C7d&sparkline=false")
      .then(response => response.json())
      .then(data=>{console.log(data);setCoinArray(data);setLoading(false)})
   }, [])


   const columns = [
      {
         title: 'marketCap',
         dataIndex: 'market_cap_rank',
         defaultSortOrder: 'descend',
     
       },
      {
        title: 'Moneda',
        dataIndex: 'name',
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortDirections: ['descend'],
      },
 
      {
         title: 'Variacion ultima hora en %',
         dataIndex: 'price_change_percentage_1h_in_currency',
         defaultSortOrder: 'descend',
         sorter: (a, b) => a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency,
      },
    ];


   return(<>
   {
      loading?null:
      <Table columns={columns} dataSource={coinArray}     pagination={false}  />
   }
   
   </>)

}

export default Api