import { timeStamp } from "console";
import mongoose , {Schema} from "mongoose";

const topicSchema = new Schema({
    task:String ,
},
{ 
    timestamps: true,
},
);

const Topic = mongoose.models.Topic||mongoose.model('Topic',topicSchema);

export default Topic;