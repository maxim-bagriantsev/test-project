export interface SpecializedSubject {
    _id: string;
    string: string;
}


export interface IProduct {
    _id: string;
    title: string
    specializedSubjects: SpecializedSubject[];
    createdAt: Date;
    updatedAt: Date;
}


export interface ServerResponse<T> {
    _id: string;
    title: string
    specializedSubjects: SpecializedSubject[];
    createdAt: Date;
    updatedAt: Date;
    total_count: number
    incomplete_results: boolean
    items: T[]
}