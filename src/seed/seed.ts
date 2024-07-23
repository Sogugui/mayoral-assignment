  
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
        images: ["Polo1.webp", "Polo1-back.webp"],
      },
      {
        id:"adults_tee_casual",
        name: "Polo manga corta bandas",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo2.webp", "Polo2-side.webp"],
      },
      {
        id:"adults_tee_formal",
        name: "Polo manga corta estampado lateral",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo3.webp", "Polo3-side.webp"],
      },
      {
        id:"adults_tee_sport",
        name: "Polo manga corta tesla",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo4.webp", "Polo4-back.webp"],
      },
      {
        id:"adults_tee_vneck",
        name: "Polo manga corta cyberpunk",
        price: "24,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: true,
        images: ["Polo5.webp", "Polo5-side.webp"],
      },
      {
        id:"adults_tee_crewneck",
        name: "Polo manga corta logos estampados",
        price: "18,99 €",
        discountPrice: "15,19 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo6.webp", "Polo6-side.webp"],
      },
      {
        id:"adults_tee_long_sleeve",
        name: "Polo manga corta logo central",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo7.webp", "Polo7-back.webp"],
      },
      {
        id:"adults_tee_short_sleeve",
        name: "Polo manga corta sunshine estampado",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo8.webp", "Polo8-side.webp"],
      },
      {
        id:"adults_tee_printed",
        name: "Polo manga corta logo serif",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo9.webp", "Polo9-side.webp"],
      },
      {
        id:"adults_tee_striped",
        name: "Polo manga corta buho ",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: true,
        images: ["Polo10.webp", "Polo10-back.webp"],
      },
      {
        id:"adults_tee_graphic",
        name: "Polo manga corta tesla central",
        price: "18,99 €",
        discountPrice: "15,19 €",
        discountPercentage: "20",
        moreColors: true,
        images: ["Polo11.webp", "Polo11-back.webp"],
      },
      {
        id:"adults_tee_solid_color",
        name: "Polo manga corta logo pectoral",
        price: "15,99 €",
        discountPrice: "13,59 €",
        discountPercentage: "15",
        moreColors: true,
        images: ["Polo12.webp", "Polo12-side.webp"],
      },
      {
        id:"adults_tee_cotton",
        name: "Polo manga corta logo central tesla",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo13.webp", "Polo1-back.webp"],
      },
      {
        id:"adults_tee_polyester",
        name: "Polo manga corta fly to the moon",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: false,
        images: ["Polo15.webp", "Polo15-back.webp"],
      },
      {
        id:"adults_tee_blend",
        name: "Polo manga corta cyberpunk oscuro",
        price: "24,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: true,
        images: ["Polo16.webp", "Polo16-side.webp"],
      },
      {
        id:"adults_tee_blend",
        name: "Polo manga corta tesla oscuro",
        price: "20,99 €",
        discountPrice: null,
        discountPercentage: null,
        moreColors: true,
        images: ["Polo17.webp", "Polo17-side.webp"],
      },
    ],
  };
  