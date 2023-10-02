import { Schema, model } from "mongoose";

const videoSchema = new Schema({ name: String, tag : String, transcription: String},{timestamps : true})

const Video = model ('video', videoSchema)

export default Video
