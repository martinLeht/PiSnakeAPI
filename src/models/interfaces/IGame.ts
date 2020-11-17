import { Document } from 'mongoose';

// game interface used by the ODM
export interface IGame extends Document {
    gameId: number;
    score: number;
    createdAt: Date;
}