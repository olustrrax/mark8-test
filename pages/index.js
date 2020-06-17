import React from "react"
import { Layout, Card, Upload, Col, Button, Row } from "antd"
import { InboxOutlined,ExclamationCircleFilled } from '@ant-design/icons';
const { Header } = Layout
import { useState } from 'react'
import TableData from "../components/TableData"
import styled from "styled-components"
import axios from 'axios'
const Home = () => {
  let title = `Bulk Upload form`
  let [dataPost, setDataPost] = useState([])
  const [amountSuccess, setASuccess] = useState()
  const [dataInvalid, setDataInvalid] = useState("")
  const ConvertData = async (csv) => {
    let dataArray = await csvToArray(csv);
    let headers = dataArray[0]
    const result = dataArray.slice(1).reduce((o, row, i) => {
      const fields = row
      let mapData = {
        amenity: [],
        status: [],
      }
      headers.map((name, j) => {
        if(['agent_post','accept_agent'].includes(name)){
          if(fields[j] === "TRUE"){
            mapData.status.push(name)
          }
        }
        else if(j < 13){
          mapData[name] = fields[j] || "not found"
          if(!fields[j] && !mapData.id.match('error')) mapData.id += 'error'
        }
        else{
          if(fields[j]){
            mapData.amenity.push(name)
          }
        }
      })
      o.push(mapData)
      return o
    },[])
    const success = result.filter(e => !e.id?.match('error'))
    setASuccess(success?.length || 0)
    setDataPost(result)
    if(success?.length !== result.length) setDataInvalid("You haven’t upload any bulk data yet")
    else setDataInvalid("")
  }

  const onEditPhoto = async (event, id) => {
    let formData = new FormData()
    const file = event.target.files[0]
    formData.append('photo1', file)
    const newImg = await axios.post(
      "/upload", 
      formData, 
      {
        headers: {
          "Content-type": "multipart/form-data",
        }
      }
    )
    .then((res) => {
      return res?.data
    })
    dataPost = await dataPost.map((e) => { 
      if(e.id==id){ e.photo1 = newImg} 
      return e
    })
    setDataPost(dataPost)
  }

  return (
    <>
      <Container>
        <HeaderSyle>
          <Logo src="/icons/logo.png" />
        </HeaderSyle>
        <Box title={
          <>
            <h2>{title} {dataInvalid? <ExclamationCircleFilled style={{ fontSize: '20px', color: "#0089FF"}} /> : "" }</h2>
            <p style={{ color: "#0089FF", margin: 0}}>{dataInvalid}</p>
          </>
        }>
          <h2>Choose your an input medthod</h2>
          <Upload 
            accept=".csv"
            showUploadList={false}
            beforeUpload={file => {
              const reader = new FileReader();
              reader.onload = e => {
                ConvertData(e.target.result)
              };
              reader.readAsText(file);
              // Prevent upload
              return false;
            }}
          >
            <ButtonUpload>
              <img style={{ margin: "auto 0"}} src="/icons/space_bar.png"></img>
              <div style={{ width: "100%", margin: "auto 0 auto 1vw", textAlign: "start"}}>
                <p style={{ fontWeight: 800}} >via CSV file</p>
                <p>
                  อัปเดตข้อมูลจากไฟล์ CSV
                </p>
              </div>
            </ButtonUpload>
          </Upload>
        </Box>
      </Container>
      {
        dataPost.length ?
        <ContentStyle>
          <ResultUpload>
            <div className="box">
              <h2>
                {amountSuccess}
              </h2>
            </div>
            <h2 className="list">listings successfully and Ready to published</h2>
            <Row display="flex" justifycontent="flex-end" >
              <div style={{ margin: "auto", display: "flex"}} >
                <img src="/icons/update.png"/> <p className="update">Update data</p>
              </div>
              <div style={{ margin: "auto 2vw"}}>
                <img src="/icons/open_in_browser.png" />
              </div>
              <div style={{ margin: "auto"}}>
                <p style={{margin : "auto 1vw", color: "#A6AAB4"}}>Published</p>
              </div>
            </Row>
          </ResultUpload>
          <TableData
            editPhoto={onEditPhoto}
            rows={dataPost}
          />
        </ContentStyle>
        : ""
      }
    </>
  )
}

export default Home

const csvToArray = (text) => {
  let row = [], c = 0, i=0, ans = '', res = [];
  for(let d of text){
    if(d ===',' && !c){
      row.push(ans)
      ans = d = '';
    }
    else if(d==='"'){
      if(!c) c = 1; else c = 0;
      d = '';
    }
    else if((++i === text.length || '\n' === d || '\r' === d ) && !c && row.length){
      row.push(ans); res.push(row);
      d = ans ='';
      row = []; c = 0;
    } 
    ans+=d;
  }
  res.push(row)
  return res
}

const ResultUpload = styled.div`
  display: flex;
  width: auto;
  height: 88px;
  left: 0px;
  top: 0px;

  /* bg card */

  background: #FFFFFF;
  /* Border */

  border: 0.5px solid #E5E5E5;
  box-sizing: border-box;
  div.box{
    background: #F3F5F8;
    height: 88px;
    display: flex;
  }
  p.update{
    color: #0089FF;
    margin: auto 1vw;
    line-height: 0;
  }
  h2{
    margin: auto 2vw;
  }
  h2.list{
    width: 70%;
  }
`
const ButtonUpload = styled(Button)`
  width: 30vw;
  height: 104px;
  left: 0px;

  /* bg card */

  background: #FFFFFF;
  /* Border */
  display: flex;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 6px;
`
const ContentStyle = styled.div`
  width: auto;
  height: auto;
  top: 0px;
  margin: 2vw 0;
  /* bg card */

  background: #FFFFFF;
  /* Border */

  border: 0.5px solid #E5E5E5;
  box-sizing: border-box;
`
const Box = styled(Card)`
  max-width: 1019px;
  height: 296px;
  margin: auto;
  /* bg card */

  background: #FFFFFF;
  /* Border */

  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 6px;
  .ant-card-body {
    padding: 20px 24px;
  }
`

const Container = styled.div`
  min-height: 10vh;
  margin-top: 120px;
  padding: 0 20vw;
`
const HeaderSyle = styled(Header)`
  width: 100%;
  height: 56px;
  background: #002240;
  position: absolute;
  left: 0px;
  top: 0px;
`

const Logo = styled.img`
  position: absolute;
  width: 90px;
  height: 31.76px;
  left: 20vw;
  top: 12.18px;
`
