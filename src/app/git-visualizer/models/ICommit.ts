import { IUser } from './IUser';

export interface ICommit {
    sha: string;
    commit: {
        message: string;
        comment_count: number;
        author: {
            date: string;
        }
    }
    author: IUser
}