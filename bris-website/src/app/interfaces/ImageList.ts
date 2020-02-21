export interface ImageList {
    id: number;
    createdDate: string;
    notificationCategories: number;
    userID: string;
    sourceID: number;
    seen: boolean;
    notification: string;
    isError: boolean;
    errorMessage?: any;
    errorCode?: any;
}