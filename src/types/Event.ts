export interface EventFormData {
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  date: string;
  time: string;
}

export interface EventSubmitData extends EventFormData {
  userId: string;
}
