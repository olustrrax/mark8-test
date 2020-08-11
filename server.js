const express = require('express')
const next = require('next')
const multer = require('multer')
const fs = require('fs')
const port = process.env.PORT || 8080
const dev = 'develop'
const app = next({ dev })
const handle = app.getRequestHandler()

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({
  storage,
  limits: {
    fileSize: 10000000
  },
  fileFilter: async (req,file, cb) => {
    fs.mkdir(__dirname+'/public/upload', { recursive: true }, (err) => { if (err) throw err; });
    if (!(file && file.mimetype && file.mimetype.includes("image"))) {
      return cb(new Error("กรุณาอัพโหลดไฟล์ jpg, jpeg, png เท่านั้น"), false)
    }
    return cb(null, true)
  }
})
app.prepare()
  .then(() => {
    const server = express()
    server.get('/', (req, res) => {
      return app.render(req, res, '/index', req.query)
    })
    server.post(
      '/upload',
      upload.single('photo1'),
      (req, res) => {
        res.send(req.file.path.replace('public',''))
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})