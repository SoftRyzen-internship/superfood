export interface Phone {
    country: string;
    phone: string;
  }
  
  export interface PhoneProps {
    location: 'contacts' | 'footer';
    classNames?: string;
  }
  
  export interface PhoneUA {
    country: string;
    phone: string;
  }
  
  export interface PhoneLT {
    country: string;
    phone: string;
  }
  
  export interface PhoneResponse {
    _id: string;
    phoneUA: PhoneUA;
    phoneLT: PhoneLT;
  }
  