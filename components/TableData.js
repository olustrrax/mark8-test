
import { Table, Popover, Tag } from "antd"
import {  CaretDownOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react"
import styled from "styled-components"

const TableData = (props) => {
  const [rows, setRows ] = useState(props?.rows)
  useEffect(() => {
    setRows(props?.rows)
  },[props?.rows])
  const columns = [
    {
      dataIndex: 'id',
      key: 'id',
      width: 50,
      align: 'center',
      render: (id) => (
          id.match('error') ? (
            <BadgeError>
              <p>{id.replace('error', '')}</p>
            </BadgeError>
          ) : id
      )
    },
    {
      title: 'CONDO NAME',
      dataIndex: 'condo_name-EN',
      key: 'condo_name-EN',
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'RENT PRICE (Baht)',
      dataIndex: 'rent_price',
      key: 'rent_price',
      ellipsis: true,
      render: (rent_price) => (
        <>{
          rent_price === 'not found' ?
          <TextNotfound>{rent_price}</TextNotfound> :
          rent_price !== "0" ?
          <p style={{margin: 0}}> {rent_price} <MonthSpan>/month</MonthSpan></p>
          : ""
        }</>
      )
    },
    {
      title: 'SELL PRICE (Baht)',
      dataIndex: 'sale_price',
      key: 'sale_price',
      ellipsis: true,
      render: (sale_price) => (
        <>{
          sale_price !== "0"  ?
          <p style={{margin: 0}}> {sale_price}</p>
          : ""
        }</>
      )
    },
    {
      title: 'BEDROOM',
      dataIndex: 'bedroom',
      key: 'bedroom',
      width: 80,
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'BATHROOM',
      dataIndex: 'bath',
      key: 'bath',
      width: 80,
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'SIZE (sqm.)',
      dataIndex: 'size (sq.m)',
      key: 'size (sq.m)',
      width: 80,
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'FLOOR',
      dataIndex: 'floor',
      key: 'floor',
      width: 80,
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      ellipsis: true,
      render: (status) => (
        <div style={{ display: "flex"}}>{
        status.map((item, i) => (
          <TagStyle 
            color={item === 'agent_post'? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)"}
            key={i}
          >
            <p style={{ color: item === 'agent_post'? "#6FCF97" : "#F2C94C"}}>
              {item === 'agent_post'? "Agent post" : "รับ Co Agent"}
            </p>
          </TagStyle>
        ))
        }</div>
      ),
    },
    {
      title: 'PHOTO',
      dataIndex: 'photo1',
      ellipsis: true,
      key: 'action',
      render: (_, record) => (
        <PreviewPhoto>
          <img src={record.photo1 || "/icons/mockImage.png"} />
          <div className="inputFile">
            <input
              id="file"
              type='file'
              name='photo1'
              onChange={(event) => props.editPhoto(event, record.id)}
              accept='image/*' 
            />
            <a>Edit photo</a>
          </div>
        </PreviewPhoto>
      )
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      render: (item) => (
        item === 'not found' ?
        <TextNotfound>{item}</TextNotfound> : item
      )
    },
    {
      title: 'Amenities',
      dataIndex: 'amenity',
      key: 'amenity',
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
        } title="Amenities" 
        trigger="hover"
        
        >
          <div>
            <p style={{position: "absolute"}}>{amenity.length}</p>
            <CaretDownOutlined  style={{margin: "0.3vw 0 0 2vw"}}/>
          </div>
        </Popover>
      ),
    },
  ]

  return(
    <TableStyle
      columns={columns}
      size="small"
      dataSource={rows}
      pagination={false}
      scroll={{ x: "calc(700px + 50%)" }}
    />
  )
}


const PreviewPhoto = styled.div`
  img{
    object-fit: cover;
    width: 24px;
    height: 24px;
    border-radius: 6px;
  }
  .inputFile{
    display: none;
    position: relative;
    width: auto;
  }
  .inputFile input{
    width: 5vw;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  img:hover + .inputFile, .inputFile:hover{
    display: inline-block;
    padding-left: 0.5vw;
  }
`
const MonthSpan = styled.span`
  color: #A6AAB4;
`
const TableStyle = styled(Table)`
  .ant-table thead th.ant-table-cell-ellipsis{
    color: #A6AAB4;
  }
`
const TagStyle = styled(Tag)`
  border-radius: 50px;
  p{
    font-size: 16px;
    text-align: center;
    margin: 0;
  }
`
const BadgeError = styled.div`
  background: #EB5757;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  p{
    margin: auto;
    color: #FFFFFF;
  }
`

const TextNotfound = styled.p`
  color: #EB5757;
  margin: 0;
`
export default TableData