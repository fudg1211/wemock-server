import {Schema, Model, Document, model} from 'mongoose';

const animalSchema: Schema = new Schema({name: String, type: String, author: String});
export const news: Model<Document> = model('News', animalSchema);

