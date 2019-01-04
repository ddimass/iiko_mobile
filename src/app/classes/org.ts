interface Contact {
    email: string;
    location: string;
    phone?: any;
}

export class Org {
    address: string;
    averageCheque?: any;
    contact: Contact;
    currencyIsoName: string;
    description: string;
    homePage?: any;
    id: string;
    isActive: boolean;
    latitude: number;
    logo?: any;
    logoImage?: any;
    longitude: number;
    maxBonus: number;
    minBonus: number;
    name: string;
    networkId?: any;
    organizationType: number;
    phone?: any;
    timezone: string;
    website?: any;
    workTime?: any; 
}
