import Video from "../models/video.model.js";

export const createVideo = async(input) => { return await Video.create(input)}
export const getVideo = async(input) => {return await Video.findOne(input)}
export const deleteVideo = async(id) => {return await Video.findByIdAndDelete(id)}