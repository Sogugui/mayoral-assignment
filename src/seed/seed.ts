  
  interface MayoralProducts {
    id:string
    name: string;
    price: string;
    discountPrice?: string | null;
    discountPercentage?: string | null;
    moreColors: boolean;
    images: string[];
  }
  
  interface SeedData {
    mayoralProducts: MayoralProducts[];
  }
  
  export const initialData: SeedData = {
    mayoralProducts: [
      {
        id:"adults_tee_basic",
        name: "Polo manga corta vortice",
        price: "18,99 €",
        discountPrice: "15,19 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo1.jpg", "Polo1-back.jpg"],
      },
      {
        id:"adults_tee_casual",
        name: "Polo manga corta bandas",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo2.jpg", "Polo2-side.jpg"],
      },
      {
        id:"adults_tee_formal",
        name: "Polo manga corta estampado lateral",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo3.jpg", "Polo3-side.jpg"],
      },
      {
        id:"adults_tee_sport",
        name: "Polo manga corta tesla",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo4.jpg", "Polo4-back.jpg"],
      },
      {
        id:"adults_tee_vneck",
        name: "Polo manga corta cyberpunk",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo5.jpg", "Polo5-side.jpg"],
      },
      {
        id:"adults_tee_crewneck",
        name: "Polo manga corta logos estampados",
        price: "18,99 €",
        discountPrice: "15,19 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo6.jpg", "Polo6-side.jpg"],
      },
      {
        id:"adults_tee_long_sleeve",
        name: "Polo manga corta logo central",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo7.jpg", "Polo7-back.jpg"],
      },
      {
        id:"adults_tee_short_sleeve",
        name: "Polo manga corta sunshine estampado",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo8.jpg", "Polo8-side.jpg"],
      },
      {
        id:"adults_tee_printed",
        name: "Polo manga corta logo serif",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo9.jpg", "Polo9-side.jpg"],
      },
      {
        id:"adults_tee_striped",
        name: "Polo manga corta buho ",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: true,
        images: ["Polo10.jpg", "Polo10-back.jpg"],
      },
      {
        id:"adults_tee_graphic",
        name: "Polo manga corta tesla central",
        price: "18,99 €",
        discountPrice: "15,19 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo11.jpg", "Polo11-back.jpg"],
      },
      {
        id:"adults_tee_solid_color",
        name: "Polo manga corta logo pectoral",
        price: "10,99 €",
        discountPrice: "7,99 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo12.jpg", "Polo12-side.jpg"],
      },
      {
        id:"adults_tee_cotton",
        name: "Polo manga corta logo central tesla",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo13.jpg", "Polo1-back.jpg"],
      },
      {
        id:"adults_tee_polyester",
        name: "Polo manga corta fly to the moon",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo15.jpg", "Polo15-back.jpg"],
      },
      {
        id:"adults_tee_blend",
        name: "Polo manga corta cyberpunk oscuro",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo16.jpg", "Polo16-side.jpg"],
      },
    ],
  };
  