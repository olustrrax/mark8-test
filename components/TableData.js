
import { Layout, Card, Upload, message, Badge, Table, Popover } from "antd"
import { InboxOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react"


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
      width: 50
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
      title: 'RENT PRICE(Baht)',
      dataIndex: 'rent_price',
      ellipsis: true
    },
    {
      title: 'SELL PRICE(Baht)',
      dataIndex: 'sale_price',
      ellipsis: true
    },
    {
      title: 'BEDROOM',
      dataIndex: 'bedroom',
      width: 100,
      ellipsis: true
    },
    {
      title: 'BATHROOM',
      dataIndex: 'bath',
      width: 100,
      ellipsis: true
    },
    {
      title: 'SIZE(sqm.)',
      dataIndex: 'size (sq.m)',
      ellipsis: true
    },
    {
      title: 'FLOOR',
      dataIndex: 'floor',
      width: 100,
      ellipsis: true
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      width: 300,
      ellipsis: true,
      render: (status) => (
        status.map((item) => (
          <div style={{
            background: item === 'agent_post'? "rgba(111, 207, 151, 0.24)" 
            : "rgba(243, 208, 83, 0.28)",
            borderRadius: "20px",
            width: "5vw",
            padding: "0 10px"
          }}>
            <p style={{ color: item === 'agent_post'? "#6FCF97" 
                : "#F2C94C"}} > {item === 'agent_post'? "Agent post" : "รับ Co Agent"}</p>
          </div>
        ))
      ),
    },
    {
      title: 'PHOTO',
      dataIndex: 'photo1',
      ellipsis: true,
      render: photo => (
        <img src={photo || "/icons/man.png"} width="35px" />
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
          {/* <p>{amenity.length}</p> */}
          {amenity.length}
          <CaretDownOutlined />
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

export default TableData