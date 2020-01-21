import { ImageItem } from '../store/types';


type AppConfig = {
  imagesBaseUrl: string;
  imagesData: ImageItem[];
}

const app: AppConfig = {
  imagesBaseUrl: 'https://my-samples-peter.s3-eu-west-1.amazonaws.com/gallery',
  imagesData: [
    { id: '10e537d9-01a5-42d5-b91c-9dc2f3b00ed7', name: 'coffee-photo.jpg'},
    { id: '15d31f4a-25e9-48e7-a504-dd2c6f292cc3', name: 'cofe-photo-26981.jpg'},
    { id: '1aac128d-0429-46bb-a50c-bfb4d6a6f266', name: 'building-photo-87223.jpg'},
    { id: '1df3e899-7b7e-4d92-8985-cdbf5d14ee3b', name: 'office_supplies-photo-53874.jpg'},
    { id: '2628b1d3-0c6f-4252-924c-f78a140d74df', name: 'mobile-phone-in-hand-2-1243715-1600x2400.jpg'},
    { id: '291b5452-83d0-4efb-91d2-d94c27da6dda', name: 'vacation-photo-24957.jpg'},
    { id: '2c0d31bd-51a7-46d1-83ac-b26ce1bb0569', name: 'digital-map-1140975.jpg'},
    { id: '345fb484-7eb5-4f18-ae90-717a923ea328', name: 'fly-photo-59519.jpg'},
    { id: '37f6dd27-7c11-406a-a602-63ae04e7125b', name: 'antenna-1241510-1279x865.jpg'},
    { id: '3bf7fbf5-d63b-4483-b228-bff181284b19', name: 'zoo-photo-31277.jpg'},
    { id: '3f0f9065-3919-48a2-81fa-b4b81f9ff190', name: 'electric-pole-1633800-1280x960.jpg'},
    { id: '4e023b6c-af91-45ba-89f1-5aff148deb1d', name: 'watch-photo-225085.jpg'},
    { id: '4e92c8a1-fa75-4843-92d9-66cefeddcc49', name: 'shoes-photo-113721.jpg'},
    { id: '5ab366e2-afdf-4208-bc16-de9ef43ed591', name: 'winter-photo-20056911.jpg'},
    { id: '66bc3140-f8af-409f-8087-2ba84db1e44c', name: 'itsupport-1635937-1278x550.jpg'},
    { id: '68aa38dd-9c48-45f0-92ad-0fa03ea906b6', name: 'cello-1635018-1279x853.jpg'},
    { id: '6965a5cf-da19-41d3-968f-3849b7810432', name: 'light-person-woman-fire.jpg'},
    { id: '6988bc77-0c68-4a29-bdc2-df4f446505d1', name: 'clothes-photo-26546.jpg'},
    { id: '6dabdd96-cceb-414c-8f5a-e955b254bea8', name: 'circuit-soldering-1635029-1279x853.jpg'},
    { id: '757538c8-f8f6-408d-98bf-e427f5a7cb04', name: 'dna-helix-background-image-5-1632632.jpg'},
    { id: '83085c61-ed56-4b6c-9119-026030018040', name: 'abstract-music-rock-bw.jpg'},
    { id: '85bdcc56-f849-459a-b9fc-1c3b9be1a79e', name: 'stairs-home-loft-lifestyle.jpg'},
    { id: '9948afc2-fecc-44da-8590-f2ee4c1d8390', name: 'building-in-photo.jpg'},
    { id: 'c00ed000-6663-4849-9f6d-66d949301256', name: 'garden-photo-25309.jpg'},
    { id: 'c577ce97-5089-4a5c-a445-bf1527257cf8', name: 'summer-dessert-sweet-ice-cream.jpg'},
    { id: 'd6d7df31-b11a-422a-8d82-beb0ed972a12', name: 'bicycles-photo-30565.jpg'},
    { id: 'e0bcd3af-ac0d-468d-9c97-0324d593dd8a', name: 'incepto-concept-car-5.jpg'},
    { id: 'e56c9367-a28d-476e-93d8-dfd96507e0f1', name: 'solar-panel-with-propeller-1633803-1279x1706.jpg'},
    { id: 'f5aa45f0-808f-41ac-aaac-9124c2b563b6', name: 'building-photo-87223.jpg'},
    { id: 'ffc615dd-015e-46da-be20-a25ada8874ab', name: 'building-70220.jpg'}
  ]
};

export default app;
