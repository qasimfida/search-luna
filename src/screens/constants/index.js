import brand1 from '../../assets/brand/brand1.png'
import brand2 from '../../assets/brand/brand2.png'
import model1 from '../../assets/brand/model1.png'
import model2 from '../../assets/brand/model2.png'
export const tiles = [
    {
      clrName: "Blue",
      clrClass: "cc-bg-[#0000FF]",
    },
    {
      clrName: "Purple",
      clrClass: "cc-bg-[#800080]",
    },
    {
      clrName: "Red",
      clrClass: "cc-bg-[#FF0000]",
    },
    {
      clrName: "Brown",
      clrClass: "cc-bg-[#A52A2A]",
    },
    {
      clrName: "White",
      clrClass: "cc-bg-[#FFFFFF]",
    },
    {
      clrName: "Yellow",
      clrClass: "cc-bg-[#FFFF00]",
    },
    {
      clrName: "Green",
      clrClass: "cc-bg-[#008000]",
    },
    {
      clrName: "Orange",
      clrClass: "cc-bg-[#FFA500]",
    },
    {
      clrName: "Black",
      clrClass: "cc-bg-[#000000]",
    },
    {
      clrName: "Beige",
      clrClass: "cc-bg-[#F5F5DC]",
    },
    {
      clrName: "Grey",
      clrClass: "cc-bg-[#808080]",
    },
  ];

  export const brands = [
    {
      name: "Brand 1",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },
    {
      name: "Brand 2",
      image: brand1
    },
    {
      name: "Brand 2",
      image: brand2
    },

  ];
  export const models = [
    {
      name: "A 1",
      image: model1
    },
    {
      name: "A 2",
      image: model2
    }, {
      name: "A 3",
      image: model1
    }, {
      name: "A 4",
      image: model2
    },
    {
      name: "A 5",
      image: model1
    },
    {
      name: "A 6",
      image: model2
    },

  ];
  

  // helper functions

  export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }