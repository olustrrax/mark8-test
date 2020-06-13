import Head from 'next/head'
import React from "react"
import { Layout, Card, Upload, message, Button } from "antd"
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
const { Header, Content } = Layout
import { useState } from 'react'
import TableData from "../components/TableData"
import styled from "styled-components"

const Home = () => {
  let title = `Bulk Upload form`
  const [dataPost, setDataPost] = useState([])
  const [amountSuccess, setASuccess] = useState()
  const ConvertData = async (csv) => {
    let dataArray = await csvToArray(csv);
    let headers = dataArray[0]
    const result = dataArray.slice(1).reduce((o, row, i) => {
      const fields = row
      let mapData = {
        amenity: [],
        status: [],
        error: false
      }
      headers.map((name, j) => {
        if(['agent_post','accept_agent'].includes(name)){
          if(fields[j] === "TRUE"){
            mapData.status.push(name)
          }
        }
        else if(j < 13){
          mapData[name] = fields[j] || "not found"
          if(!fields[j]) mapData.error = true
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
    const success = result.filter(e => !e.error)
    setASuccess(success?.length || 0)
    setDataPost(result)
  }


  return (
    <>
      <Container>
        <HeaderSyle>
          <Logo src="/icons/logo.png" />
        </HeaderSyle>
        <Box title={title}>
          <h2>Choose your an input medthod</h2>
          <Upload 
            accept=".csv"
            showUploadList={false}
            beforeUpload={file => {
                const reader = new FileReader();
        
                reader.onload = e => {
                    // console.log(e.target.result);
                    // csvJSON(e.target.result)
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
        dataPost.length &&
        <>
        <p>table</p>
        <ContentStyle>
          <ResultUpload>
            <div className="box">
              <p>
                {amountSuccess}
              </p>
            </div>
            <h1>listings successfully and Ready to published</h1>
          </ResultUpload>
          <TableData
            rows={dataPost}
          />
        </ContentStyle>
        </>
      }
      
      
    </>
  )
}

export default Home

const csvToArray = (text) => {
  let p = '', row = [''], ret = [row], i = 0, r = 0, s = true, l;
  for (l of text) {
      if ('"' === l) {
          if (s && l === p) row[i] += l;
          s = !s;
      } else if (',' === l && s) l = row[++i] = '';
      else if ('\n' === l && s) {
          if ('\r' === p) row[i] = row[i].slice(0, -1);
          row = ret[++r] = [l = '']; i = 0;
      } else row[i] += l;
      p = l;
  }
  return ret;
}

const ResultUpload = styled.div`
  display: flex;
  width: 1920px;
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
    width: 83px;
    height: 88px;
    display: flex;
  }
  div.box > p{
    font-size: 24px;
    color: #002240;
    margin: auto;
  }
  h1{
    margin: auto 1vw;
  }
`
const ButtonUpload = styled(Button)`
  width: 643px;
  height: 104px;
  left: 0px;
  top: 44px;

  /* bg card */

  background: #FFFFFF;
  /* Border */
  display: flex;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 6px;
`
const ContentStyle = styled.div`
  width: 1920px;
  height: 88px;
  top: 0px;
  margin: 2vw 0;
  /* bg card */

  background: #FFFFFF;
  /* Border */

  border: 0.5px solid #E5E5E5;
  box-sizing: border-box;
`
const Box = styled(Card)`
  width: 1019px;
  height: 296px;
  // left: 448px;
  // top: 120px;
  // position: absolute;
  margin: auto;
  /* bg card */

  background: #FFFFFF;
  /* Border */

  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 6px;
`

const Container = styled.div`
  min-height: 10vh;
  margin-top: 120px;
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
  left: 448px;
  top: 12.18px;
`
