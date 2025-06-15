export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: UserLocation;
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}

export interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number | string;
}
