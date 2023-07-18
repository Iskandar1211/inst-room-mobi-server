export interface IProductM {
    id: string;
    name: string;
    img: any;
    price: number;
    inStock: boolean;
    detailed: string;
    isNew: boolean;
    total: number;
    quantity: number;
    categories: string;
}
export interface IProductAcord {
    id: string;
    orderNumber: number;
    created: string;
    received: string;
    purchases: IProductM[];
}
export interface IOrder {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}
export interface IDelivery {
    id: string;
    city: string;
    street: string;
    house: string;
    apartment: string;
    delivery: boolean;
    pickupAddress: string | undefined;
}
export interface IPayment {
    id: string;
    paymentUponReceipt: boolean;
    cash: boolean;
    bankСard: boolean;
    onlinePayment: boolean;
}
export interface IHistoryOfOrder {
    id: string;
    orderNumber: number;
    created: string;
    received: string;
    purchases: IProductM[];
    deliveryInfo: IDelivery[];
    payments: IPayment[];
}
export interface IHistoryOfOrderForServer {
    id: string;
    orderNumber: number;
    created: string;
    received: string;
    purchases: IProductM[];
    deliveryInfo: IDelivery[];
    payments: IPayment[];
}
export interface IRegistrationM {
    id?: string;
    name: string;
    city: string;
    phone: string;
    email: string;
    password: string;
    role: string;
}
export interface ILogin {
    phone?: string;
    email?: string;
    password?: string;
}
export type StackNavigationParams = {
    ProductInfo: {
        product: IProductM;
    };
    Home: undefined;
    Catalog: undefined;
    Profile: undefined;
    Login: undefined;
    Registration: undefined;
    BottomTab: undefined;
};
//# sourceMappingURL=Model.d.ts.map