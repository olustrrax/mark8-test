
import { Layout, Card, Upload, message, Badge, Table, Popover } from "antd"
import { InboxOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react"
import styled from "styled-components"

const TableData = (props) => {
  const [rows, setRows ] = useState(props?.rows)
  useEffect(() => {
    setRows(props?.rows)
  },[props?.rows])
  const columns = [
    {
      // title: () => { 
      //   return <p className="column"></p>
      // },
      dataIndex: 'id',
      width: 50,
      // render: (id) => (
      //   <div >

      //   </div>
      // )
    },
    {
      // title: () => { 
      //   return <p className="column">CONDO NAME</p>
      // },
      title: 'CONDO NAME',
      dataIndex: 'condo_name-EN',
      ellipsis: true
    },
    {
      // title: () => { 
      //   return <p className="column">RENT PRICE(Baht)</p>
      // },
      title: 'RENT PRICE (Baht)',
      dataIndex: 'rent_price',
      ellipsis: true,
      render: (rent_price) => (
        <>{
          rent_price !== "0" ?
          <p> {rent_price} <span style={{color: "#A6AAB4"}}>/month</span></p>
          : ""
        }</>
      )
    },
    {
      title: 'SELL PRICE (Baht)',
      dataIndex: 'sale_price',
      ellipsis: true,
      render: (sale_price) => (
        <>{
          sale_price !== "0"  ?
          <p> {sale_price}</p>
          : ""
        }</>
      )
    },
    {
      title: 'BEDROOM',
      dataIndex: 'bedroom',
      width: 80,
      ellipsis: true
    },
    {
      title: 'BATHROOM',
      dataIndex: 'bath',
      width: 80,
      ellipsis: true
    },
    {
      title: 'SIZE (sqm.)',
      dataIndex: 'size (sq.m)',
      width: 80,
      ellipsis: true
    },
    {
      title: 'FLOOR',
      dataIndex: 'floor',
      width: 80,
      ellipsis: true
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      width: 300,
      ellipsis: true,
      render: (status) => (
        <div style={{ display: "flex"}}>{
        status.map((item) => (
          <BadgeStatus
            bg={item === 'agent_post'? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)"}
          >
            <p style={{ textAlign: "center",color: item === 'agent_post'? "#6FCF97" 
                : "#F2C94C"}} > {item === 'agent_post'? "Agent post" : "รับ Co Agent"}</p>
          </BadgeStatus>
        ))
        }</div>
      ),
    },
    {
      title: 'PHOTO',
      dataIndex: 'photo1',
      ellipsis: true,
      render: photo => (
        <img src={photo || "/icons/mockImage.png"} width="24px"  />
      )
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      ellipsis: true
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      ellipsis: true
    },
    // {
    //   title: 'BENEFIT',
    //   dataIndex: 'name',
    //   ellipsis: true
    // },
    {
      title: 'Amenities',
      dataIndex: 'amenity',
      ellipsis: true,
      width: 80,
      render: amenity => (
        <Popover placement="bottomRight" content={
          <div>
            {
              amenity.map((item) => (
                <p>{item}</p>
              ))
            }
           
          </div>
        } title="Amenities" trigger="hover">
          <div>
            <p style={{position: "absolute"}}>{amenity.length}</p>
            {/* {amenity.length} */}
            <CaretDownOutlined  style={{margin: "0.3vw 0 0 2vw"}}/>
          </div>
          
        </Popover>
      ),
    },
  ]

  return(
    <Table
      columns={columns}
      size="small"
      dataSource={rows}
      pagination={false}
      scroll={{ x: 1300 }}
    />
  )
}

const BadgeStatus = styled.div`
  background: ${props => props.bg || rgba(243, 208, 83, 0.28)};
  border-radius: 20px;
  width: 5vw;
  padding: 0 5px;
  height: 4vh;
`
export default TableData