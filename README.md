# transcribeTest
Transcribe Test
## Tech Stack
- Node js
- Express
- Mongoose
- Morgan
- Cors
- multer
- fs
- fluent-ffmpeg

## Installation
- Clone the [repo](https://github.com/nwachee/transcribeTest.git) 
``` js
- Run `npm install ` in your terminal to install packages in package.json
- Create a `.env file` and fill in values for the following variables: `MONGO_URI`
- Finally run `npm start` in your terminal
```

### Endpoints : 
- Healthcheck : `/api/healthcheck` - [ `GET`: Server Health Check ]
- upload : 
    - `/api/upload` - [ `POST`: create a new Chunk] 
    - `/api/upload/find/:tag` - [ `GET`: Find a chunk] 
    - `/api/upload/:id` - [ `DELETE`: Delete a chunk] 

- Documentation : [here](https://documenter.getpostman.com/view/23369669/2s9YJc1373)

- [API Live link](https://transcribetest.onrender.com) 

## License
This project is licensed under the MIT License.

> Copyright (c) 2023 Nwachee