import * as services from '../services/video.service.js'
export const createChunk = async(req, res, next) => {
try {
    const chunkData = await services.createVideo({name: req.file.filename, tag: req.body.tag })
    return res.status(201).json({success:true, message: 'Chunk saved successfully', data : chunkData})
} catch (error) { next(error) }
}

export const findChunk = async (req, res, next) => {
    try {
const videoChunks = await services.getVideo({tag: req.params.tag})
if (!videoChunks) { res.status(404).json({ error: 'Video not found' }); }
 res.status(200).send({ data: videoChunks})
 } catch(error) { next(error) }
  }
  export const renderChunk = async(req, res, next) => {
    try {
    } catch (error) {next(error)}
}

  export const deleteChunk = async (req, res, next) => {
    try {
    //check if video exits before updating
    const checkVid = await services.deleteVideo({ _id: req.params.id })
    if(!checkVid) return res.status(404).json({success: false,message: 'Video not found'})
    //delete video 
    await services.deleteVideo(req.params.id)
    return res.status(200).json({success: true,message: 'Video Deleted Successfully', data: checkVid})}
    catch (error) {next(error);}
    }